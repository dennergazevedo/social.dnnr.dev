import Link from 'next/link';
import styles from './styles.module.scss'
import { IoIosArrowRoundBack } from "react-icons/io";

const ColorBlock: React.FC = () => {
  return (
    <Link className={styles.colorBlock} href={'/#conteúdo'}>
      <IoIosArrowRoundBack size={24} color='#FFF'/>
      <p data-go-back-label={true}>voltar</p>
    </Link>
  )
}

export default ColorBlock;