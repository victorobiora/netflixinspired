import SearchResults from "@/components/search/SearchResults";
import { options } from "../browse";
import axios from "axios";
import { Fragment } from "react";
import ErrorComponent from "@/components/ErrorComponent";

const searchPage = (props) => {
  console.log(props);
  return (
    <Fragment>
      {props.error && <ErrorComponent error={props.error} />}
      {props.data && <div>njudf</div>}
    </Fragment>
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
      options(`https://api.themoviedb.org/3/search/tv?query=${searchData}`)
    );
    if (getResults.ok) {
      const data = getResults.data;
      return {
        props: {
          data,
        },
      };
    } else if (response.status === 404) {
      return {
        props: {
          error: { statusCode: 404, message: "Item not found" },
        },
      };
    } else {
      throw new Error("An error occurred while processing the request");
    }
  } catch (err) {
    return {
      props: {
        error: { statusCode: 500, message: err.message },
      },
    };
  }
};
