import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "../components/navbar";
import VizSensor from "react-visibility-sensor";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      background: "#242730",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("sm")]: {
        background: "#242730",
      },
    },
    fontHello: {
      fontSize: "46px",
      margin: "0 auto",
      letterSpacing: "10px",
      color: "white",
      paddingTop: `3px`,
      fontFamily: "Roboto",
      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
    fontFrontEnd: {
      color: "white",
      fontSize: "40px",
      margin: "10px 0px 0px 0px",
      fontFamily: `RobotoThin`,
      letterSpacing: "2px",
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "19px",
      },
    },
    fontAmper: {
      fontSize: "46px",
      margin: "0px 25px 0px 0px",
      color: "white",
      fontFamily: `RobotoThinItalic`,
      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "19px",
        margin: "0px 10px 0px 0px",
      },
    },
    fontDesigner: {
      fontSize: "45px",
      color: "white",
      display: `flex`,
      alignSelf: `flex-end`,
      margin: "0px 0px 0px 0px",
      letterSpacing: "5px",
      fontFamily: `RobotoBold`,
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    fontBuilder: {
      fontSize: "16px",
      color: "white",
      margin: "10px 0px 0px 0px",
      fontFamily: `Roboto`,
      letterSpacing: "1px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        width: "260px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "230px",
      },
    },
    scrollText: {
      color: "white",
      textAlign: `center`,
      fontFamily: `RobotoBold`,
      position: "absolute",
      top: `90%`,
    },
    TopSectionText: {
      marginLeft: `150px`,
      paddingTop: `150px`,
      [theme.breakpoints.down("sm")]: {
        paddingTop: `120px`,
        margin: '0 auto',
        width: "300px",
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

    buttonGetInTouch: {
      marginTop: "210px",
      marginLeft: `170px`,
      font: `24px 'RobotoBold', Arial`,
      letterSpacing: `5px`,
      marginRight: `100px`,
      textDecoration: `none`,

      display: `block`,
      width: `220px`,
      lineHeight: `40px`,
      textAlign: `center`,
      position: `relative`,
      color: `white`,
      fontSize: `15px`,
      textTransform: `uppercase`,

      "&:before": {
        borderBottom: `2px solid white`,
        borderLeft: `2px solid white`,

        width: `10%`,
        height: `33%`,
        left: `-10px`,
        bottom: `-10px`,
      },

      "&:after": {
        borderTop: `2px solid white`,
        borderRight: `2px solid white`,
        width: `10%`,
        height: `33%`,
        top: `-10px`,
        right: `-10px`,
      },

      "&:before, &:after": {
        position: "absolute",
        content: '""',
        transition: `all .25s`,
      },
      "&:link": {
        color: "white",
      },
      "&:visited": {
        color: "white",
      },
      "&:hover": {
        "&:before": {
          width: `108%`,
          height: ` 140%`,
        },

        "&:after": {
          width: `108%`,
          height: ` 140%`,
        },
      },
      [theme.breakpoints.down("sm")]: {
        margin: `0 auto`,
        marginTop: `200px`,
      },
    },
    image: {
      width: `550px`,
      height: `550px`,
      position: `absolute`,
      right: `3%`,
      top: `13%`,
      filter: `brightness(0.7)`,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        width: `450px`,
        height: `450px`,
        right: `1%`,
        top: `13%`,
      },
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
          <div>
            <div className={classes.TopSectionText}>
              <Fade in={active} timeout={6000}>
                <img className={classes.image} src="/static/images/gir.png" />
              </Fade>
              <Fade in={active} timeout={3000}>
                <p className={classes.fontHello}>Hello, I'm Shawn Noruzi</p>
              </Fade>
              <Fade in={active} timeout={3500}>
                <p className={classes.fontFrontEnd}>
                  I'm a Front End Developer
                </p>
              </Fade>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "baseline",
                  marginTop: `10px`,
                }}
              >
                <Fade in={active} timeout={5500}>
                  <p className={classes.fontAmper}>&</p>
                </Fade>
                <Fade in={active} timeout={5500}>
                  <p className={classes.fontDesigner}>UX/UI Designer</p>
                </Fade>
              </div>

              <Fade in={active} timeout={6000}>
                <p className={classes.fontBuilder}>
                  Builder of intuitive, responsive and modern websites
                </p>
              </Fade>
            </div>

            <Fade in={active} timeout={7000}>
              <Link
                underline="none"
                classes={{ root: classes.buttonGetInTouch }}
                href={"/#Contact"}
              >
                Get In Touch
              </Link>
            </Fade>

            <Fade in={active} timeout={6500}>
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
