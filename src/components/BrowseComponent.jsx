import classes from "./BrowseComponent.module.css";
import FeatureMovie from "./FeatureMovie";
import CustomCarousel from "./CustomCarousel";
import Footer from "./footer";
import { useSelector } from "react-redux";

const BrowseComponent = (props) => {
  const list = useSelector((state) => state.myList.selectedLists);
  const fetchedList = useSelector((state) => state.myList.fetchedLists);

  const storeCategories = [...fetchedList];
  const picked = {categoryName: "My List", results: list}
  console.log(list)
  console.log(fetchedList)
  console.log(storeCategories);

  return (
    <div className={classes.page}>
      <FeatureMovie deets={props.featured} />
      {storeCategories.map((el) => {
        return <CustomCarousel carouselData={el} key={el.categoryName} />;
      })}
       <CustomCarousel carouselData={picked} key={picked.categoryName} />
      <Footer />
    </div>
  );
};

export default BrowseComponent;
