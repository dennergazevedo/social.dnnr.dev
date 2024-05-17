import { Fragment, useCallback, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import StoriesProgress from "./progress";

const Stories: React.FC<StoriesProps> = ({
  isOpened,
  stories,
  toggle,
  close
}: StoriesProps) => {
  const [currentStorie, setCurrentStorie] = useState<number>(0);

  const closeStories = useCallback(() => {
    setCurrentStorie(0);
    close();
  }, [close]);
  
  const nextStories = useCallback(
    (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event?.stopPropagation();
      if (currentStorie < stories?.length - 1) {
        setCurrentStorie(currentStorie + 1);
      } else {
        closeStories();
      }
    },
    [currentStorie, stories, closeStories, setCurrentStorie]
  );

  const prevStories = useCallback(
    (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event?.stopPropagation();
      if (currentStorie > 0) {
        setCurrentStorie((prev) => prev - 1);
      }else if(typeof window !== 'undefined'){
        window.dispatchEvent(new CustomEvent('@dnnr:resetStoriesProgress'))
      }
    },
    [currentStorie, setCurrentStorie]
  );

  if (!isOpened) return <Fragment />;

  return (
    <section className={styles.storiesContainer} onClick={closeStories}>
      <div>
        <StoriesProgress 
          nextStories={nextStories} 
          size={stories?.length}
          currentStorie={currentStorie}
        />
        <Image
          src={stories?.[currentStorie]?.primary?.image?.url}
          alt={stories?.[currentStorie]?.primary?.image?.alt}
          fill
        />
        <div onClick={prevStories} data-custom-stories-control="prev" />
        <div onClick={nextStories} data-custom-stories-control="next" />
      </div>
    </section>
  );
};

export default Stories;
