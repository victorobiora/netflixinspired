import classes from "./ErrorComponent.module.css";
import NavBar from "./NavBar";

const ErrorComponent = (props) => {
  let text;

  if (props.error.statusCode === 404) {
    text = `Sorry, we don't have that`;
  } else {
    text = `Sorry! we can't get your search results for some reason.`;
  }
  return (
    <section className={classes.errorSection}>
      <NavBar />
      <div className={classes.errorText}>{text}</div>
    </section>
  );
};

export default ErrorComponent;
