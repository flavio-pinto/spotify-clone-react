const SingleAlbum = (props) => {
  return(
    <>
      <a href="#test">
        <img src={props.albumData.album.cover_medium} alt={props.albumData.artist.name + " - " + props.albumData.album.title} />
      </a>
      <p>
        <a href="#test">Album: {props.albumData.album.title.length < 16 ? props.albumData.album.title : props.albumData.album.title.substring(0, 16) + "..."}</a>
      </p>
      <p>
        <a href="#test">Artist: {props.albumData.artist.name}</a>
      </p>
    </>
  )
}

export default SingleAlbum;