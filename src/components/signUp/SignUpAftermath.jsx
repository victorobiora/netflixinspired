import classes from "./SignUpAftermath.module.css";
import Link from "next/link";

const SignUpAftermath = (props) => {
  const text = props.successful
    ? "Sign up was successful. Proceed to sign in "
    : "For some reason, we failed to sign you up. Go back to the HomePage?";
  const svgSrc = props.successful ? "" : "";
  const pickedLink = props.successful ? "/login" : "";
  const linkText = props.successful ? "Proceed to Log In" : "Back to HomePage";

  return (
    <div className={classes.container}>
      <div className={classes.progressImage}>{svgSrc}</div>
      <h2>{text}</h2>
      <Link href={pickedLink}>{linkText}</Link>
    </div>
  );
};

export default SignUpAftermath;
