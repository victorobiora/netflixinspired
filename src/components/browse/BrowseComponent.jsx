import classes from "./BrowseComponent.module.css";
import FeatureMovie from "./FeatureMovie";
import CustomCarousel from "./CustomCarousel";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import NavBar from "../general/NavBar";

const BrowseComponent = (props) => {
  const list = useSelector((state) => state.myList.selectedLists);
  const fetchedList = useSelector((state) => state.myList.fetchedLists);

  const storeCategories = [...fetchedList];
  const picked = {categoryName: "My List", results: list}

  return (
    <div className={classes.page}>
      <NavBar/>
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
