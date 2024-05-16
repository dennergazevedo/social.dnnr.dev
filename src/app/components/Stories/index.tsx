import { Fragment, useCallback, useState } from "react";
import Image from "next/image";
import styles from './styles.module.scss';

const Stories: React.FC<StoriesProps> = ({ isOpened, stories, toggle }: StoriesProps) => {
  console.log("stories", stories);
  const [currentStorie, setCurrentStorie] = useState<number>(0);

  const closeStories = useCallback(() => {
    setCurrentStorie(0)
    toggle()
  }, [toggle])

  const nextStories = useCallback((event: MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    if(currentStorie !== (stories?.length - 1)){
      setCurrentStorie(prev => prev + 1)
    }else{
      closeStories()
    }
  }, [currentStorie, stories])

  const prevStories = useCallback((event: MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    if(currentStorie !== 0){
      setCurrentStorie(prev => prev - 1)
    }
  }, [currentStorie, stories])

  if(!isOpened) return <Fragment />

  return (
    <section className={styles.storiesContainer} onClick={closeStories}>
      <div>
        <Image 
          src={stories?.[currentStorie]?.primary?.image?.url} 
          alt={stories?.[currentStorie]?.primary?.image?.alt} 
          fill 
        />
        <div onClick={prevStories} data-custom-stories-control="prev"/>
        <div onClick={nextStories} data-custom-stories-control="next" />
      </div>
    </section>
  )
}

export default Stories;