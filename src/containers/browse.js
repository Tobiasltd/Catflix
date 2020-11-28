import React, { useContext, useState, useEffect, Fragment } from "react";
import Fuse from "fuse.js";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading, Card } from "../components";
import { FooterContainer } from "../containers/footer";
import CardContext from "../context/card/cardContext";
import ProfileContext from "../context/profile/profileContext";
import * as ROUTES from "../constants/routes";
import logo from "../catflix.png";
import styled from "styled-components/macro";

export const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const cardContext = useContext(CardContext);
  const { expandtitle } = cardContext;
  const expanded = expandtitle;

  const profileContext = useContext(ProfileContext);
  const { ratings, list, getRatings, getMyList } = profileContext;

  useEffect(() => {
    getRatings();
    // eslint-disable-next-line
  }, [user, setCategory]);

  useEffect(() => {
    getMyList();
    // eslint-disable-next-line
  }, [user, setCategory]);

  useEffect(() => {
    if (list.length > 0) {
      const obj = { title: "My List", data: [] };
      list.forEach((item) => {
        obj.data.push(item.data);
      });
      slides.mylist = [];
      slides.mylist.push(obj);
    } else if (slides.length > 0) {
      console.log("No list");
    }
    // eslint-disable-next-line
  }, [user, list, setCategory]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const reload = () => {
    if (expanded) {
      window.location.reload();
    }
  };

  const arr = [1, 2, 3, 4, 5, 6];
  return profile.displayName ? (
    <Body expanded={expandtitle}>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      {}
      <Header
        src={
          category === "series"
            ? "thecrown"
            : category === "films"
            ? "theball"
            : "none"
        }
        dontShowOnSmallViewPort
      >
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Catflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={async () => {
                await getMyList();
                await getRatings();
                setCategory("series");
              }}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={async () => {
                await getMyList();
                await getRatings();
                setCategory("films");
              }}
            >
              Films
            </Header.TextLink>
            <Header.TextLink
              active={category === "mylist" ? "true" : "false"}
              onClick={async () => {
                await getMyList();
                setCategory("mylist");
              }}
            >
              My List
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        {(category === "series" || category === "films") && (
          <Header.Feature>
            <Header.ShowLogo
              src={category === "series" ? "crown-logo" : "ball-logo"}
            />
            <Header.Group>
              <Header.PlayButton
                src={
                  category === "series"
                    ? "/media/series/feel-good/the-crown/Episode1.mp4"
                    : "/media/films/children/the-ball/the-ball.mp4"
                }
              />
              <Header.MoreInfo
                title={category === "series" ? "The Crown" : "The Ball"}
              />
            </Header.Group>
          </Header.Feature>
        )}
      </Header>
      <Card.Group category={category}>
        {slideRows ? (
          slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title category={category}>{slideItem.title}</Card.Title>
              <Card.Entities category={category}>
                {slideItem.data.map((item) => (
                  <Fragment key={item.docId}>
                    {item.title === expanded && (
                      <Card.SmallScreen>
                        <Card.SmallScreenHeaderWrap>
                          <Card.SmallScreenHeader src={logo} />
                        </Card.SmallScreenHeaderWrap>
                        <Card.SmallScreenImage
                          src={`/media/misc/dontmobile.jpg`}
                        />

                        <Card.SmallScreenText />
                        <Card.SmallScreenButton />
                        <Card.SmallScreenLinkWrap>
                          <Card.SmallScreenLink onClick={reload} />
                        </Card.SmallScreenLinkWrap>
                      </Card.SmallScreen>
                    )}
                    <Card.Item
                      category={category}
                      expand={item.title === expanded ? true : false}
                      key={item.docId}
                      item={item}
                      cat={item.genre}
                    >
                      <Card.Image
                        title={item.title}
                        src={`/media/${item.type}/${item.genre}/${item.slug}/cover-art.jpg`}
                      />
                      <Card.Gif
                        src={`/media/${item.type}/${item.genre}/${item.slug}/gif.gif`}
                      />

                      {item.title === expanded ? (
                        <>
                          <Card.ExpandedMeta>
                            <Card.ExpandedLogos
                              item={item}
                              expanded={expanded}
                              title={item.title}
                              vidsrc={
                                item.type === "series"
                                  ? `/media/${item.type}/${item.genre}/${item.slug}/Episode1.mp4`
                                  : `/media/${item.type}/${item.genre}/${item.slug}/${item.slug}.mp4`
                              }
                            />

                            <Card.Grid>
                              <Card.ExpandedMisc>
                                <span>98% Match</span>{" "}
                                <span>{item.maturity}</span> {item.duration}
                                <br />
                                <br />
                                {item.description}
                              </Card.ExpandedMisc>
                              <Card.Details>
                                <Card.Cast>
                                  <span>Cast: </span> Wolfgang, Theodore, Sylke
                                </Card.Cast>
                                <Card.Genres>
                                  <span>Genres: </span> Cats, Indie TV, Action &
                                  Adventure
                                </Card.Genres>
                                <Card.ExpandedCategories>
                                  <span>This programme is: </span>
                                  {item.categories1}, {item.categories2},{" "}
                                  {item.categories3}
                                </Card.ExpandedCategories>
                              </Card.Details>
                            </Card.Grid>
                            {item.type === "series" && (
                              <Card.EpisodeSelector>
                                <Card.EpisodeSelectorHeader />
                                <Card.EpisodeSelectorContainer>
                                  {arr.map((ar) => (
                                    <Card.Episode key={`Episode-${ar}`}>
                                      <Card.EpisodeIndex ar={ar} />
                                      <Card.EpisodeImageWrap
                                        vidsrc={`/media/${item.type}/${item.genre}/${item.slug}/Episode${ar}.mp4`}
                                      >
                                        <Card.EpisodeImage
                                          src={`/media/${item.type}/${item.genre}/${item.slug}/Episode${ar}_Moment.jpg`}
                                        />
                                        <Card.PlayIconWrap>
                                          <Card.PlayIcon src="/media/icons/playcircle.png" />
                                        </Card.PlayIconWrap>
                                      </Card.EpisodeImageWrap>
                                      <Card.EpisodeMetaWrap>
                                        <Card.EpisodeTitleDuration
                                          title={`Episode ${ar}`}
                                        />
                                        <Card.EpisodeDescription
                                          description={ar}
                                        />
                                      </Card.EpisodeMetaWrap>
                                    </Card.Episode>
                                  ))}
                                </Card.EpisodeSelectorContainer>
                              </Card.EpisodeSelector>
                            )}

                            <Card.MoreLikeThisWrapper>
                              <Card.MoreLikeThisContainer>
                                <Card.MoreLikeThisGrid>
                                  {slideItem.data.map((item) => (
                                    <Card.MoreLikeThisItem
                                      key={item.title}
                                      vidsrc={
                                        item.type === "series"
                                          ? `/media/${category}/${item.genre}/${item.slug}/Episode1.mp4`
                                          : `/media/${category}/${item.genre}/${item.slug}/${item.slug}.mp4`
                                      }
                                    >
                                      <Card.MoreLikeThisImageWrap>
                                        <Card.MoreLikeThisImage
                                          src={`/media/${category}/${item.genre}/${item.slug}/cover-art.jpg`}
                                        />

                                        <Card.PlayIconWrap>
                                          <Card.PlayIcon src="/media/icons/playcircle.png" />
                                        </Card.PlayIconWrap>
                                      </Card.MoreLikeThisImageWrap>

                                      <Card.MoreLikeThisTitle
                                        maturity={item.maturity}
                                        title={item.title}
                                      />
                                      <Card.MoreLikeThisDescription
                                        description={item.description}
                                      />
                                    </Card.MoreLikeThisItem>
                                  ))}
                                </Card.MoreLikeThisGrid>
                              </Card.MoreLikeThisContainer>
                            </Card.MoreLikeThisWrapper>
                          </Card.ExpandedMeta>
                          <Card.Background />
                        </>
                      ) : (
                        <Card.Meta>
                          <Card.Logos
                            item={item}
                            ratings={ratings}
                            list={list}
                            title={item.title}
                            vidsrc={
                              item.type === "series"
                                ? `/media/${category}/${item.genre}/${item.slug}/Episode1.mp4`
                                : `/media/${category}/${item.genre}/${item.slug}/${item.slug}.mp4`
                            }
                          />

                          <Card.Misc>
                            <span>98% Match</span> <span>{item.maturity}</span>{" "}
                            {item.duration}
                          </Card.Misc>
                          <Card.Categories>
                            {item.categories1}
                            <span />
                            {item.categories2}
                            <span />
                            {item.categories3}
                          </Card.Categories>
                        </Card.Meta>
                      )}
                    </Card.Item>
                  </Fragment>
                ))}
              </Card.Entities>
            </Card>
          ))
        ) : (
          <Card.NoItems />
        )}
      </Card.Group>
      <BrowseBg category={category}>
        <FooterContainer />
      </BrowseBg>
    </Body>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

const Body = styled.div`
  @media (max-width: 1024px) {
    ${({ expanded }) => expanded && "position: fixed"};
  }
`;
const BrowseBg = styled.div`
  ${({ category }) => category !== "mylist" && "background: #141414;"};
`;
