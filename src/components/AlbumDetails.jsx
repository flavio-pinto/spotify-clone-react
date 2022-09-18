import { useEffect } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleAlbumAction } from "../redux/actions";

const AlbumDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.search.singleAlbum);

  useEffect(() => {
    //console.log(album.tracks.data);
    dispatch(fetchSingleAlbumAction(params.id));
  }, []);

  const convertSecondsToMinutes = (sec) => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;

    if(seconds < 10) {
      seconds = '0' + seconds
    }

    return minutes + ":" + seconds;
  };

  return (
    <Container className="text-white album-details-wrapper">
      {album && (
        <Row className="">
          <Col md={3}>
            <img
              className="img-fluid"
              src={album.cover_medium}
              alt={"Cover " + album.artist.name + " - " + album.title}
            />
            <p className="h5 fw-bold mt-2">{album.title}</p>
            <p className="h6 fw-bold mb-2">{album.artist.name}</p>
            <Button variant="success" className="w-50 fw-bold py-2 border-0 rounded-pill text-white">Play</Button>
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="text-start">
            {album.tracks.data.map((track, i) => (
              <div className="d-flex">
                <p key={i} className="me-auto">
                  {track.title}
                </p>
                <span>{convertSecondsToMinutes(track.duration)}</span>
              </div>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AlbumDetails;
