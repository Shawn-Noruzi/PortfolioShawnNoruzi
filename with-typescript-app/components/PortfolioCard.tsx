import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { jobData } from "../utils/PortfolioData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portfolioCard: {},
  })
);

const PortfolioCard = (props: any) => {
  const classes = useStyles();
  console.log("props in portfolioCard", props);

  return Object.entries(jobData).map((key, index) => {
    if (key[1].tags.all == true && props.skills.all == true) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      return (
        <div className={classes.portfolioCard} key={index}>
          {key[0]} {key[1].title} {key[1].catchLine} {key[1].date}{" "}
          {key[1].jobDescription} {key[1].role}{" "}
          <ImageGallery
            items={images}
            fullscreen={false}
            showThumbnails={false}
            showFullScreenButton={false}
            showPlayButton={false}
          />
        </div>
      );
    } else if (
      key[1].tags.responsive == true &&
      props.skills.responsive == true
    ) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      if (key[1].tags.responsive == true) {
        return (
          <div key={index}>
            {key[0]} {key[1].title} {key[1].catchLine} {key[1].date}{" "}
            {key[1].jobDescription} {key[1].role}{" "}
            <ImageGallery
              items={images}
              fullscreen={false}
              showThumbnails={false}
              showFullScreenButton={false}
              showPlayButton={false}
            />
          </div>
        );
      }
    } else if (
      key[1].tags.fullstack == true &&
      props.skills.fullstack == true
    ) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      if (key[1].tags.fullstack == true) {
        return (
          <div key={index}>
            {key[0]} {key[1].title} {key[1].catchLine} {key[1].date}{" "}
            {key[1].jobDescription} {key[1].role}{" "}
            <ImageGallery
              items={images}
              fullscreen={false}
              showThumbnails={false}
              showFullScreenButton={false}
              showPlayButton={false}
            />
          </div>
        );
      }
    } else if (key[1].tags.restful == true && props.skills.restful == true) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      if (key[1].tags.restful == true) {
        return (
          <div key={index}>
            {key[0]} {key[1].title} {key[1].catchLine} {key[1].date}{" "}
            {key[1].jobDescription} {key[1].role}{" "}
            <ImageGallery
              items={images}
              fullscreen={false}
              showThumbnails={false}
              showFullScreenButton={false}
              showPlayButton={false}
            />
          </div>
        );
      }
    } else if (key[1].tags.web == true && props.skills.web == true) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      if (key[1].tags.web == true) {
        return (
          <div key={index}>
            {key[0]} {key[1].title} {key[1].catchLine} {key[1].date}{" "}
            {key[1].jobDescription} {key[1].role}{" "}
            <ImageGallery
              items={images}
              fullscreen={false}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        );
      }
    }
  });
};

export default PortfolioCard;
