import React, { useState } from "react";
import Image from "next/image";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    container: { marginTop: "120px", textAlign: `center` },
    img: { borderRadius: "1000px", filter: `brightness(0.8)`, zIndex:-30 },
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
    },
    textHeader: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
    },
    textCard: { textAlign: "center", padding: `0px 40px` },
  })
);
export default function AboutMe() {
  const classes = useStyles();
  return (
    <div id={"About"} className={classes.container}>
      <Image
        className={classes.img}
        src="/static/images/shayan.jpg"
        alt="Picture of author"
        width={350}
        height={350}
      />

      <p className={classes.title}>Seasoned Front End Engineer</p>
      <p className={classes.subTitle}>from Vancouver, Canada</p>
      <div className={classes.textContainer}>
        <div className={classes.textCard}>
          <p className={classes.textHeader}>Experience</p>
          <div className={classes.bar} />
          <p className={classes.text}>
            I have a Computer Science and Mathematics educational background,
            team lead experience, and a plethora of projects focused on front
            end skill development.
          </p>
          <p className={classes.text}>
            I've built a bounty web app for developers to find work, a
            geolocation based constituent consulting app and a tinder-like
            mentor finding app.
          </p>
        </div>

        <div className={classes.textCard}>
          <p className={classes.textHeader}>Who I am </p>
          <div className={classes.bar} />
          <p className={classes.text}>
            I've lived and gone to school in B.C. Canada and I have a cat named
            Oscar, the prince of purrsia. I spend a lot of my time teaching (programming, math, anything inbetween) - I find myself having the most fun helping others grow.
          </p>
          <p className={classes.text}>
            My main objective is to bring my expertise of high end and modern
            web design and engineering together with my client's needs to create
            purposeful branding and a product that truly stands out.
          </p>
        </div>

        <div className={classes.textCard}>
          <p className={classes.textHeader}>What I like</p>
          <div className={classes.bar} />
          <p className={classes.text}>
            From new design patterns to new tools - there's always something
            that keeps my interest in this line of work and its one of the main
            reasons I chose to get into it.
          </p>
          <p className={classes.text}>
            Outside of web development you can find me making educational
            content, playing rugby, or reading up on politics, psychology and
            health science.
          </p>
        </div>
      </div>
    </div>
  );
}
