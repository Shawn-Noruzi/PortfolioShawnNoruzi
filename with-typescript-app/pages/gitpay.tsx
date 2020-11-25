import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { jobData } from "../utils/PortfolioData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portfolioCard: {
      display: "flex",
    },
    contentContainer: { background: "teal" },
    imageContainer: {},
    title: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      margin: `0 auto`,
      maxWidth: `750px`,
      padding: `55px 0px 0px`,
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    subTitle: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      margin: `0 auto`,
      maxWidth: `750px`,
      paddingTop: `15px`,
    },
    text: {
      color: "#333",
      width: "390px",
      margin: `30px 20px 20px 20px`,
      height: `120px`,
      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
  })
);

const gitpay = (props: any) => {
  const classes = useStyles();

  return Object.entries(jobData).map((key, index) => {
    if (key[1].tags.all == true && props.skills.all == true) {
      const images = key[1].images.map((item: string) => {
        return { original: item, thumbnail: item };
      });
      return (
        <div className={classes.portfolioCard} key={index}>
          <div className={classes.picture}>
            <img
              className={classes.img}
              alt="picture of site"
              src={key[1].images[0]}
            />
          </div>
          <div className={classes.contentContainer}>
            <p className={classes.title}>{key[1].title}</p>
            <p className={classes.text}>{key[1].catchLine}</p>
            <p className={classes.text}>{key[1].date}</p>
            <p className={classes.text}>{key[1].role}</p>
          </div>
          <div className={classes.imageContainer}>
            <ImageGallery
              items={images}
              fullscreen={false}
              showThumbnails={false}
              showFullScreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
      );
    }
  });
};

export default gitpay;
