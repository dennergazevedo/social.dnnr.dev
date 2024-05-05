import Link from "next/link";
import styles from "./styles.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.pageHeader}>
      <Link href="/" className={styles.pageHeaderLogo}>
        <strong>d</strong>
        <span>nr</span>
        <p>.dev</p>
      </Link>
    </header>
  );
};

export default Header;
