import classes from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return <div className={classes.itemContainer}>
    <img src={props.imageSrc}/>
  </div>;
};

export default CarouselItem;
