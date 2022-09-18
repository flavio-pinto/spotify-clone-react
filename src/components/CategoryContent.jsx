import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import {
  EMPTY_ROCK_ALBUMS,
  /* EMPTY_ROCK_ALBUMS,
  EMPTY_POP_ALBUMS,
  EMPTY_HIPHOP_ALBUMS,
  EMPTY_SEARCH_ALBUMS, */
  fetchAlbumsAction,
  
} from "../redux/actions";
import SingleAlbum from "./SingleAlbum";

const CategoryContent = (props) => {
  const dispatch = useDispatch();
  const albums = useSelector((state) =>
    props.genre === "rock"
      ? state.search.rockClassics
      : props.genre === "pop"
      ? state.search.popCulture
      : props.genre === "hip hop"
      ? state.search.hipHop
      : state.search.searchResults
  );

  useEffect(() => {
    let randomArtists = [];
    while (randomArtists.length < 4) {
      let artist =
        props.artistsGenre[
          Math.floor(Math.random() * props.artistsGenre.length)
        ];
      if (!randomArtists.includes(artist)) {
        randomArtists.push(artist);
      }
    }

    if(!albums.length) {
      for (let i = 0; i < randomArtists.length; i++) {
        dispatch(fetchAlbumsAction(props.genre, randomArtists[i]));
      }
    }

    console.log(albums);
  }, []);

  return (
    <Container fluid className="text-white mt-4">
      <Row>
        <Col lg={12} className="text-start">
          <h2>{props.categoryName}</h2>
          {albums && (
            <Row>
              {albums.map((albumData) => (
                <Col>
                  <SingleAlbum key={albumData.id} albumData={albumData} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryContent;
