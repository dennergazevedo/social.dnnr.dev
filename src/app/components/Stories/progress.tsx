import { Fragment, useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const StoriesProgress: React.FC<StoriesProgressProps> = ({
  nextStories,
  size,
  currentStorie
}: StoriesProgressProps) => {
  const [progress, setProgress] = useState(0);

  const configPrev = useCallback((idx: number) => {
    return currentStorie > idx ? 100 : 0
  }, [currentStorie])

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStories({ stopPropagation: () => {} });
          return 0;
        }
        return prev + 0.1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [currentStorie, nextStories]);

  useEffect(() => {
    window.addEventListener('@dnnr:resetStoriesProgress', () => setProgress(0))

    return () => {
      window.removeEventListener('@dnnr:resetStoriesProgress', () => setProgress(0))
    }
  }, [])

  return (
    <div className={styles.storieProgressBarContainer}>
      {new Array(size).fill(null).map((_, idx: number) => (
        <div key={idx} className={styles.storieProgressBarBody}>
          <div
            className={styles.storieProgressBar}
            style={{
              width: `${currentStorie === idx ? progress : configPrev(idx)}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StoriesProgress;
