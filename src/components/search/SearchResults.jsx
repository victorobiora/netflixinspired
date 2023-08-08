import { Fragment } from "react";
import CustomCarousel from "../browse/CustomCarousel";
import { useSelector } from "react-redux";
import NavBar from "../general/NavBar";

const SearchResults = (props) => {
  const searchList = useSelector((state) => state.myList.searchList);
  /* const formatArrayResults = props.data.results.map((el) => {
        return {
          ...el,
          hasBeenAdded: false,
          originalCategoryName: category.categoryName,
        };
      });*/
  console.log(searchList);

  return (
    <Fragment>
      <NavBar />
      <CustomCarousel carouselData={{
        categoryName: 'Search Results',
        results: searchList
      }} isSearch={true}></CustomCarousel>
    </Fragment>
  );
};

export default SearchResults;
/*(
    
  );*/
