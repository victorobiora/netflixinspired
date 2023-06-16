import CarouselItem from "./CarouselItem";
import classes from "./CustomCarousel.module.css";
import Link from "next/link";

export default function CustomCarousel({ carouselData }) {
  //title, id, poster_path, release_date, vote_average, overview, genre_ids

  return (
    <div className={classes.parentContainer}>
      <h2>{carouselData.categoryName}</h2>
      <div className={classes.container}>
        {carouselData.results.map((item) => {
          if (item["backdrop_path"] === null) {
            return;
          } else {
            return (
              <Link href={`${item.id}`} key={Math.random() * 400000}>
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
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
/*
 */
