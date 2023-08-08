import CarouselItem from "./CarouselItem";
import classes from "./CustomCarousel.module.css";

export default function CustomCarousel({ carouselData, isSearch }) {
  //title, id, poster_path, release_date, vote_average, overview, genre_ids

  if(carouselData.results.length === 0){
    return null
  }

  return (
    <div
      className={`${classes.parentContainer} ${
        isSearch ? classes.addContainerHeight : ""
      }`}
    >
      <h2>{carouselData.categoryName}</h2>
      <div
        className={`${classes.container} ${
          isSearch && classes.removeContainerWrap
        }`}
      >
        {carouselData.results.map((item) => {
          if (item["backdrop_path"] === null) {
            return;
          } else {
            return (
              <div key={Math.random() * 400000}>
                <CarouselItem
                  carouselCategory={carouselData.categoryName}
                  originalCategoryName={item.originalCategoryName}
                  name={item.title || item.name}
                  imageSrc={item["backdrop_path"] || item.imageSrc}
                  id={item.id}
                  releaseDate={item["release_date"] || item.releaseDate}
                  rating={item["vote_average"] || item.rating}
                  overViewText={item.overview || item.overViewText}
                  genreIDs={item["genre_ids"] || item.genreIDs}
                  hasBeenAdded={item.hasBeenAdded}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
/*
 */
