import RegisterSection from "./RegisterSection";
import styles from './HomePage.module.css'

const HomePage = (props) => {
  return <main className={styles.Homepage}>
    <RegisterSection/>
  </main>;
};

export default HomePage;