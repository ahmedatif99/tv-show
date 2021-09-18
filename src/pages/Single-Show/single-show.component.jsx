import React, { useEffect, useContext } from "react";

import ShowsContext from "../../context/Shows/showsContext";
import Spinner from "../../components/Spinner/spinner.component";

import {
  SingleShowsCnotent,
  Image,
  SingleShowTexts,
  SingleShowInnerTexts,
  Genres,
  Links,
} from "./single-show.styles";

const SingleShow = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <SingleShowsCnotent>
          <Image
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div>
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <Genres key={match.params.id}>{genre}</Genres>
              ))}
            <SingleShowTexts>
              <SingleShowInnerTexts>Status:</SingleShowInnerTexts>
              {singleShow.status && singleShow.status}
            </SingleShowTexts>

            <SingleShowTexts>
              <SingleShowInnerTexts>Rating:</SingleShowInnerTexts>
              {singleShow.rating ? singleShow.rating.average : "No Rating"}
            </SingleShowTexts>

            <SingleShowTexts>
              <SingleShowInnerTexts>Offical Site:</SingleShowInnerTexts>
              {singleShow.officialSite ? (
                <Links
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </Links>
              ) : (
                "No Site"
              )}
            </SingleShowTexts>

            <SingleShowTexts>
              {singleShow.summary
                ? removeTags(singleShow.summary)
                : "No Summery"}
            </SingleShowTexts>
          </div>
        </SingleShowsCnotent>
      )}
    </React.Fragment>
  );
};

export default SingleShow;
