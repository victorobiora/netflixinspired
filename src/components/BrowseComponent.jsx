import classes from "./BrowseComponent.module.css";
import NavBar from "./NavBar";
import FeatureMovie from "./FeatureMovie";
import CustomCarousel from "./CustomCarousel";
import Footer from "./footer";
import { useSelector } from "react-redux";

const BrowseComponent = (props) => {

  const list = useSelector(state=> state.myList.selectedLists)
  const fetchedList = useSelector(state=> state.myList.fetchedLists)


  const storeCategories = [
    ...fetchedList,
    { name: "My List", results: list},
  ];



  return (
    <div className={classes.page}>
      <NavBar signedInName="vic" />
      <FeatureMovie deets={props.featured} />
      {storeCategories.map((el) => {
        return <CustomCarousel carouselData={el} key={el.name}/>;
      })}
      <Footer />
      <div>{process.env.NEXT_PUBLIC_MY_API_KEY}</div>
    </div>
  );
};

export default BrowseComponent;
