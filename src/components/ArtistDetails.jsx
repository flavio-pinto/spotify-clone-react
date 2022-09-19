import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbumsAction, fetchSingleArtistAction } from "../redux/actions";
import SingleAlbum from "./SingleAlbum";

const ArtistDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.search.singleArtist);
  const albums = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    dispatch(fetchSingleArtistAction(params.id));
    dispatch(fetchAlbumsAction("none", artist?.name));
  }, []);

  return (
    <Container className="single-artist-wrapper text-white">
      <Row>
        <Col md={10}>
          {artist && (
            <>
              <div>
                <h2 className="fw-bold mt-5 h1">{artist.name.toUpperCase()}</h2>
                <p className="mb-4">{artist.nb_fan + " followers"}</p>
                <Button
                  variant="success"
                  className="fw-bold py-2 border-1 border-white rounded-pill text-white mb-3 me-1"
                >
                  PLAY
                </Button>
                <Button
                  variant="transparent"
                  className="fw-bold py-2 border-1 border-white rounded-pill text-white mb-3 ms-1"
                >
                  FOLLOW
                </Button>
                <h2 className="text-start mb-3">Album list</h2>
              </div>
              {albums && (
                <Row>
                  {albums.map((album, i) => (
                    <Col key={i} md={3} className="mb-4">
                      <SingleAlbum key={album.id} albumData={album} />
                    </Col>
                  ))}
                </Row>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistDetails;
