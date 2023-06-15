import BrowseComponent from "@/components/BrowseComponent";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "@/store/nStore";


const browsePage = (props) => {
  const dispatch = useDispatch()

  
  useEffect(()=> {
  //Here, we format the data gotten from the http calls and add the hasBeenAdded feature
 //to all movies and shows to help us dynamically add and remove items from lists
 //so user can see too. We update the redux store with said data
 
 const fetchedStoreCategories = [
  props.topRated,
  props.popular,
  props.trendingTv,
];

  const formattedStoreCategories = fetchedStoreCategories.map(category => {
    
    const formatArrayResults = category.results.map(el => {
      return {
        ...el,
        hasBeenAdded: false
      }
    })

    return {
      ...category,
      results: formatArrayResults
    }
  });

  dispatch(listActions.addToFetchedLists(formattedStoreCategories))


  
  }, [])

  return <BrowseComponent featured={props.featured} />;
};

export default browsePage;

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

    //HERE WE SELECT RANDOMLY A FEATURE FOR THE MAIN BACKGROUND
    const featureDeets = () => {
      const index = Math.round(Math.random() * 19);
     const selected =  popularData.results[index]
     return selected;
    }
  

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
      },
      featured: featureDeets()
    },
  };
};
