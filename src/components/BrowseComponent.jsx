import classes from "./BrowseComponent.module.css";
import NavBar from "./NavBar";
import FeatureMovie from "./FeatureMovie";
import CustomCarousel from "./CustomCarousel";
import Footer from "./footer";

const BrowseComponent = (props) => {
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
      <FeatureMovie details = {featureDetails} />
      <CustomCarousel carouselName='My List'/>
      <CustomCarousel carouselName='Highest rated'/>
      <CustomCarousel carouselName='Stuff you might Like'/>
      <Footer/>
    </div>
  );
};

export default BrowseComponent;
