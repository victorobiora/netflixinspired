import { useEffect, useState } from "react";
import classes from "./CarouselItem.module.css";
import { options } from "@/pages/browse";
import axios from "axios";

const CarouselItem = (props) => {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.itemContainer}>
        <img src={props.imageSrc} alt={props.name} />
      </div>
      <div className={classes.movieName}>{props.name}</div>
    </div>
  );
};

export default CarouselItem;
