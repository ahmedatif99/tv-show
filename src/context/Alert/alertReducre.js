import { ACTION_TYPES } from "../types";

const AlertsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALERT:
      return action.payload;

    case ACTION_TYPES.REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};

export default AlertsReducer;
