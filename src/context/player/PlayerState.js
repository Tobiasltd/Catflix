import React, { useReducer } from "react";
import PlayerContext from "./playerContext";
import playerReducer from "./playerReducer";
import { SET_VIDEO, CANCEL_VIDEO } from "../types";

const PlayerState = (props) => {
  const initialState = {
    video: false,
    videosource: null,
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setVideo = (src) => {
    dispatch({
      type: SET_VIDEO,
      payload: src,
    });
  };
  const cancelVideo = () => {
    dispatch({
      type: CANCEL_VIDEO,
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        video: state.video,
        videosource: state.videosource,
        setVideo,
        cancelVideo,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
