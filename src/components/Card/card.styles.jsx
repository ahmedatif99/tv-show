import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cards = styled(Link)`
  text-decoration: none;
  width: 210px;
  background-color: #f4f4f4;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  margin: 1rem auto;
  cursor: pointer;
  display: inline-block;
  transition: all 0.18s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  width: 210px;
  height: 295px;
  object-fit: cover;
`;

export const Info = styled.div`
  color: #171717;
  text-align: center;
`;

export const Name = styled.h4`
  padding: 5px;
  font-size: 1rem;
`;

export const Rating = styled.h4`
  color: #3c948b;
  padding: 5px;
`;
