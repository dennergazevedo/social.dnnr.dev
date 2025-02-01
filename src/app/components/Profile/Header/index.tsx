'use client'
import Image from "next/image";

import styles from './styles.module.scss'
import profileImg from './profile.jpeg'

import { FaLinkedin } from "react-icons/fa6";
import { TbTool } from "react-icons/tb";
import { PiUserCircleGearFill } from "react-icons/pi";
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
            alt="Foto de Denner Azevedo em baixo d'agua com peixes"
            width={120}
            height={120}
          />
        </div>
        <a
          className={styles.toolsLink}
          href="/dnr-cv.pdf"
          download="dnr-cv.pdf"
          aria-label="Currículo de Denner Azevedo"
        >
          <PiUserCircleGearFill size={20} />
        </a>
        <a
          className={styles.toolsLink}
          href="https://tools.dnnr.dev"
          target="_blank"
          aria-label="Site de ferramentas desenvolvido por Denner Azevedo"
        >
          <TbTool size={20} />
        </a>
        <a
          className={styles.profileFollow}
          href="https://www.linkedin.com/in/dnnr/"
          target="_blank"
          aria-label="Rede social LinkedIn do Denner Azevedo"
        >
          Seguir <FaLinkedin size={20} />
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