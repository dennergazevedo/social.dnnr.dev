import styles from './styles.module.scss'

import { MdVerified } from "react-icons/md";

import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaLink, FaCalendarDay } from "react-icons/fa";


const ProfileDescription: React.FC = () => {
  return (
    <div className={styles.profileDescription}>
      <h1 className={styles.profileDescriptionName}>
        Denner Azevedo 
        <div className={styles.profileVerifyed}>
          <MdVerified size={24} color="#0776B3"/>
        </div>
      </h1>
      <span className={styles.profileDescriptionRole}>Tech Lead & Senior Developer</span>
      <p className={styles.profileDescriptionText}>Uso minhas habilidades de desenvolvimento como uma ferramenta para 
        simplificar e otimizar a experiência do cliente, transformando o site 
        em uma poderosa ferramenta de vendas, captação e retenção de clientes.
      </p>
      <div className={styles.profileIcons}>
        <div>
          <BsFillSuitcaseLgFill size={16} color="#828282"/>
          <span>Atuando</span>
        </div>
        <div>
          <FaLink size={16} color="#828282"/>
          <a href="https://links.dnnr.dev" target='_blank'>Links</a>
        </div>
        <div>
          <FaCalendarDay size={16} color="#828282"/>
          <span>Dev desde jan 2018</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileDescription;