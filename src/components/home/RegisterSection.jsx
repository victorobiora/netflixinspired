import styles from "./RegisterSection.module.css";
import { useRouter } from "next/router";

const RegisterSection = (props) => {
  const router = useRouter();

  const startRegistrationHandler = (el) => {
    el.preventDefault()
    console.log("i am here");
    router.push("/signup");
  };

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
          <button
            className={styles.getStarted}
            onClick={startRegistrationHandler}
          >
            <h2>{`Get Started > `} </h2>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
