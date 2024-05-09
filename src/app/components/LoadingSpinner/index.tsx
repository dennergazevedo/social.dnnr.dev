import styles from './styles.module.scss'
import { AiOutlineLoading } from "react-icons/ai";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingSpinner} data-custom-loading="true">
      <AiOutlineLoading size={16}/>
    </div>
  )
}

export default LoadingSpinner;