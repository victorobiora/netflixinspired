import classes from "./FeatureMovie.module.css";

const FeatureMovie = ({ details }) => {
  return (
    <section
      className={classes.featureContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 70%,  #141414), url(${details.fullImage})`,
      }}
    >
      <div className={classes.featureDetails}>
        <div>
          <img src={details.imgLogo} />
        </div>
        <div className={classes.text}>{details.shortInfo}</div>
        <div className={classes.buttons}>
          <button className={classes.play}>
            <h3>Play</h3>
          </button>
          <button className={classes.moreInfo}>
            <h3>More Info</h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
