import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryContent from "./CategoryContent";

const HomeContent = () => {
  const searchResults = useSelector(state => state.search.searchResults);

  const [rockArtists] = useState([
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ]);
  const [popArtists] = useState([
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ]);
  const [hipHopArtists] = useState([
    "eminem",
    "snoopdogg",
    "lilwayne",
    "drake",
    "kanyewest",
  ]);

  return (
    <>
      {searchResults.length > 0 ? (
        <CategoryContent
          categoryName={"Search Results"}
          artistsGenre={"search"}
          genre={"search"}
          searchResults={searchResults}
        />
      ) : <></>}
      <CategoryContent
        categoryName={"Rock Classics"}
        artistsGenre={rockArtists}
        genre={"rock"}
      />
      <CategoryContent
        categoryName={"Pop Culture"}
        artistsGenre={popArtists}
        genre={"pop"}
      />
      <CategoryContent
        categoryName={"#HipHop"}
        artistsGenre={hipHopArtists}
        genre={"hip hop"}
      />
    </>
  );
};

export default HomeContent;
