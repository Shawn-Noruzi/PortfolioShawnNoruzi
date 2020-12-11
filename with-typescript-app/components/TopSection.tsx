import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar";
import VizSensor from "react-visibility-sensor";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      background:
        "linear-gradient(#32324ad9, rgb(47 48 68 / 85%)), url(/static/images/mountain.jpg)",

      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("sm")]: {
        background:
          "linear-gradient(#32324ad9, rgb(47 48 68 / 85%)), url(/static/images/mountain.jpg)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    },
    title: {
      fontSize: "32px",
      margin: "0 auto",
      letterSpacing: "10px",
      color: "white",
      paddingTop: `3px`,
      fontFamily:
        "GothamBold",
        [theme.breakpoints.up("sm")]: {
        letterSpacing: "10px",
      },
    },
    subTitle: {
      color: "white",
      textAlign: `center`,
      fontFamily: `GothamBold`,
    },
    scrollText: {
      color: "white",
      textAlign: `center`,
      fontFamily: `GothamBold`,
      position: "absolute",
      top: `90%`,
    },
    nameContainer: {
      border: `7px solid white`,
      textAlign: `center`,
      height: `110px`,
      width: "80%",
      margin: "0 auto",
      background: `rgb(0 0 0 / 14%)`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
    },
    TopSectionText: {
      width: "325px",
      margin: "0 auto",

      [theme.breakpoints.down("sm")]: { paddingTop: `200px` },
      [theme.breakpoints.up("md")]: { paddingTop: `200px` },
    },
    TopSectionBar: {
      borderBottom: " white solid",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        width: "65%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },

    iconScroll: {
      position: `absolute`,
      left: `50%`,
      width: `40px`,
      height: `70px`,
      marginLeft: `-20px`,
      top: `90%`,
      marginTop: `-35px`,
      boxShadow: `inset 0 0 0 1px #fff`,
      borderRadius: `25px`,

      "&:before": {
        position: `absolute`,
        left: `50%`,
        content: "''",
        width: ` 8px`,
        height: `8px`,
        background: `#fff`,
        marginLeft: `-4px`,
        top: `8px`,
        borderRadius: `4px`,
        animationDuration: `1.5s`,
        animationIterationCount: `infinite`,
        animationName: `$scroll`,
      },
    },
    "@keyframes scroll": {
      "0%": { opacity: 1 },

      "100%": { opacity: 0, transform: "translateY(46px)" },
    },
    scrollContainer: {
      position: `absolute`,
      top: `90%`,
      left: `50%`,
    },
  })
);

const TopSection = (props: any) => {
  const classes = useStyles();
  let [active, setActive] = useState(false);
  let [hasBeenVisible, setHasBeenVisible] = useState(false);
  return (
    <div className={classes.backgroundImage}>
      <NavBar props={props} />

      <VizSensor
        onChange={(isVisible) => {
          if (active && hasBeenVisible) {
            return;
          }

          setActive(isVisible);
          setHasBeenVisible(true);
        }}
        active={hasBeenVisible ? !active : true}
      >
        <Fade in={active} timeout={2000}>
          <div className={classes.TopSectionText}>
            <div className={classes.nameContainer}>
              <Fade in={active} timeout={3000}>
                <p style={{ marginTop: `14px` }} className={classes.title}>
                  SHAWN
                </p>
              </Fade>
              <Fade in={active} timeout={3500}>
                <p className={classes.title}>NORUZI</p>
              </Fade>
            </div>
            <Fade in={active} timeout={4000}>
              <div>
              <p className={classes.subTitle}>
                Front End Developer
              </p>
              <p className={classes.subTitle}>
              UX and UI Designer
              </p>
              </div>

   
            </Fade>
            <Fade in={active} timeout={6000}>
              <div className={classes.scrollContainer}>
                <div className={classes.iconScroll}></div>
              </div>
            </Fade>
          </div>
        </Fade>
      </VizSensor>
    </div>
  );
};

export default TopSection;
