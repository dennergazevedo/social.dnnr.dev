import styles from './styles.module.scss'

import HeaderProfile from "./Header";
import ProfileDescription from './Description';

const Profile: React.FC = () => {
  return (
    <section className={styles.profileContainer}>
      <HeaderProfile />
      <ProfileDescription />
    </section>
  )
}

export default Profile;