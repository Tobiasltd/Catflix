import React, { useContext, useEffect, useState } from "react";
import PlayerContext from "../../context/player/playerContext";
import ProfileContext from "../../context/profile/profileContext";
import CardContext from "../../context/card/cardContext";

import {
  Container,
  Group,
  Title,
  Meta,
  ExpandedMeta,
  Entities,
  Background,
  Item,
  Image,
  Logos,
  Misc,
  Categories,
  Logo,
  LogoGroup,
  ExpandedLogos,
  ExpandedMisc,
  ExpandedLogo,
  ExpandedLogoGroup,
  PlayButton,
  Gif,
  Grid,
  Details,
  DetailItem,
  EpisodeSelector,
  EpisodeSelectorHeader,
  EpisodeSelectorContainer,
  Episode,
  EpisodeIndex,
  EpisodeImageWrap,
  EpisodeImage,
  PlayIconWrap,
  PlayIcon,
  EpisodeMetaWrap,
  EpisodeTitleDuration,
  EpisodeDescription,
  MoreLikeThisWrapper,
  MoreLikeThisContainer,
  MoreLikeThisGrid,
  MoreLikeThisItem,
  MoreLikeThisImage,
  MoreLikeThisImageWrap,
  MoreLikeThisTitle,
  MoreLikeThisDescription,
  SmallScreen,
  SmallScreenHeaderWrap,
  SmallScreenHeader,
  SmallScreenImage,
  SmallScreenText,
  SmallScreenButton,
  SmallScreenLinkWrap,
  SmallScreenLink,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.NoItems = function CardNoItems({ children, ...restProps }) {
  return (
    <Title {...restProps}>There are no items on your list{children}</Title>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.ExpandedMeta = function CardExpandedMeta({ children, ...restProps }) {
  return <ExpandedMeta {...restProps}>{children}</ExpandedMeta>;
};

Card.Logos = function CardLogos({
  item,

  title,
  vidsrc,
  children,
  ...restProps
}) {
  const playerContext = useContext(PlayerContext);
  const profileContext = useContext(ProfileContext);
  const cardContext = useContext(CardContext);
  const { setVideo } = playerContext;
  const { setExpand } = cardContext;
  const {
    rateItem,
    addItem,
    getRatings,
    getMyList,
    ratings,
    list,
  } = profileContext;

  const [schema, setSchema] = useState({
    mylist: false,
    liked: false,
    disliked: false,
  });

  const onClick = () => {
    setVideo(vidsrc);
  };

  const onExpand = () => {
    setExpand(title);
  };

  const like = () => {
    if (!schema.liked) {
      const rating = "like";
      rateItem(title, rating);
      setSchema({ ...schema, liked: true, disliked: false });
    } else {
      const rating = null;
      rateItem(title, rating);
      setSchema({ ...schema, liked: false });
    }
  };

  const dislike = () => {
    if (!schema.disliked) {
      const rating = "dislike";
      rateItem(title, rating);
      setSchema({ ...schema, disliked: true, liked: false });
    } else {
      const rating = null;
      rateItem(title, rating);
      setSchema({ ...schema, disliked: false });
    }
  };

  const add = () => {
    if (!schema.mylist) {
      addItem(item, title, schema.mylist);
      setSchema({
        ...schema,
        mylist: true,
      });
    } else {
      addItem(item, title, schema.mylist);
      setSchema({
        ...schema,
        mylist: false,
      });
    }
  };

  const isTitleInProfile = (obj) => {
    if (obj.title === title) {
      return obj;
    }
  };

  useEffect(() => {
    const first = async () => {
      await getRatings();
    };
    first();
    let obj = schema;
    const item = ratings.filter(isTitleInProfile);
    if (item.length !== 0) {
      if (item[0].rating === "like") {
        obj.liked = true;
        obj.disliked = false;
      } else if (item[0].rating === "dislike") {
        obj.disliked = true;
        obj.liked = false;
      }
    }
    setSchema(obj);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const first = async () => {
      await getMyList();
    };
    first();
    let obj = schema;
    const item = list.filter(isTitleInProfile);
    if (item.length !== 0) {
      obj.mylist = true;
    }
    setSchema(obj);
    // eslint-disable-next-line
  }, []);

  return (
    <Logos {...restProps}>
      <LogoGroup>
        <>
          <Logo onClick={onClick} src="/media/icons/play-round.png" />
        </>
      </LogoGroup>
      <LogoGroup>
        <Logo
          onClick={add}
          src={
            schema.mylist
              ? "/media/icons/added.png"
              : "/media/icons/plus-round.png"
          }
        />
        <span>{schema.mylist ? "Remove from My List" : "Add to My List"}</span>
      </LogoGroup>
      <LogoGroup>
        <Logo
          onClick={like}
          src={
            schema.liked ? "/media/icons/liked.png" : "/media/icons/like.png"
          }
        />
        <span>{schema.liked ? "Rated" : "I like this"}</span>
      </LogoGroup>
      <LogoGroup>
        <Logo
          onClick={dislike}
          src={
            schema.disliked
              ? "/media/icons/disliked.png"
              : "/media/icons/dislike.png"
          }
        />
        <span>{schema.disliked ? "Rated" : "Not for me"}</span>
      </LogoGroup>
      <LogoGroup>
        <Logo onClick={onExpand} src="/media/icons/expand.png" />
        <span>Episodes & info</span>
      </LogoGroup>
      {children}
    </Logos>
  );
};
Card.ExpandedLogos = function CardExpandedLogos({
  expanded,
  title,
  vidsrc,
  children,
  ...restProps
}) {
  const playerContext = useContext(PlayerContext);
  const profileContext = useContext(ProfileContext);
  const {
    rateItem,
    addItem,
    getRatings,
    getMyList,
    ratings,
    list,
  } = profileContext;
  const { setVideo } = playerContext;
  // todo: bring in expanded to set useeffect to

  useEffect(() => {
    getRatings();
    // eslint-disable-next-line
  }, [expanded]);

  useEffect(() => {
    getMyList();
    // eslint-disable-next-line
  }, [expanded]);

  const [schema, setSchema] = useState({
    mylist: false,
    liked: false,
    disliked: false,
  });

  const onClick = () => {
    setVideo(vidsrc);
  };

  const like = () => {
    if (!schema.liked) {
      const rating = "like";
      rateItem(title, rating);
      setSchema({ ...schema, liked: true, disliked: false });
    } else {
      const rating = null;
      rateItem(title, rating);
      setSchema({ ...schema, liked: false });
    }
  };

  const dislike = () => {
    if (!schema.disliked) {
      const rating = "dislike";
      rateItem(title, rating);
      setSchema({ ...schema, disliked: true, liked: false });
    } else {
      const rating = null;
      rateItem(title, rating);
      setSchema({ ...schema, disliked: false });
    }
  };

  const add = () => {
    if (!schema.mylist) {
      addItem(title, schema.mylist);
      setSchema({
        ...schema,
        mylist: true,
      });
    } else {
      addItem(title, schema.mylist);
      setSchema({
        ...schema,
        mylist: false,
      });
    }
  };

  const isTitleInProfile = (obj) => {
    if (obj.title === title) {
      return obj;
    }
  };

  useEffect(() => {
    let obj = schema;
    const item = ratings.filter(isTitleInProfile);
    if (item.length !== 0) {
      if (item[0].rating === "like") {
        obj.liked = true;
        obj.disliked = false;
      } else if (item[0].rating === "dislike") {
        obj.disliked = true;
        obj.liked = false;
      }
    }
    setSchema(obj);
    // eslint-disable-next-line
  }, [ratings]);

  useEffect(() => {
    let obj = schema;
    const item = list.filter(isTitleInProfile);
    if (item.length !== 0) {
      obj.mylist = true;
    }
    setSchema(obj);
    // eslint-disable-next-line
  }, [list]);

  return (
    <ExpandedLogos {...restProps}>
      <ExpandedLogoGroup>
        <>
          <PlayButton onClick={onClick} {...restProps}>
            <img src="/media/icons/play.png" alt="play" />
            Play
            {children}
          </PlayButton>
        </>
      </ExpandedLogoGroup>
      <ExpandedLogoGroup>
        <ExpandedLogo
          onClick={add}
          src={
            schema.mylist
              ? "/media/icons/added.png"
              : "/media/icons/plus-round.png"
          }
        />
        <span>{schema.mylist ? "Remove from My List" : "Add to My List"}</span>
      </ExpandedLogoGroup>
      <ExpandedLogoGroup>
        <ExpandedLogo
          onClick={like}
          src={
            schema.liked ? "/media/icons/liked.png" : "/media/icons/like.png"
          }
        />
        <span>{schema.liked ? "Rated" : "I like this"}</span>{" "}
      </ExpandedLogoGroup>

      <ExpandedLogoGroup>
        <ExpandedLogo
          onClick={dislike}
          src={
            schema.disliked
              ? "/media/icons/disliked.png"
              : "/media/icons/dislike.png"
          }
        />
        <span>{schema.disliked ? "Rated" : "Not for me"}</span>
      </ExpandedLogoGroup>
      {children}
    </ExpandedLogos>
  );
};

Card.Misc = function CardMisc({ children, ...restProps }) {
  return <Misc {...restProps}>{children}</Misc>;
};
Card.ExpandedMisc = function CardExpandedMisc({ children, ...restProps }) {
  return <ExpandedMisc {...restProps}>{children}</ExpandedMisc>;
};

Card.Categories = function CardCategories({ children, ...restProps }) {
  return <Categories {...restProps}>{children}</Categories>;
};

Card.Grid = function CardGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};
Card.Details = function CardDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};
Card.Cast = function CardCast({ children, ...restProps }) {
  return <DetailItem {...restProps}>{children}</DetailItem>;
};
Card.Genres = function CardGenres({ children, ...restProps }) {
  return <DetailItem {...restProps}>{children}</DetailItem>;
};

Card.ExpandedCategories = function CardExpandedCategories({
  children,
  ...restProps
}) {
  return <DetailItem {...restProps}>{children}</DetailItem>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Background = function CardBackground({ item, children, ...restProps }) {
  const cardContext = useContext(CardContext);
  const { cancelExpand } = cardContext;
  const noExpand = () => {
    cancelExpand();
  };
  return (
    <Background onClick={noExpand} {...restProps}>
      {children}
    </Background>
  );
};

Card.Image = function CardImage({ title, ...restProps }) {
  const cardContext = useContext(CardContext);
  const { setExpand } = cardContext;
  const onClick = () => {
    setExpand(title);
  };
  return <Image onClick={onClick} {...restProps} />;
};

Card.Gif = function CardGif({ ...restProps }) {
  return <Gif {...restProps} />;
};

Card.EpisodeSelector = function CardEpisodeSelector({
  children,
  ...restProps
}) {
  return <EpisodeSelector {...restProps}>{children}</EpisodeSelector>;
};

Card.EpisodeSelectorHeader = function CardEpisodeSelectorHeader({
  children,
  ...restProps
}) {
  return (
    <EpisodeSelectorHeader {...restProps}>
      <p>Episodes</p>
      <div>Limited Series</div>
      {children}
    </EpisodeSelectorHeader>
  );
};

Card.EpisodeSelectorContainer = function CardEpisodeSelectorContainer({
  children,
  ...restProps
}) {
  return (
    <EpisodeSelectorContainer {...restProps}>
      {children}
    </EpisodeSelectorContainer>
  );
};

Card.Episode = function CardEpisode({ children, ...restProps }) {
  return <Episode {...restProps}>{children}</Episode>;
};
Card.EpisodeIndex = function CardEpisodeIndex({ ar, children, ...restProps }) {
  return (
    <EpisodeIndex {...restProps}>
      {ar}
      {children}
    </EpisodeIndex>
  );
};

Card.EpisodeImageWrap = function CardEpisodeImageWrap({
  vidsrc,
  children,
  ...restProps
}) {
  const playerContext = useContext(PlayerContext);
  const { setVideo } = playerContext;

  const onClick = () => {
    setVideo(vidsrc);
  };
  return (
    <EpisodeImageWrap onClick={onClick} {...restProps}>
      {children}
    </EpisodeImageWrap>
  );
};

Card.PlayIconWrap = function CardPlayIconWrap({ children, ...restProps }) {
  return <PlayIconWrap {...restProps}>{children}</PlayIconWrap>;
};
Card.PlayIcon = function CardPlayIcon({ children, ...restProps }) {
  return <PlayIcon {...restProps}>{children}</PlayIcon>;
};
Card.EpisodeImage = function CardEpisodeImage({ children, ...restProps }) {
  return <EpisodeImage {...restProps}>{children}</EpisodeImage>;
};
Card.EpisodeMetaWrap = function CardEpisodeMetaWrap({
  children,
  ...restProps
}) {
  return <EpisodeMetaWrap {...restProps}>{children}</EpisodeMetaWrap>;
};
Card.EpisodeTitleDuration = function CardEpisodeTitleDuration({
  title,
  children,
  ...restProps
}) {
  return (
    <EpisodeTitleDuration {...restProps}>
      <span>{title}</span>
      <span>5s</span>
      {children}
    </EpisodeTitleDuration>
  );
};
Card.EpisodeDescription = function CardEpisodeDescription({
  description,
  children,
  ...restProps
}) {
  let text;

  switch (description) {
    case 1:
      text =
        "In this pilot episode, our main protaginist is introduced. We learn about the world he's living in and what occupies his mind.";
      break;
    case 2:
      text =
        "The saga continues in this epic story. We get to know this hairy creature's habits a little better but his true motivations remain a mystery.";
      break;
    case 3:
      text =
        "Our four legged friend runs into difficulties in this third installation. Will he overcome, or succumb to pressures?";
      break;
    case 4:
      text =
        "Obstacles are overcome but danger is not completely out of sight in this fourth episode. ";
      break;
    case 5:
      text =
        "The story seems to come to a conclusion but then something completely unexpected happens. How will he cope?";
      break;
    case 6:
      text =
        "In this season finale, our furry buddy gets what's been coming to him. Wether the story continues remains a mystery.";
      break;
    default:
      break;
  }

  return (
    <EpisodeDescription {...restProps}>
      {text}
      {children}
    </EpisodeDescription>
  );
};

Card.MoreLikeThisWrapper = function CardMoreLikeThisWrapper({
  children,
  ...restProps
}) {
  return (
    <MoreLikeThisWrapper {...restProps}>
      <h4>More Like This</h4>
      {children}
    </MoreLikeThisWrapper>
  );
};

Card.MoreLikeThisContainer = function CardMoreLikeThisContainer({
  children,
  ...restProps
}) {
  return (
    <MoreLikeThisContainer {...restProps}>{children}</MoreLikeThisContainer>
  );
};

Card.MoreLikeThisGrid = function CardMoreLikeThisGrid({
  children,
  ...restProps
}) {
  return <MoreLikeThisGrid {...restProps}>{children}</MoreLikeThisGrid>;
};

Card.MoreLikeThisItem = function CardMoreLikeThisItem({
  vidsrc,
  children,
  ...restProps
}) {
  const playerContext = useContext(PlayerContext);
  const { setVideo } = playerContext;

  const onClick = () => {
    setVideo(vidsrc);
  };
  return (
    <MoreLikeThisItem onClick={onClick} {...restProps}>
      {children}
    </MoreLikeThisItem>
  );
};

Card.MoreLikeThisImageWrap = function CardMoreLikeThisImageWrap({
  children,
  ...restProps
}) {
  return (
    <MoreLikeThisImageWrap {...restProps}>{children}</MoreLikeThisImageWrap>
  );
};
Card.MoreLikeThisImage = function CardMoreLikeThisImage({
  children,
  ...restProps
}) {
  return <MoreLikeThisImage {...restProps}>{children}</MoreLikeThisImage>;
};

Card.MoreLikeThisTitle = function CardMoreLikeThisTitle({
  title,
  maturity,
  children,
  ...restProps
}) {
  return (
    <MoreLikeThisTitle {...restProps}>
      <span>{maturity}</span>
      {title}
      {children}
    </MoreLikeThisTitle>
  );
};

Card.MoreLikeThisDescription = function CardMoreLikeThisDescription({
  description,
  children,
  ...restProps
}) {
  return (
    <MoreLikeThisDescription {...restProps}>
      {description}
      {children}
    </MoreLikeThisDescription>
  );
};

Card.SmallScreen = function CardSmallScreen({ children, ...restProps }) {
  return <SmallScreen {...restProps}>{children}</SmallScreen>;
};

Card.SmallScreenHeaderWrap = function CardSmallScreenHeaderWrap({
  children,
  ...restProps
}) {
  return (
    <SmallScreenHeaderWrap {...restProps}>{children}</SmallScreenHeaderWrap>
  );
};
Card.SmallScreenHeader = function CardSmallScreenHeader({
  children,
  ...restProps
}) {
  return <SmallScreenHeader {...restProps}>{children}</SmallScreenHeader>;
};

Card.SmallScreenImage = function CardSmallScreenImage({
  children,
  ...restProps
}) {
  return <SmallScreenImage {...restProps}>{children}</SmallScreenImage>;
};

Card.SmallScreenText = function CardSmallScreenText({
  children,
  ...restProps
}) {
  return (
    <SmallScreenText {...restProps}>
      Watch Catflix on your phone or tablet by downloading our app{children}
    </SmallScreenText>
  );
};

Card.SmallScreenButton = function CardSmallScreenButton({
  children,
  ...restProps
}) {
  return (
    <SmallScreenButton {...restProps}>
      Download the free app{children}
    </SmallScreenButton>
  );
};

Card.SmallScreenLinkWrap = function CardSmallScreenLinkWrap({
  children,
  ...restProps
}) {
  return <SmallScreenLinkWrap {...restProps}>{children}</SmallScreenLinkWrap>;
};
Card.SmallScreenLink = function CardSmallScreenLink({
  children,
  ...restProps
}) {
  return (
    <SmallScreenLink {...restProps}>
      {`>`} Return to Catflix{children}
    </SmallScreenLink>
  );
};
