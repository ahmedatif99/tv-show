import styled from "styled-components";

export const SearchBar = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 17px;
  border: 1px solid #171717;
  background: #f4f4f4;
  color: #171717;
  font-size: 20px;
  outline-width: 0ch;

  &:focus {
    border: 1px solid #3c948b;
    box-shadow: 0 0 1px 1px rgba(60, 148, 139, 0.5);
  }
`;

export const Button = styled.div`
  padding: 10px 17px;
  border: 1px solid #171717;
  background-color: #171717;
  color: #f4f4f4;
  margin: 1rem 0;
  font-size: 20px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    color: #3c948b;
  }
`;
