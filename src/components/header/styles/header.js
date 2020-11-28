import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  ${({ src }) =>
    src &&
    `background: url(../media/misc/${src}.jpg) top left / cover no-repeat;`})
`;

// background
// @media (max-width: 1100px) {
//   ${({ dontShowOnSmallViewPort }) =>
//     dontShowOnSmallViewPort && `background: none;`}
// }

export const Container = styled.div`
  display: flex;
  margin: 0 5%;

  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1001px) {
    height: 64px;
  }
  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    &:last-of-type {
      display: none;
    }
    margin-right: 10px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  @media (min-width: 1001px) {
    padding: 150px 0 500px 0;
  }

  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    img {
      width: 70%;
      margin-bottom: 1rem;
    }
  }
`;

// @media (max-width: 1100px) {
//   display: none;
// }

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ShowLogo = styled.img`
  width: 40%;
  margin-bottom: 2rem;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 4px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 1rem;
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
  span {
    padding-right: 0.75rem;
  }

  @media (max-width: 1100px) {
    padding: 0.4rem;
    font-size 12px;
    img {
      width: 12px;
      height: 12px;
      padding: 0 0.5rem;
      margin-bottom: 0;
    }
  }
`;

export const MoreInfo = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  flex-shrink: 0;
  padding-right: 2.4rem;
  border: 0;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  justify-content: center;
  opacity: 1;
  padding: 0.8rem;
  position: relative;
  user-select: none;
  will-change: background-color, color;
  word-break: break-word;
  white-space: nowrap;
  margin-top: 10px;
  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
  img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
    padding: 0 0.5rem;
  }
  span {
    padding-right: 0.75rem;
  }
  @media (max-width: 1100px) {
    padding: 0.4rem;
    font-size 12px;
    img {
      width: 12px;
      height: 12px;
      padding: 0 0.5rem;
      margin-bottom: 0;
    }
  }
`;
