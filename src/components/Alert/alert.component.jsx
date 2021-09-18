import React from "react";

import { AlertMessage, Message } from "./alert.styles";

const Alert = ({ type, message }) => {
  return (
    <AlertMessage type={type}>
      <i className="fas fa-info-circle"></i>
      <Message>{message}</Message>
    </AlertMessage>
  );
};

export default Alert;
