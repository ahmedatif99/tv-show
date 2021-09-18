import { useReducer } from "react";
import axios from "axios";

import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import { ACTION_TYPES } from "../types";

const ShowsState = (props) => {
  const initialSatte = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialSatte);

  const searchShows = async (searchTerm) => {
    dispatch({ type: ACTION_TYPES.SET_lOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    dispatch({
      type: ACTION_TYPES.SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatch({
      type: ACTION_TYPES.SET_lOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);

    dispatch({
      type: ACTION_TYPES.SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearSingleShow = () => {
    dispatch({
      type: ACTION_TYPES.CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
