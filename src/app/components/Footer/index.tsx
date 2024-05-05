import styles from './styles.module.scss'

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.pageFooter}>
      <div>
        <a href="https://github.com/dennergazevedo" target="_blank">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/dnnr/" target="_blank">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/dnnraz/" target="_blank">
          <FaInstagram size={20} />
        </a>
      </div>
      <span>dnnr.dev © {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer;