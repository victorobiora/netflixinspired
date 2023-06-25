import CustomCarousel from "../CustomCarousel";
import { useSelector } from "react-redux";

const SearchResults = props => {
    const fetchedList = useSelector((state) => state.myList.fetchedLists);
   /* const formatArrayResults = props.data.results.map((el) => {
        return {
          ...el,
          hasBeenAdded: false,
          originalCategoryName: category.categoryName,
        };
      });*/
      console.log(fetchedList)
      const car = {
        ...fetchedList[0]
      }

      console.log(car)

    return <CustomCarousel carouselData={car} isSearch={true}></CustomCarousel>
}


export default SearchResults;