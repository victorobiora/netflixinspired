import CustomCarousel from "@/components/browse/CustomCarousel";
import { useSelector } from "react-redux";
import Protected from "@/components/general/Protected";
import NavBar from "@/components/general/NavBar";

const myList = () => {
  const list = useSelector((state) => state.myList.selectedLists);
  const picked = { categoryName: "My List", results: list };

  return (
    <Protected>
      <NavBar />
      <CustomCarousel carouselData={picked} isSearch={true} />
    </Protected>
  );
};

export default myList;
