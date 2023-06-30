import classes from "./StepOneComponent.module.css";
import Link from "next/link";

const StepOne = (props) => {
  return (
    <div className={classes.stepContainer}>
      <div className={classes.details}>
        <div className={classes.image}>
            <img alt="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"/>
        </div>
        <div className={classes.step1}> STEP <em>1</em> OF <em>3</em></div>
        <h2>Finish Setting up your Account</h2>
        <p>
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
      </div>
      <Link href='/signup/regform' className={classes.gotoReg}>Next</Link>
    </div>
  );
};

export default StepOne;
