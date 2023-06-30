import classes from "./HomeContainer.module.css";

const HomeContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default HomeContainer;
