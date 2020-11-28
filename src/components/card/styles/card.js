import { keyframes } from "styled-components";
import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 0;
  ${({ category }) =>
    category === "mylist" && "margin-top: 1rem; margin-bottom: 3rem;"}
  @media (max-width: 1100px) {
    font-size: 18px;
    color: #999;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }
`;

export const Group = styled.div`
  ${({ category }) =>
    (category === "series" || category === "films") &&
    `background-color: #141414;`};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      ${({ category }) =>
        (category === "series" || category === "films") &&
        `margin-top: -150px;`}
    }
  }
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;

  ${({ category }) =>
    category === "mylist" &&
    "display: grid;grid-template-columns: repeat(5, 1fr); margin-left: 5%; margin-right: 5%;"}

  @media (max-width: 1100px) {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export const Meta = styled.div`
  display: ${({ expand }) => (expand ? "block" : "none")};
  position: absolute;
  bottom: -120px;
  padding: 5%;
  width: 90%;
  background: #181818;
  border-radius: 0px 0px 4px 4px;
`;

export const ExpandedMeta = styled.div`
  display: block;
  position: absolute;
  top: 350px;
  padding: 5%;
  width: 90%;

  background: linear-gradient(
    0deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 1) 93%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 0px 0px 4px 4px;
  z-index: 2;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Logos = styled.div`
  display: ${({ expand }) => (expand ? "block" : "none")};
  margin-top: 5px;
  margin-bottom: 7px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  user-select: none;
  width: 253px;
`;

export const ExpandedLogos = styled.div`
  display: flex;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  user-select: none;
  margin-bottom: 80px;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  margin-top: 3px;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 4px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.5s ease;
  display: flex;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
  img {
    width: 20px;
    height: 20px;
    padding: 0 0.5rem;
  }
`;

export const LogoGroup = styled.div`
  display: inline-block;
  span {
    display: none;
    position: absolute;
    top: 0;
  }
  &:last-of-type {
    position: absolute;
    right: 2%;
  }
  img {
    filter: brightness(0) invert(0.8);
  }
  &:first-of-type {
    img {
      filter: none;
      &:hover {
        filter: brightness(0) invert(0.9);
      }
    }
  }
  &:nth-of-type(2) {
    span {
      left: 0.9vw;
    }
  }
  &:nth-of-type(3) {
    span {
      left: calc(0.9vw + 39px);
    }
  }
  &:nth-of-type(4) {
    span {
      left: calc(0.9vw + 78px);
    }
  }
  &:last-of-type {
    span {
      right: -78% !important;
      top: -43px !important;
    }
  }

  &:hover {
    img {
      filter: brightness(0) invert(1);
    }
    span {
      display: block;
      position: absolute;
      background: #f1f1f1;
      color: #000;
      min-width: 100px;
      text-align: center;
      top: -25px;
      border-radius: 4px;
      padding: 5px;
      font-size: 10px;

      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -7px;
        border-width: 7px;
        border-style: solid;
        border-color: #f1f1f1 transparent transparent transparent;
      }
    }
  }
