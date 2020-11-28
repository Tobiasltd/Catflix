import { RATE_ITEM, ADD_ITEM, GET_MYLIST, GET_RATINGS } from "../types";

const profileReducer = (state, action) => {
  switch (action.type) {
    case RATE_ITEM:
      return {
        ...state,
      };
    case ADD_ITEM:
      return {
        ...state,
      };
    case GET_MYLIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_RATINGS:
      return {
        ...state,
        ratings: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
