export const SET_ALBUM_ROCK = "SET_ALBUM_ROCK";
export const SET_ALBUM_POP = "SET_ALBUM_POP";
export const SET_ALBUM_HIPHOP = "SET_ALBUM_HIPHOP";
export const SET_ALBUMS = "SET_ALBUMS";
export const QUERY_UPDATE = "QUERY_UPDATE";
export const SET_SINGLE_ALBUM = "SET_SINGLE_ALBUM";
export const SET_SINGLE_ARTIST = "SET_SINGLE_ARTIST";

export const fetchAlbumsAction = (genre, query) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        dispatch({
          type:
            genre === "rock"
              ? SET_ALBUM_ROCK
              : genre === "pop"
              ? SET_ALBUM_POP
              : genre === "hip hop"
              ? SET_ALBUM_HIPHOP
              : SET_ALBUMS,
          payload: genre === "none" ? data.data : data.data[0],
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleAlbumAction = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + id,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if(res.ok) {
        const data = await res.json();
        dispatch({
          type: SET_SINGLE_ALBUM,
          payload: data
        })
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleArtistAction = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if(res.ok) {
        const data = await res.json();
        dispatch({
          type: SET_SINGLE_ARTIST,
          payload: data
        })
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
