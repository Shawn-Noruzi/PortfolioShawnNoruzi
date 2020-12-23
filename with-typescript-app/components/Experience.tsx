import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import VizSensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerOne: {
      width: "100%",
      height: "440px",
      display: "flex",
      background: "#303a58",
      justifyContent: `space-between`,
      paddingTop: `50px`,
      paddingBottom: `50px`,
      [theme.breakpoints.down("sm")]: {
        height: "560px",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
        height: "100%",
        justifyContent: `unset`,
      },
    },

    bannerOneTitle: {
      fontFamily: "Roboto",
      fontSize: "48px",
      color: "white",
      marginBottom: "0px",
      marginTop: `50px`,

      [theme.breakpoints.down("xs")]: {
        marginTop: "unset",
      },
    },
    bannerOneText: {
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "white",
      width: `86%`
    },
    bannerOneImg: {
      width: "500px",
      height: "371px",
      marginRight: " 100px",
      [theme.breakpoints.down("md")]: {
        width: "450px",
        height: "380px",
        marginRight: `unset`,
      },
      [theme.breakpoints.down("sm")]: {
        width: "49%",
        height: "56%",
        marginLeft: `0px`,
        marginTop: "90px",
      },
      [theme.breakpoints.down("xs")]: {
        width: `330px`,
        height: `280px`,
        margin: `0 auto`,
      },
    },
    textLayoutOne: {
      display: "flex",
      flexDirection: "column",
      marginLeft: `150px`,
      [theme.breakpoints.down("md")]: {
        marginLeft: `50px`,
        width: "500px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: `30px`,
      },
      [theme.breakpoints.down("xs")]: {
        width: `80%`,
        margin: `0 auto`,
      },
    },
  })
);
export default function AboutMe() {
  const classes = useStyles();
  let [active, setActive] = useState(true);
  let [hasBeenVisible, setHasBeenVisible] = useState(false);
  return (
    <VizSensor
      partialVisibility={true}
      minTopValue={50}
      onChange={(isVisible) => {
        let count = 0;
        if (active && hasBeenVisible) {
          return;
        }

        setActive(isVisible);
        count++;

        if (count >= 1) {
          setHasBeenVisible(true);
        }
      }}
      active={hasBeenVisible ? !active : true}
    >
      <div className={classes.bannerOne}>
        <Slide direction="right" in={active} timeout={1800}>
          <div className={classes.textLayoutOne}>
            <p className={classes.bannerOneTitle}>Experience</p>
            <p className={classes.bannerOneText}>
              I have a Computer Science and Mathematics educational degree, team
              leadership experience, and worked on multiple projects
              specializing in front-end skill development. Projects include: a
              bounty web app for developers to find gig work, a constituent
              consulting app utilizing geolocalization, and an app connecting
              developers with mentors in the field.
            </p>
          </div>
        </Slide>

        <Fade in={active} timeout={2400}>
          <img
            className={classes.bannerOneImg}
            src="/static/images/computer.png"
            alt="man"
          />
        </Fade>
      </div>
    </VizSensor>
  );
}
