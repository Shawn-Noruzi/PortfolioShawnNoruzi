import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import VizSensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: "left",
      color: "white",
      width: "auto",
      margin: `30px 20px 20px 20px`,
      height: "fit-content",
      font: `24px/34px 'RobotoLight', Arial`,
      [theme.breakpoints.down("lg")]: {
        width: "auto",
      },
      [theme.breakpoints.down("md")]: {
        margin: ` 0 auto`,
        marginTop: ` 30px`,
        marginBottom: `30px`,
        width: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        width: `300px`,
      },
    },

    container: { margin: " 0 auto" },

    bannerOne: {
      width: "100%",
      height: "360px",
      display: "flex",
      background: "#1b77ba",
      justifyContent: `space-between`,
      paddingBottom: "105px",
      [theme.breakpoints.down("sm")]: {
        height: "600px",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
        height: "660px",
        justifyContent: `unset`,
      },
    },

    bannerOneTitle: {
      fontFamily: "Roboto",
      fontSize: "48px",
      color: "white",
      marginBottom: "0px",
      marginTop: "70px",
      zIndex: 1,
      [theme.breakpoints.down("xs")]: {
        marginTop: "unset",
      },
    },
    bannerOneText: {
      zIndex: 1,
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "white",
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
        marginTop: '90px'
      },
      [theme.breakpoints.down("xs")]: {
        width: `330px`,
        height: `280px`,
        margin: `0 auto`,
      },
    },

    bannerTwo: {
      width: "100%",
      height: "360px",
      display: "flex",
      justifyContent: `space-between`,
      background: "#242730",
      paddingTop: "50px",
      paddingBottom: "50px",

      [theme.breakpoints.down("sm")]: {
        height: "380px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        height: "660px",
        justifyContent: `space-around`,
      },
    },

    bannerTwoTitle: {
      fontFamily: "Roboto",
      fontSize: "48px",
      color: "white",
      marginBottom: "0px",
    },
    bannerTwoText: {
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "white",
    },
    bannerTwoImg: {
      width: "500px",
      height: "371px",
      marginLeft: "100px",
      [theme.breakpoints.down("md")]: {
        width: "450px",
        height: "380px",
        marginLeft: `3%`,
      },
      [theme.breakpoints.down("sm")]: {
        width: "49%",
        height: "80%",
        marginLeft: `0px`,
      },
      [theme.breakpoints.down("xs")]: {
        width: `350px`,
        height: `300px`,
        margin: `0 auto`,
      },
    },

    bannerThree: {
      width: "100%",
      height: "360px",
      display: "flex",
      justifyContent: `space-between`,
      background: "#1B77BA",
      paddingTop: "50px",
      paddingBottom: "50px",
      [theme.breakpoints.down("sm")]: {
        height: "380px",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
        height: "660px",
        justifyContent: `space-around`,
      },
    },
    bannerThreeTitle: {
      fontFamily: "Roboto",
      fontSize: "48px",
      color: "white",
      marginBottom: "0px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "0px",
      },
    },
    bannerThreeText: {
      fontFamily: "Roboto",
      fontSize: "24px",
      color: "white",
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
      },
      [theme.breakpoints.down("xs")]: {
        width: `330px`,
        height: `280px`,
        paddingBottom: `60px`,
        paddingTop: `20px`,
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
    textLayoutTwo: {
      display: "flex",
      flexDirection: "column",
      marginRight: `150px`,
      [theme.breakpoints.down("md")]: {
        marginRight: `50px`,
        width: "500px",
      },
      [theme.breakpoints.down("sm")]: {
        marginRight: `10px`,
      },
      [theme.breakpoints.down("xs")]: {
        width: `80%`,
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
        if (active && hasBeenVisible) {
          return;
        }

        setActive(isVisible);
        setHasBeenVisible(true);
      }}
      active={hasBeenVisible ? !active : true}
    >
      <div id={"About"} className={classes.container}>
        <div className={classes.bannerOne}>
          <Slide direction="right" in={active} timeout={1200}>
            <div className={classes.textLayoutOne}>
              <p className={classes.bannerOneTitle}>Experience</p>
              <p className={classes.bannerOneText}>
                I have a Computer Science and Mathematics educational degree,
                team leadership experience, and focused on multiple projects
                specializing in front end skill development. I have created a
                bounty web app for developers to find gig work, a constituent
                consulting app utilizing geolocalization, and an app connecting
                developers with mentors in the field.
              </p>
            </div>
          </Slide>

          <img
            className={classes.bannerOneImg}
            src="/static/images/computer.png"
            alt="man"
          />
        </div>

        <div className={classes.bannerTwo}>
          <img
            className={classes.bannerTwoImg}
            src="/static/images/man.png"
            alt="man"
          />

          <div className={classes.textLayoutTwo}>
            <p className={classes.bannerTwoTitle}>My Goal</p>
            <p className={classes.bannerTwoText}>
              To bring my expertise of high end and modern web design and
              engineering together with my client's needs to create purposeful
              branding and a product that truly stands out.
            </p>
          </div>
        </div>

        <div className={classes.bannerThree}>
          <div className={classes.textLayoutThree}>
            <p className={classes.bannerThreeTitle}>Who I am</p>
            <p className={classes.bannerThreeText}>
              Canadian developer with a cat named Oscar. Rugby and professional
              gaming are my hobbies. Spend most of my time learning front end
              tech, freelancing or working on open source projects.
            </p>
          </div>
          <img
            className={classes.bannerThreeImg}
            src="/static/images/flag.png"
            alt="flag"
          />
        </div>
      </div>
    </VizSensor>
  );
}
