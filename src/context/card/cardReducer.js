import { SET_EXPAND, CANCEL_EXPAND } from "../types";

const cardReducer = (state, action) => {
  switch (action.type) {
    case SET_EXPAND:
      return {
        ...state,
        expandtitle: action.payload,
      };
    case CANCEL_EXPAND:
      return {
        ...state,
        expandtitle: null,
      };
    default:
      return state;
  }
};

export default cardReducer;
