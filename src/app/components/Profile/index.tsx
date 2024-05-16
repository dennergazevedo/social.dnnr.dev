import styles from './styles.module.scss'

import HeaderProfile from "./Header";
import ProfileDescription from './Description';

const Profile: React.FC<ProfileProps> = ({ stories }: ProfileProps) => {
  return (
    <section className={styles.profileContainer}>
      <HeaderProfile stories={stories} />
      <ProfileDescription />
    </section>
  )
}

export default Profile;