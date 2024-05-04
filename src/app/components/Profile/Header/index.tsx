import Image from "next/image";

import styles from './styles.module.scss'
import profileImg from './profile.jpeg'

import { FaLinkedin } from "react-icons/fa6";

const HeaderProfile: React.FC = () => {
  return (
    <header className={styles.profileHeader}>
      <div className={styles.profilePhoto}>
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
  )
}

export default HeaderProfile;