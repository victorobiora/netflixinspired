import styles from "./RegisterSection.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { emailActions } from "@/store/nStore";
import { errorElement } from "../../styles/svgIcons";
import Link from "next/link";


const RegisterSection = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const emailVal = useRef();
  const [emailCorrect, setEmailCorrect] = useState({
    state: null,
    message: "",
  });

  const checkEmailHandler = (el) => {
    const val = emailVal.current.value;
    console.log(val.length);

    if (val.length <= 4) {
      setEmailCorrect({
        state: false,
        message: "email cannot be less than 5 characters",
      });
    } else if (val.length > 4 && val.includes(`@`) === false) {
      setEmailCorrect({ state: false, message: "Please enter a valid email" });
    } else if (
      val.length > 4 &&
      val.includes(`@`) &&
      val.includes(`.`, val.indexOf(`@`)) === false
    ) {
      setEmailCorrect({ state: false, message: "Please enter a valid email" });
    } else if (
      val.length > 4 &&
      val.includes(`@`) &&
      val.includes(`.`, val.indexOf(`@`)) &&
      val.lastIndexOf(".") === val.length - 1
    ) {
      setEmailCorrect({ state: false, message: "Please enter a valid email" });
    } else {
      setEmailCorrect({ state: true });
    }
  };

  const startRegistrationHandler = (el) => {
    const val = emailVal.current.value;
    el.preventDefault();

    if (val.length === 0) {
      setEmailCorrect({
        state: false,
        message: "Please enter a valid email first",
      });
    } else {
      dispatch(emailActions.addEmail(emailVal.current.value));
      router.push("/signup");
    }
  };

  return (
    <div className={styles.regSection}>
      <div className={styles.navBar}>
        <Link href="/">
          <h1>NETFLIX</h1>
        </Link>
        <Link href='/login' className={styles.signIn}>
            Log In
        </Link>
      </div>
      <div className={styles.regDetails}>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p className={styles.watch}>Watch anywhere. Cancel anytime.</p>
        <p className={styles.watch2}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className={styles.signUpForm}>
          <input
            type="email"
            placeholder="E-mail Address"
            onChange={checkEmailHandler}
            ref={emailVal}
          />
          {emailCorrect.state === false &&
            errorElement(emailCorrect.message, true)}
          <button
            className={styles.getStarted}
            disabled={emailCorrect.state === false}
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
