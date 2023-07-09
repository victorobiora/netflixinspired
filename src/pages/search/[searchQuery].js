import SearchResults from "@/components/search/SearchResults";
import { options } from "../browse";
import axios from "axios";
import { Fragment } from "react";
import ErrorComponent from "@/components/general/ErrorComponent";
/*<Fragment>
      {props.error && <ErrorComponent error={props.error} />}
      {props.data && <SearchResults />}
    </Fragment>*/
const searchPage = (props) => {
  console.log(props)
  return (
    null
  );
};

export default searchPage;

export const getStaticPaths = async () => {
  return {
    paths: [
      // since this is a search page, there is no need to preset allowed params
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const searchData = context.params.searchQuery;
  
  try {
    const getResults = await axios.request(
      options(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(searchData)}`)
       );
      const data = getResults.data;
      return {
        props: {
          data,
        }
      }
  } catch (err) {
    return {
      props: {
        error: { statusCode: 500, message: err.message, s: searchData },
      },
    };
  }
};
