import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import VizSensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerThree: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: `space-between`,
        background: "#303a58",
        paddingTop: "50px",
        paddingBottom: "50px",
        [theme.breakpoints.down("sm")]: {
          paddingBottom: "80px",
        },
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column-reverse",
  
          justifyContent: `space-around`,
        },
      },
      bannerThreeTitle: {
        fontFamily: "Roboto",
        fontSize: "48px",
        color: "white",
        marginBottom: "0px",
        marginTop: `50px`,
        [theme.breakpoints.down("xs")]: {
          marginTop: "0px",
        },
      },
      bannerThreeText: {
        fontFamily: "Roboto",
        fontSize: "24px",
        color: "white",
        width: `86%`
      },
      bannerThreeImg: {
        width: "500px",
        height: "371px",
        marginRight: " 100px",
        [theme.breakpoints.down("md")]: {
          width: "450px",
          height: "380px",
          marginRight: `3%`,
        },
        [theme.breakpoints.down("sm")]: {
          width: "49%",
          height: "80%",
          marginLeft: `0px`,
          marginTop: "12%",
        },
        [theme.breakpoints.down("xs")]: {
          width: `330px`,
          height: `280px`,
          paddingBottom: `60px`,
          margin: `0 auto`,
        },
      },
  
   
      textLayoutThree: {
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
      partialVisibility
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
        <div className={classes.bannerThree}>
          <Slide direction="right" in={active} timeout={1800}>
            <div className={classes.textLayoutThree}>
              <p className={classes.bannerThreeTitle}>Who I am</p>
              <p className={classes.bannerThreeText}>
                I am educated and raised in British Columbia, Canada, and my
                partner in crime is my pet cat Oscar, who is the prince of
                purrsia. In my free time, I enjoy teaching others front end
                skills or mathematics - helping others to grow further is one of
                my passions in life. I also enjoy competitive gaming, rugby or
                taking time to perfect the greatest gourmet mac and cheese
                recipe (a work in progress).
              </p>
            </div>
          </Slide>

          <Fade in={active} timeout={2400}>
            <img
              className={classes.bannerThreeImg}
              src="/static/images/flag.png"
              alt="flag"
            />
          </Fade>
        </div>
    </VizSensor>
  );
}
