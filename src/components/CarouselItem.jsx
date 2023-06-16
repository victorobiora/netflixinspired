import classes from "./CarouselItem.module.css";
import { useDispatch } from "react-redux";
import { listActions } from "@/store/nStore";
import { useState } from "react";

const CarouselItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const toggleListHandler = (event) => {
    event.preventDefault();
      console.log("i was clicked");
      setClicked(true);
      dispatch(listActions.addOrRemoveFromList(props));

  };
console.log(props)
  return (
    <div className={classes.parentContainer}>
      <div className={classes.itemContainer}>
        <img
          src={`https://www.themoviedb.org/t/p/original${props.imageSrc}`}
          alt={props.name}
        />
      </div>
      <div className={classes.movieName}>{props.name}</div>
      {!clicked && (
        <div className={classes.addToList} onClick={toggleListHandler}>
          {props.hasBeenAdded ? "Remove from List" : "Add to List"}
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
