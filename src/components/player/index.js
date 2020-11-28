import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PlayerContext from "../../context/player/playerContext";
import { Container, Overlay, Inner, Close } from "./styles/player";

export default function Player({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const playerContext = useContext(PlayerContext);
  const { cancelVideo, video, videosource } = playerContext;
  const onClick = () => {
    cancelVideo();
  };
  return (
    video &&
    ReactDOM.createPortal(
      <Overlay data-testid="player">
        <Inner>
          <video id="catflix-player" autoPlay controls>
            <source src={videosource} type="video/mp4" />
          </video>
          <Close onClick={onClick} />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};
