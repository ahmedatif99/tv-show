import styled from "styled-components";

export const AlertMessage = styled.div`
  padding: 10px 17px;
  font-size: 20px;
  border: 1px solid #171717;
  margin: 1rem 0;
  background-color: ${(props) =>
    props.type === "warning"
      ? "#f8ffc4"
      : props.type === "danger"
      ? "#ffc4c4"
      : props.type === "info"
      ? "#dfeafe"
      : "none"};

  border: ${(props) =>
    props.type === "warning"
      ? "1px solid #ffee00"
      : props.type === "danger"
      ? "1px solid #ff0000"
      : props.type === "info"
      ? "1px solid #0523b7"
      : "none"};
`;

export const Message = styled.span`
  padding: 10px 17px;
`;
