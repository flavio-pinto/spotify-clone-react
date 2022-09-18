import {
  SET_ALBUM_ROCK,
  SET_ALBUM_POP,
  SET_ALBUM_HIPHOP,
  SET_ALBUMS
} from "../actions";

const initialState = {
  rockClassics: [],
  popCulture: [],
  hipHop: [],
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_ROCK:
      return {
        ...state,
        rockClassics: [...state.rockClassics, action.payload],
      };
    case SET_ALBUM_POP:
      return {
        ...state,
        popCulture: [...state.popCulture, action.payload],
      };
    case SET_ALBUM_HIPHOP:
      return {
        ...state,
        hipHop: [...state.hipHop, action.payload],
      };
    case SET_ALBUMS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
