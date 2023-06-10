import BrowseComponent from "@/components/BrowseComponent";
import axios from "axios";

export const options = (url, region = "US", page = "2") => {
  const accessToken = process.env.MY_API_TOKEN;
  console.log(accessToken);

  return {
    method: "GET",
    url: url,
    params: {
      include_adult: "false",
      include_video: "false",
      with_origin_country: "US",
      language: "en-US",
      page: page,
      sort_by: "popularity.desc",
      region: region,
    },
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
};

const browsePage = (props) => {
  console.log(props.trendingTv);

  return <BrowseComponent data={props} />;
};

export default browsePage;

export const getStaticProps = async () => {
  //GETTING THE TOP RATED MOVIES AND MOST POPULAR AT THE MOMENT FROM API USING DATE CONSTRUCTOR
  
  const getTopRated = await axios.request(
    options("https://api.themoviedb.org/3/movie/top_rated")
  );
  const getPopular = await axios.request(
    options(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${new Date().getFullYear().toString()}`)
  );

  const getTrendingTv = await axios.request(options(`https://api.themoviedb.org/3/discover/tv`))

  const popularData = getPopular.data;
  const topRatedData = getTopRated.data;
  const trendingTVData = getTrendingTv.data

  return {
    props: {
      topRated: {
        name: "Top Rated Movies",
        ...topRatedData,
      },
      popular: {
        name: "Popular Right Now",
        ...popularData,
      },
      trendingTv: {
        name: 'Trending Television',
        ...trendingTVData
      }
    },
  };
};
