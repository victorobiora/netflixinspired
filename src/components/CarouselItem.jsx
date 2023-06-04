import classes from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return <div className={classes.itemContainer}>
    <img src={props.imageSrc} alt={props.name}/>
  </div>;
};

export default CarouselItem;
