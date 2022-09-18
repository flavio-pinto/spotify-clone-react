import { Link } from "react-router-dom";

const SingleAlbum = (props) => {
  return(
    <div className="single-album-wrapper">
      <Link to={"/album/" + props.albumData.album.id}>
        <img className="img-fluid" src={props.albumData.album.cover_medium} alt={'Cover ' + props.albumData.artist.name + " - " + props.albumData.album.title} />
      </Link>
      <p className="mb-0">
        <Link to={"/album/" + props.albumData.album.id} className="text-white text-decoration-none fw-bold" href="#test">Album: {props.albumData.album.title.length < 16 ? props.albumData.album.title : props.albumData.album.title.substring(0, 16) + "..."}</Link>
      </p>
      <p className="mb-0">
        <Link className="text-white text-decoration-none fw-bold" href="#test">Artist: {props.albumData.artist.name}</Link>
      </p>
    </div>
  )
}

export default SingleAlbum;