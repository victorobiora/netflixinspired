import { useRouter } from "next/router";
import { errorElement } from "@/styles/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useRef, useState } from "react";
import { isLoggedInActions } from "@/store/nStore";
import Link from "next/link";
import classes from "./LoginComponent.module.css";

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const passwordValue = useRef();
  const [emailValue, setEmailValue] = useState("");
  const Router = useRouter();
  const isLoggedInStatus = useSelector((state) => state.isLoggedIn.success);
  console.log(isLoggedInStatus);
  const [emailCorrect, setEmailCorrect] = useState({
    state: null,
    message: "",
  });
  const [passwordCorrect, setPasswordCorrect] = useState({
    state: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  let totalState = passwordCorrect.state && emailCorrect.state;

  const loginHandler = async (el) => {
    el.preventDefault();
    console.log(passwordValue.current.value);
    setIsSubmitting(true);
    console.log({
      email: emailValue,
      password: passwordValue.current.value,
    });

    try {
      const loginWithEmailandPassword = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue.current.value,
        }),
      });

      const returnData = await loginWithEmailandPassword.json();
      console.log(returnData);
      
      dispatch(isLoggedInActions.updateIsLoggedInState(true));
      Router.push("/browse");
    } catch (err) {
      console.log(err);
      dispatch(isLoggedInActions.updateIsLoggedInState(false));
      Router.push("/login");
    }
  };

  const checkEmailHandler = (el) => {
    const val = el.target.value;

    setEmailValue(val);
    // the second argument in the includes method asks from javascript should start counting from

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

  const checkPasswordHandler = (el) => {
    const val = el.target.value;
    console.log(val);
    if (val.length <= 5) {
      setPasswordCorrect({
        state: false,
        message: "Password cannot be less than 6 characters",
      });
    } else {
      setPasswordCorrect({ state: true });
    }
  };

  return (
    <Fragment>
      <div className={classes.navBar}>
        <Link href="/">
          <h1>NETFLIX</h1>
        </Link>
      </div>
      <section className={classes.container}>
        {isLoggedInStatus === false && (
          <div className={classes.incorrectDetails}>
            The E-mail or the password is incorrect. Try again.
          </div>
        )}
        <h1>Sign In</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={emailValue}
            onChange={checkEmailHandler}
          />
          {emailCorrect.state === false && errorElement(emailCorrect.message)}
          <input
            type="password"
            name="password"
            ref={passwordValue}
            placeholder="Add a Password"
            onChange={checkPasswordHandler}
          />
          {passwordCorrect.state === false &&
            errorElement(passwordCorrect.message)}
          <button
            onClick={loginHandler}
            disabled={!totalState}
            className={`${classes.register} ${
              totalState ? "" : classes.notAllowed
            }`}
          >
            Sign In
          </button>
        </form>

        <div className={classes["new-sign-up"]}>
          <div className={classes["new-sign-up-paragraph"]}>
            New to Netflix?
            <h1>
              <Link href="/signup">Sign Up Now</Link>
            </h1>
          </div>
          <div>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginComponent;
