import { Fragment } from "react";
import CustomCarousel from "../browse/CustomCarousel";
import { useSelector } from "react-redux";
import NavBar from "../general/NavBar";

const SearchResults = (props) => {
  const fetchedList = useSelector((state) => state.myList.fetchedLists);
  /* const formatArrayResults = props.data.results.map((el) => {
        return {
          ...el,
          hasBeenAdded: false,
          originalCategoryName: category.categoryName,
        };
      });*/
  console.log(fetchedList);
  const car = {
    ...fetchedList[0],
  };

  console.log(car);

  return (
    <Fragment>
      <NavBar />
      <CustomCarousel carouselData={car} isSearch={true}></CustomCarousel>
    </Fragment>
  );
};

export default SearchResults;