`;

export const ExpandedLogoGroup = styled.div`
  display: inline-block;
  span {
    display: none;
    position: absolute;
    top: 0;
  }

  img {
    filter: brightness(0) invert(0.8);
  }
  &:first-of-type {
    img {
      filter: none;
    }
  }
  &:nth-of-type(2) {
    span {
      left: 14.1%;
    }
  }
  &:nth-of-type(3) {
    span {
      left: calc(8vw + 55px);
    }
  }
  &:nth-of-type(4) {
    span {
      left: calc(8vw + 112px);
    }
  }

  &:hover {
    img {
      filter: brightness(0) invert(1);
    }
    span {
      display: none;
      position: absolute;
      background: #f1f1f1;
      color: #000;
      width: 120px;
      text-align: center;
      top: -20px;
      border-radius: 4px;
      padding: 14px;
      font-size: 16px;

      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -7px;
        border-width: 7px;
        border-style: solid;
        border-color: #f1f1f1 transparent transparent transparent;
      }
    }
    &:first-of-type {
      img {
        filter: none;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 30px;
  margin-right: 9px;
`;

export const ExpandedLogo = styled.img`
  width: 45px;
  margin-right: 12px;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

export const Gif = styled.img`
  border: 0;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  height: 0;
  z-index: 1;
`;

const showKey = keyframes`
  from {
    height: 0;
  }
  to {
    height: auto;
  }
`;

const hideKey = keyframes`
  from {
    height: auto;
  }
  to {
    height: 0;
  }
`;

export const Misc = styled.div`
  margin-top: 14px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 14px;
  user-select: none;
  display: ${({ expand }) => (expand ? "block" : "none")};

  line-height: normal;
  span {
    &:first-of-type {
      color: #38c147;
      font-weight: bold;
    }
    &:last-of-type {
      border: 1.5px solid white;
      border-radius: 50%;
      padding: 2px;
      margin: 0 5px;
      font-weight: bold;
    }
  }
`;

export const Grid = styled.div`
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  column-gap: 2em;
  display: grid;
  width: 100%;
`;

export const Details = styled.div``;

export const DetailItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 0.5em;
  margin-left: 0;
  word-break: break-word;
  span {
    color: #777;
  }
`;

export const ExpandedMisc = styled.div`
  margin-top: 14px;
  line-height: 27px;
  font-size: 18px;

  color: #fff;
  margin-bottom: 14px;
  user-select: none;
  display: block;

  span {
    &:first-of-type {
      color: #38c147;
      font-weight: bold;
    }
    &:last-of-type {
      border: 1.5px solid white;
      border-radius: 50%;
      padding: 2px;
      margin: 0 5px;
      font-weight: bold;
    }
  }
`;

export const Categories = styled.div`
  margin-top: 10px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 8px;
  user-select: none;
  display: ${({ expand }) => (expand ? "block" : "none")};
  line-height: normal;
  span {
    height: 3px;
    width: 3px;
    background-color: #5a5b56;
    border-radius: 50%;
    display: inline-block;
    margin: 0px 4px 2px 4px;
  }
`;

export const Background = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  left: -100vw;
  right: -100vw;
  bottom: -300vh;
  width: 1000vw;
  height: 1000vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
  background-color: #181818;

  ${({ expand }) =>
    expand
      ? `z-index: 99; transition: 0.6s; transform: translateY(-25%);  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;  position: absolute; color: #fff; background-color: transparent; font-size: 16px; z-index: 2; border-radius: 6px; left: 20%; right: 20%;`
      : "&:hover {transform: scale(1.5); z-index: 99;} &:nth-of-type(5n+1) {&:hover {transform: translateX(20%) scale(1.5); z-index: 99;}}&:nth-of-type(5n+5) {&:hover {transform: translateX(-20%) scale(1.5); z-index: 99;}}"};

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Misc}, &:hover ${Categories} {
      display: ${({ expand }) => (!expand ? "block" : "none")};
      z-index: ${({ expand }) => (!expand ? "100" : "0")};
    }
    &:hover ${Image} {
      border-radius: 4px 4px 0 0;
      animation: ${hideKey} 1s 1s 1 forwards;
    }
    &:hover ${Gif} {
      border-radius: 4px 4px 0 0;
      animation: ${showKey} 1s 1s 1 forwards;
    }
    &:hover ${Logos} {
      display: ${({ expand }) => (!expand ? "block" : "none")};
      z-index: ${({ expand }) => (!expand ? "100" : "0")};
    }
  }

  ${({ category }) =>
    category !== "mylist"
      ? "&:nth-of-type(5n + 1) { margin-left: 5%;} &:nth-of-type(5n + 5) {margin-right: 5%;}"
      : "margin-bottom: 4rem; margin-top: 1rem;"}

  @media (max-width: 1100px) {
    margin: 0;
    &:first-of-type,
    &:last-of-type {
      margin: 0;
    }
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const EpisodeSelector = styled.div`
  padding: 1em 0;
`;
export const EpisodeSelectorHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -moz-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  p {
    font-weight: 700;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
  div {
    font-size: 18px;
  }
`;
export const EpisodeSelectorContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const Episode = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border-radius: 0.25em;
  border-bottom: 1px solid #404040;
  padding: 1em;
  min-height: 8em;

  &:first-of-type {
    border-top: 1px solid #404040;
    background-color: #333;
  }
`;
export const EpisodeIndex = styled.div`
  font-size: 1.5em;
  color: #d2d2d2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 7%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 7%;
  flex: 0 0 7%;
`;

export const PlayIconWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;
export const PlayIcon = styled.img`
  width: 2em;
  height: 2em;
  border: 1px solid #fff;
  padding: 0.5em;
  -webkit-border-radius: 2em;
  border-radius: 2em;
  opacity: 0;
  background-color: rgba(30, 30, 20, 0.5);
  transition: opacity 0.2s ease-in;
  filter: brightness(0) invert(1);
`;

export const EpisodeImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  flex: 0 0 18%;
  border-radius: 4px;
  width: 130px;
  height: 73px;
  &:hover ${PlayIcon} {
    opacity: 1;
  }
`;

export const EpisodeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const EpisodeMetaWrap = styled.div`
  min-height: 100%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 70%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 70%;
  flex: 0 0 70%;
  font-size: 1em;
  p {
    padding: 0 1em 1em;
    margin: 0;
    color: #d2d2d2;
  }
`;
export const EpisodeTitleDuration = styled.div`
  padding: 1em;
  padding-bottom: 0.5em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  span {
    color: #fff;
    font-size: 1em;
    font-weight: 700;
  }
`;
export const EpisodeDescription = styled.p``;

export const MoreLikeThisWrapper = styled.div`
  h4 {
    font-weight: 700;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
`;
export const MoreLikeThisContainer = styled.div``;
export const MoreLikeThisGrid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  grid-gap: 1em;
  -webkit-box-align: stretch;
  align-items: stretch;
  justify-items: stretch;
`;
export const MoreLikeThisItem = styled.div`
    margin: .1em;
    height: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 31%;
    min-height: 22em;
    border-radius: .25em;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: #2f2f2f;
}
`;
export const MoreLikeThisImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover ${PlayIcon} {
    opacity: 1;
    width: 4em;
    height: 4em;
    border-radius: 4em;
  }
`;
export const MoreLikeThisImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const MoreLikeThisTitle = styled.p`
  font-size: 16px;
  span {
    border: 1.5px solid white;
    border-radius: 50%;
    padding: 5px;
    margin: 0 5px;
    font-weight: bold;
  }
`;
export const MoreLikeThisDescription = styled.p`
  padding: 0 1em 1em;
  margin: 0;
  color: #d2d2d2;
  font-size: 14px;
  line-height: 20px;
`;

export const SmallScreen = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: #181818;
  z-index: 999;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const SmallScreenHeaderWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
`;
export const SmallScreenHeader = styled.img`
  width: 30%;
`;
export const SmallScreenImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const SmallScreenText = styled.p`margin: 0 1em;
text-align: center;
font-size: 4vh;
color: #fff;
margin-top: 1rem;
}`;
export const SmallScreenButton = styled.div`
  display: block;
  margin: 1em auto;
  background: #d4001d;
  -webkit-border-radius: 0.1em;
  -moz-border-radius: 0.1em;
  border-radius: 0.1em;
  width: 80%;
  padding: 1em 0;
  text-align: center;
  color: #fff;
  text-decoration: none;
  font-size: 2.5vh;
  margin-top: 2rem;
  margin-bottom: 1em;
`;

export const SmallScreenLinkWrap = styled(SmallScreenHeaderWrap)``;
export const SmallScreenLink = styled.a`
  font-size: 2.5vh;
  align-items: center;
  background: #141414;
  border: 1px solid #1c1c1c;
  border-right: 0;
  border-left: 0;
  width: 100%;
  color: #fff;
  text-decoration: none;
  text-align: center;
  max-height: 3em;
  margin-top: 1rem;
`;
