import React, { useReducer } from "react";
import CardContext from "./cardContext";
import cardReducer from "./cardReducer";
import { SET_EXPAND, CANCEL_EXPAND } from "../types";

const CardState = (props) => {
  const initialState = {
    expandtitle: null,
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  const setExpand = (title) => {
    dispatch({
      type: SET_EXPAND,
      payload: title,
    });
  };
  const cancelExpand = () => {
    dispatch({
      type: CANCEL_EXPAND,
    });
  };

  return (
    <CardContext.Provider
      value={{ expandtitle: state.expandtitle, setExpand, cancelExpand }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
