import React from "react";

import {
  About,
  AboutTitle,
  AboutInfo,
  AboutInfoTexts,
  AboutListItem,
} from "./details.styles";

const Details = () => {
  return (
    <About>
      <AboutTitle>ABOUT PAGE</AboutTitle>
      <AboutInfo>
        <AboutInfoTexts>Tv Show Search React App</AboutInfoTexts>
        <div>
          <p>I use in this app</p>
          <ul>
            <AboutListItem>React</AboutListItem>
            <AboutListItem>Styled components</AboutListItem>
            <AboutListItem>React Router</AboutListItem>
            <AboutListItem>Context API</AboutListItem>
            <AboutListItem>Axios</AboutListItem>
            <AboutListItem>
              TVMAZE API (https://www.tvmaze.com/api)
            </AboutListItem>
            <AboutListItem>Deploying to Netlify</AboutListItem>
          </ul>
        </div>
      </AboutInfo>
    </About>
  );
};

export default Details;
