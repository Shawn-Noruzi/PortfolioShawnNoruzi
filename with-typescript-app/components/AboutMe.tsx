import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import VizSensor from "react-visibility-sensor";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: "left",
      color: "#333",
      width: "300px",
      margin: `30px 20px 20px 20px`,
      height: `fit-content`,
      font: `17px/34px 'Baskerville', Arial`,
      [theme.breakpoints.down("lg")]: {
        width: "300px",
      },
      [theme.breakpoints.down("md")]: {
        margin: ` 0 auto`,
        marginTop: ` 30px`,
        marginBottom: `30px`,
        width: "330px",
      },
      [theme.breakpoints.down("sm")]: {
        width: `300px`,
      },
    },

    title: {
      font: ` 45px/130% 'Gotham', Arial`,
      color: ` #333`,
      margin: `0 auto`,
      maxWidth: `750px`,
      padding: `55px 0px 0px`,
      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
    },
    subTitle: {
      font: ` 45px/130% 'Gotham', Arial`,
      color: ` #333`,
      margin: `0 auto`,
      maxWidth: `750px`,
      paddingTop: `15px`,
      [theme.breakpoints.down("md")]: {
        fontSize: "33px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
        width: `300px`,
      },
    },
    container: { marginTop: "120px", textAlign: `center` },
    img: { borderRadius: "1000px", filter: `brightness(0.8)`, zIndex: -30 },
    bar: {
      borderBottom: `3px solid`,
      color: `#4777ff`,
      width: `50px`,
      margin: `0 auto`,
    },
    textContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      paddingTop: "40px",
      paddingBottom: "40px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    textHeader: {
      font: `24px 'GothamBold', Arial`,
      letterSpacing: `3px`,
    },
    textCard: {
      textAlign: "center",
      padding: `0px 40px`,
      [theme.breakpoints.down("md")]: {
        padding: "0",
      },
    },
    spacer: {
      [theme.breakpoints.down("sm")]: {
        height: "20px",
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
        <Fade in={active} timeout={2000}>
          <img
            className={classes.img}
            src="/static/images/shayan.jpg"
            alt="Picture of author"
            width={350}
            height={350}
          />
        </Fade>

        <Fade in={active} timeout={2500}>
          <p className={classes.title}>Seasoned Front End Engineer</p>
        </Fade>
        <Fade in={active} timeout={2500}>
          <p className={classes.subTitle}>from Vancouver, Canada</p>
        </Fade>

        <div className={classes.textContainer}>
          <div className={classes.textCard}>
            <Grow in={active} timeout={3000}>
              <p className={classes.textHeader}>Experience</p>
            </Grow>
            <Grow in={active} timeout={3000}>
              <div className={classes.bar} />
            </Grow>
            <Grow in={active} timeout={3000}>
              <div style={{paddingLeft:'40px'}}>
                <p className={classes.text}>
                  I have a Computer Science and Mathematics educational
                  background, team lead experience, and a plethora of projects
                  focused on front end skill development. I've built a bounty
                  web app for developers to find work, a geolocation based
                  constituent consulting app and a tinder-like mentor finding
                  app.
                </p>
              </div>
            </Grow>
          </div>

          <div className={classes.textCard}>
            <Grow in={active} timeout={4100}>
              <p className={classes.textHeader}>Who I am </p>
            </Grow>

            <Grow in={active} timeout={4600}>
              <div className={classes.bar} />
            </Grow>

            <Grow in={active} timeout={4600}>
              <div style={{paddingLeft:'40px'}}>
                <p className={classes.text}>
                  I've lived and gone to school in B.C. Canada and I have a cat
                  named Oscar, who is the prince of purrsia. I spend a lot of my time
                  teaching front end skills or math - I find
                  myself having the most fun helping others grow. My main
                  objective is to bring my expertise of high end and modern web
                  design and engineering together with my client's needs to
                  create purposeful branding and a product that truly stands
                  out.
                </p>
              </div>
            </Grow>
          </div>

          <div className={classes.textCard}>
            <Grow in={active} timeout={5100}>
              <p className={classes.textHeader}>What I like</p>
            </Grow>

            <Grow in={active} timeout={5700}>
              <div className={classes.bar} />
            </Grow>

            <Grow in={active} timeout={5700}>
              <div style={{paddingLeft:'40px'}}>
                <p className={classes.text}>
                  From new design patterns to new tools - there's always
                  something that keeps my interest in this line of work and its
                  one of the main reasons I chose to get into it. Outside of web
                  development you can find me making educational content,
                  playing rugby, or reading up on politics, psychology and
                  health science.
                </p>
              </div>
            </Grow>
          </div>
        </div>
      </div>
    </VizSensor>
  );
}
