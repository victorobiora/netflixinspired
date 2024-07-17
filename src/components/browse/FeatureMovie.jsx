import classes from "./FeatureMovie.module.css";

const FeatureMovie = ({ deets }) => {

  return (
    <section
      className={classes.featureContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 70%,  #141414), url(https://www.themoviedb.org/t/p/original${deets["backdrop_path"]})`,
      }}
    >
      <div className={classes.featureDetails}>
        <h1 className={classes.title}>
          {deets.title}
        </h1>
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
