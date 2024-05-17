'use client'
import Image from "next/image";

import styles from './styles.module.scss'
import profileImg from './profile.jpeg'

import { FaLinkedin } from "react-icons/fa6";
import { Fragment, useState } from "react";
import Stories from "../../Stories";

const HeaderProfile: React.FC<ProfileHeaderProps> = ({ stories }: ProfileHeaderProps) => {
  const [storiesOpened, setStoriesOpened] = useState<boolean>(false);

  const toggleStories = () => setStoriesOpened(prev => !prev)
  const closeStories = () => setStoriesOpened(false)

  return (
    <Fragment>
      <header className={styles.profileHeader}>
        <div className={styles.profilePhoto} onClick={toggleStories}>
          <Image 
            src={profileImg} 
            alt="Foto de Denner em baixo d'agua com peixes"
            width={120}
            height={120}
          />
        </div>
        <a 
          className={styles.profileFollow} 
          href="https://www.linkedin.com/in/dnnr/"
          target="_blank"
        >
          Seguir <FaLinkedin size={20}/>
        </a>
      </header>
      {
        stories?.length &&
        <Stories 
          stories={stories} 
          isOpened={storiesOpened} 
          toggle={toggleStories} 
          close={closeStories}
        />
      }
    </Fragment>
  )
}

export default HeaderProfile;