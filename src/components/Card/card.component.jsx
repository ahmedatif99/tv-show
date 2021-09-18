import React from "react";

import { Cards, Image, Info, Name, Rating } from "./card.styles";

const Card = ({ name, image, rating, id }) => {
  return (
    <Cards to={`/single/${id}`}>
      <Image src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Rating>{rating}</Rating>
      </Info>
    </Cards>
  );
};

export default Card;
