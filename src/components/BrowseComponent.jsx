import classes from "./BrowseComponent.module.css";
import NavBar from "./NavBar";
import FeatureMovie from "./FeatureMovie";
import CustomCarousel from "./CustomCarousel";
import Footer from "./footer";
import { useSelector } from "react-redux";

const BrowseComponent = (props) => {
  const list = useSelector(state=> state.myList.selectedLists)
  console.log(list)
  console.log(Object.entries(props.data).length);
  console.log(props.data.trendingTv)

  const dummyStoreCategories = [
    props.data.topRated,
    props.data.popular,
    props.data.trendingTv,
    { name: "My List", results: list},
  ];
  const featureDetails = {
    nameOfFeature: "Vikings",
    fullImage:
      "https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2015/09/Vikings-s6B-2048x1152-primary-16x9-1.jpg?w=1440",
    imageLogo: "",
    shortInfo:
      "Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.",
    id: "e1",
  };

  return (
    <div className={classes.page}>
      <NavBar signedInName="vic" />
      <FeatureMovie details={featureDetails} />
      {dummyStoreCategories.map((el) => {
        return <CustomCarousel carouselData={el} key={el.name}/>;
      })}
      <Footer />
      <div>{process.env.NEXT_PUBLIC_MY_API_KEY}</div>
    </div>
  );
};

export default BrowseComponent;
