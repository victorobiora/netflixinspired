import CustomCarousel from "@/components/CustomCarousel";
import styles from "../../components/BrowseComponent.module.css";
import { useSelector } from "react-redux";

const myList = () => {
  const list = useSelector((state) => state.myList.selectedLists);
  const picked = { categoryName: "My List", results: list };

  return (
    <div className={styles.page}>
      <CustomCarousel carouselData={picked} isSearch={true} />
    </div>
  );
};

export default myList;
