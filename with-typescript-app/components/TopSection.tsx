import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar";
import VizSensor from "react-visibility-sensor";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      background:
        "linear-gradient( rgb(196 181 255 / 56%), rgb(228 146 222 / 60%)),url(/static/images/mountain.jpg)",

      height: "100vh",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("sm")]: {
        background:
          "linear-gradient(rgb(196 181 255 / 56%), rgb(146 202 228 / 60%)), url(/static/images/mountain.jpg)",
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
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.up("sm")]: {
        letterSpacing: "10px",
      },
    },
    subTitle: {
      color: "white",
      textAlign: `center`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
    },
    scrollText: {
      color: "white",
      textAlign: `center`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
      position: "absolute",
      top: `90%`,
    },
    nameContainer: {
      border: `7px solid white`,
      textAlign: `center`,
      height: `110px`,
      width: "80%",
      margin: '0 auto',
      background: `rgb(0 0 0 / 14%)`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
      
    },
    TopSectionText: {
      width: "325px",
      margin: "0 auto",
      paddingTop: `359px`,
      [theme.breakpoints.up("sm")]: {},
      [theme.breakpoints.up("md")]: {},
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

    // sectionMobile: {
    //   display: "flex",
    //   [theme.breakpoints.up("md")]: {
    //     display: "none",
    //   },
    // },
  })
);

const TopSection = (props: any) => {
  const classes = useStyles();
  let [active, setActive] = useState(false);
  return (
    <div className={classes.backgroundImage}>
      <NavBar props={props} />

      <VizSensor
        onChange={(isVisible) => {
          setActive(isVisible);
        }}
      >
        <Fade in={active} timeout={2000}>
          <div className={classes.TopSectionText}>
            <div className={classes.nameContainer}>
              <Fade in={active} timeout={3000}>
                <p style={{ marginTop: `8px` }} className={classes.title}>
                  SHAWN
                </p>
              </Fade>
              <Fade in={active} timeout={4500}>
                <p className={classes.title}>NORUZI</p>
              </Fade>
            </div>
            <Fade in={active} timeout={6000}>
              <p className={classes.subTitle}>
                Front End Developer | UX and UI Designer{" "}
              </p>
            </Fade>
            <Fade in={active} timeout={8000}>
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
