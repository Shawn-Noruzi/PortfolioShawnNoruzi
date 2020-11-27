import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

import { jobData } from "../utils/PortfolioData";

import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: { display: `flex` },
    imageContainer: {},
    title: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      width: `60%`,
      textDecoration: "underline",

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
      marginLeft: `30px`,
      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      width: `450px`,
  
    },
    picture: {
      background: "#2d2d2d",
      height: `400px`,
      display: `flex`,
      alignItems: `center`,
    },
    img: {
      display: `flex`,
      width: `500px`,
      margin: `0 auto`,
      transition: `0.2s`,
      "&:hover": {
        width: `560px`,
      },
      [theme.breakpoints.down("md")]: {
        "&:hover": {

        },
      },
    },

    portfolioCard: {
      display: "flex",
      flexDirection: `column`,
      width: `44%`,
      height: ` 550px`,
      margin: `50px`,
      [theme.breakpoints.down("md")]: {
        width:`100%`,
        margin: `0px`
      },
    },

    titleContainer: {
      display: `flex`,
      alignItems: `center`,
      marginLeft:'20px',
 
      [theme.breakpoints.down("md")]: {
        alignItems: `flex-start`,
        flexDirection: `column`,
        marginBottom:'30px',
      },
    },
  })
);

const PortfolioCard = (props: any) => {
  const classes = useStyles();

  return (<> {Object.entries(jobData).map((key, index) => {
    if (key[1].tags.all == true && props.skills.all == true) {
      return (
        <Grow in={props.checked}  key={index}>
          <div className={classes.portfolioCard}>
            <div className={classes.picture}>
              <img
                className={classes.img}
                alt="picture of site"
                src={key[1].images[0]}
              />
            </div>
            <p style={{ color: "#907c7c", fontSize: "small", marginLeft:"10px" }}>Website</p>
            <div className={classes.contentContainer}>
              <div className={classes.titleContainer}>
                <span className={classes.title}>{key[1].title}</span>
                <span className={classes.text}> {key[1].catchLine} </span>
              </div>
            </div>
          </div>
        </Grow>
      );
    } else if (
      key[1].tags.responsive == true &&
      props.skills.responsive == true
    ) {
      if (key[1].tags.responsive == true) {
        return (
          <Grow in={props.checked} key={index}>
            <div className={classes.portfolioCard} >
              <div className={classes.picture}>
                <img
                  className={classes.img}
                  alt="picture of site"
                  src={key[1].images[0]}
                />
              </div>
              <p style={{ color: "#907c7c", fontSize: "small" }}>Website</p>
              <div className={classes.contentContainer}>
                <div className={classes.titleContainer}>
                  <span className={classes.title}>{key[1].title}</span>
                  <span className={classes.text}> {key[1].catchLine} </span>
                </div>
              </div>
            </div>
          </Grow>
        );
      }
    } else if (
      key[1].tags.fullstack == true &&
      props.skills.fullstack == true
    ) {
      if (key[1].tags.fullstack == true) {
        return (
          <Grow in={props.checked} key={index}>
            <div className={classes.portfolioCard} >
              <div className={classes.picture}>
                <img
                  className={classes.img}
                  alt="picture of site"
                  src={key[1].images[0]}
                />
              </div>
              <p style={{ color: "#907c7c", fontSize: "small" }}>Website</p>
              <div className={classes.contentContainer}>
                <div className={classes.titleContainer}>
                  <span className={classes.title}>{key[1].title}</span>
                  <span className={classes.text}> {key[1].catchLine} </span>
                </div>
              </div>
            </div>
          </Grow>
        );
      }
    } else if (key[1].tags.restful == true && props.skills.restful == true) {
      if (key[1].tags.restful == true) {
        return (
          <Grow in={props.checked}  key={index}>
            <div className={classes.portfolioCard}>
              <div className={classes.picture}>
                <img
                  className={classes.img}
                  alt="picture of site"
                  src={key[1].images[0]}
                />
              </div>
              <p style={{ color: "#907c7c", fontSize: "small" }}>Website</p>
              <div className={classes.contentContainer}>
                <div className={classes.titleContainer}>
                  <span className={classes.title}>{key[1].title}</span>
                  <span className={classes.text}> {key[1].catchLine} </span>
                </div>
              </div>
            </div>
          </Grow>
        );
      }
    } else if (key[1].tags.web == true && props.skills.web == true) {
      if (key[1].tags.web == true) {
        return (
          <Grow in={props.checked}  key={index}>
            <div className={classes.portfolioCard}>
              <div className={classes.picture}>
                <img
                  className={classes.img}
                  alt="picture of site"
                  src={key[1].images[0]}
                />
              </div>
              <p style={{ color: "#907c7c", fontSize: "small" }}>Website</p>
              <div className={classes.contentContainer}>
                <div className={classes.titleContainer}>
                  <span className={classes.title}>{key[1].title}</span>
                  <span className={classes.text}> {key[1].catchLine} </span>
                </div>
              </div>
            </div>
          </Grow>
        );
      }
    }
  })
  } </>)
};

export default PortfolioCard;
