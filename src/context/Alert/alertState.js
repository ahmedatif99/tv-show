import { useReducer } from "react";

import AlertsContext from "./alertContext";
import AlertsReducer from "./alertReducre";
import { ACTION_TYPES } from "../types";

import React from "react";

const AlertsState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({
      type: ACTION_TYPES.SET_ALERT,
      payload: {
        message,
        type,
      },
    });

    setTimeout(() => dispatch({ type: ACTION_TYPES.REMOVE_ALERT }), 5000);
  };

  return (
    <AlertsContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};

export default AlertsState;
