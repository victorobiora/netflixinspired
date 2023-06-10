import CarouselItem from "./CarouselItem";
import classes from "./CustomCarousel.module.css";
import Link from "next/link";

export default function CustomCarousel({ carouselData }) {
  console.log(carouselData.results);

  //title, id, poster_path, release_date, vote_average, overview, genre_ids
  return (
    <div className={classes.parentContainer}>
      <h2>{carouselData.name}</h2>
      <div className={classes.container}>
        {carouselData.results.map((item) => {
          if (item["backdrop_path"] === null) {
            return;
          } else {
            return (
              <Link href={`${item.id}`} key={Math.random() * 400000} onMouse>
                <CarouselItem
                  name={item.title || item.name}
                  imageSrc={`https://www.themoviedb.org/t/p/original${item["backdrop_path"]}`}
                  id={item.id}
                  releaseDate={item["release_date"]}
                  rating={item["vote_average"]}
                  overViewText={item.overview}
                  genreIDs={item["genre_ids"]}            
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
