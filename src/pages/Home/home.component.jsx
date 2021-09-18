import React, { useContext } from "react";

import Search from "../../components/Search/Search.component";
import Card from "../../components/Card/card.component";
import Spinner from "../../components/Spinner/spinner.component";

import ShowsContext from "../../context/Shows/showsContext";

import { WrappeCard } from "./home.styles";

const Home = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  return (
    <div>
      <Search />
      {loading ? (
        <Spinner />
      ) : (
        <WrappeCard>
          {shows.map((show) => (
            <Card
              key={show.show.id}
              name={show.show.name}
              image={
                show.show.image
                  ? show.show.image.medium
                  : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
              }
              rating={
                show.show.rating.average
                  ? show.show.rating.average
                  : "Not-rating "
              }
              id={show.show.id}
            />
          ))}
        </WrappeCard>
      )}
    </div>
  );
};

export default Home;
