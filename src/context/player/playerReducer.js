import { SET_VIDEO, CANCEL_VIDEO } from "../types";

const playerReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEO:
      return {
        ...state,
        video: true,
        videosource: action.payload,
      };
    case CANCEL_VIDEO:
      return {
        ...state,
        video: false,
        videosource: null,
      };
    default:
      return state;
  }
};

export default playerReducer;
