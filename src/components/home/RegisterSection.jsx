import styles from "./RegisterSection.module.css";

const RegisterSection = (props) => {
  return (
    <div className={styles.regSection}>
      <div className={styles.regDetails}>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p className={styles.watch}>Watch anywhere. Cancel anytime.</p>
        <p className={styles.watch2}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className={styles.signUpForm}>
          <input type="email" placeholder="E-mail Address" />
          <button className={styles.getStarted}>
            <h2>{`Get Started > `} </h2>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
