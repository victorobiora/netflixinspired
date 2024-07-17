import { useState, useRef } from "react";
import classes from "./RegForm.module.css";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { emailActions } from "@/store/nStore";
import { useDispatch } from "react-redux";
import { errorElement } from "@/styles/svgIcons";
import { useSelector } from "react-redux";

const RegForm = (props) => {
  const dispatch = useDispatch();
  const passwordValue = useRef();
  const [emailValue, setEmailValue] = useState(
    useSelector((state) => state.email.setEmail)
  );
  const Router = useRouter();
  const [emailCorrect, setEmailCorrect] = useState({
    state: true,
    message: "",
  });
  const [passwordCorrect, setPasswordCorrect] = useState({
    state: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  let totalState = passwordCorrect.state && emailCorrect.state;

  const submitHandler = async (el) => {
    el.preventDefault();
    setIsSubmitting(true);
    console.log({
      email: emailValue,
      password: passwordValue.current.value,
    });

    try {
      const registerNewAccount = await fetch("/api/registernew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue.current.value,
        }),
      });

      const returnData = await registerNewAccount.json();
      console.log(returnData);
      dispatch(
        emailActions.updateEmailState({
          success: true,
          message: returnData.userCredentials,
        })
      );
      Router.push("/signup/signupComplete");
    } catch (err) {
      dispatch(emailActions.updateEmailState({ success: false }));
      Router.push("/signup/signupComplete");
    }
  };

  const checkEmailHandler = (el) => {
   const val = emailValue

    setEmailValue(el.target.value);
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
    <section className={classes.container}>
      <div className={classes.details}>
        <div className={classes.step1}>
          STEP <em>2</em> OF <em>3</em>
        </div>
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
      </div>
      {isSubmitting && (
        <div className={classes.spinner}>
          <TailSpin
            height="100"
            width="100"
            color="#e50914"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      )}
      {!isSubmitting && (
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

          <label>
            <input type="checkbox" /> Please do not email me Netflix Special
            Orders
          </label>
          <button
            onClick={submitHandler}
            disabled={!totalState}
            className={`${classes.register} ${
              totalState ? "" : classes.notAllowed
            }`}
          >
            Next
          </button>
        </form>
      )}
    </section>
  );
};

export default RegForm;
