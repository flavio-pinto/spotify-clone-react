import { useState } from "react";
import CategoryContent from "./CategoryContent";

const HomeContent = () => {
  const [rockArtists] = useState(["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"]);
  const [popArtists] = useState(['maroon5', 'coldplay', 'onerepublic', 'jamesblunt', 'katyperry', 'arianagrande']);
  const [hipHopArtists] = useState(['eminem', 'snoopdogg', 'lilwayne', 'drake', 'kanyewest']);
  
  return(
    <>
      <CategoryContent categoryName={'Rock Classics'} artistsGenre={rockArtists} genre={'rock'}/>
      <CategoryContent categoryName={'Pop Culture'} artistsGenre={popArtists} genre={'pop'}/>
      <CategoryContent categoryName={'#HipHop'} artistsGenre={hipHopArtists} genre={'hip hop'}/>
    </>
  )
}

export default HomeContent;