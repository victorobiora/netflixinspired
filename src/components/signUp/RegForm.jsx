import { useState, useRef } from "react";
import classes from "./RegForm.module.css";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";


export const errorElement = (text, exported=false) => {
  return (
    <div className={`${exported ? classes.exportedErrorNotif : classes.errorNotif }`}>
      <svg
        width="16"
        height="13"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Failure"
        role="img"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.96967 6.03033L6.93934 8L4.96967 9.96967L6.03033 11.0303L8 9.06066L9.96967 11.0303L11.0303 9.96967L9.06066 8L11.0303 6.03033L9.96967 4.96967L8 6.93934L6.03033 4.96967L4.96967 6.03033Z"
          fill="currentColor"
        ></path>
      </svg>
      <p className={classes.errorText}>{text}</p>
    </div>
  );
};


const RegForm = (props) => {
  const passwordValue = useRef()
  const [emailValue, setEmailValue] = useState(useSelector(state => state.email.setEmail))
  const Router = useRouter();
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

  const submitHandler = async (el) => {
    el.preventDefault();
    setIsSubmitting(true)
    console.log({
      email: emailValue,
      password: passwordValue.current.value
    })
    
    const registerNewAccount = await fetch('/api/registernew', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue.current.value
      })
    })

   const returnData = await registerNewAccount.json();
    console.log(returnData)
    Router.push('/signup/signupComplete')
  };

  const checkEmailHandler = (el) => {
    const val = el.target.value;

    setEmailValue(val)
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
