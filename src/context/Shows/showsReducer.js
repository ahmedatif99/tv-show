import { ACTION_TYPES } from "../types";

const ShowsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_lOADING:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };

    case ACTION_TYPES.SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
        loading: false,
      };

    case ACTION_TYPES.CLEAR_SINGLE_SHOW:
      return {
        ...state,
        singleShow: {},
      };

    default:
      return state;
  }
};

export default ShowsReducer;
