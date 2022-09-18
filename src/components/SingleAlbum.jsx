const SingleAlbum = (props) => {
  return(
    <div className="single-album-wrapper">
      <a href="#test">
        <img className="img-fluid" src={props.albumData.album.cover_medium} alt={props.albumData.artist.name + " - " + props.albumData.album.title} />
      </a>
      <p className="mb-0">
        <a className="text-white text-decoration-none fw-bold" href="#test">Album: {props.albumData.album.title.length < 16 ? props.albumData.album.title : props.albumData.album.title.substring(0, 16) + "..."}</a>
      </p>
      <p className="mb-0">
        <a className="text-white text-decoration-none fw-bold" href="#test">Artist: {props.albumData.artist.name}</a>
      </p>
    </div>
  )
}

export default SingleAlbum;