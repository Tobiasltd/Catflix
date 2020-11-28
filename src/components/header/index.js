import React, { useState, useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import PlayerContext from "../../context/player/playerContext";
import CardContext from "../../context/card/cardContext";
import { Player } from "../../components";
import {
  Background,
  Container,
  Group,
  Picture,
  Profile,
  Dropdown,
  ButtonLink,
  Logo,
  Feature,
  Text,
  Link,
  FeatureCallOut,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  MoreInfo,
  ShowLogo,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/media/users/${src}.png`} />;
};

Header.ShowLogo = function HeaderShowLogo({ src, ...restProps }) {
  return <ShowLogo {...restProps} src={`/media/misc/${src}.png`} />;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/media/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ src, children, ...restProps }) {
  const playerContext = useContext(PlayerContext);
  const { setVideo } = playerContext;
  const onClick = () => {
    setVideo(src);
  };
  return (
    <>
      <PlayButton onClick={onClick} {...restProps}>
        <img src="/media/icons/play.png" alt="play" />
        <span>Play</span>
        {children}
      </PlayButton>
      <Player>
        <Player.Video src={src} />
      </Player>
    </>
  );
};

Header.MoreInfo = function HeaderMoreInfo({ title, children, ...restProps }) {
  const cardContext = useContext(CardContext);
  const { setExpand } = cardContext;
  const onExpand = () => {
    setExpand(title);
    window.scrollTo(0, 1500);
  };
  return (
    <MoreInfo onClick={onExpand} {...restProps}>
      <img src="/media/icons/info.png" alt="more" />
      <span>More Info</span>
      {children}
    </MoreInfo>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
