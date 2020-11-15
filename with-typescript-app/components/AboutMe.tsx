import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white",
      width: '400px',
      marginLeft: "80px",
      fontWeight: "normal",
      fontSize: "medium",
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    title: {
      marginTop: "50px",
      marginLeft: '120px',
      color: "white",
      height: '30px',
      borderBottom: '2.5px solid #617ac1',
      fontWeight: "400",
      fontSize: "larger",
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    container: {
        background: 'rgb(49, 39, 131)'
    },
    textContainer: {
      display: "flex",
      width: "1200px",
      margin: "0 auto",
      paddingTop: '40px',
      paddingBottom: '40px'
    },
  })
);
export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.title}> About Me </p>
        <p className={classes.text}>
          Hey! I'm Shawn Noruzi - a Front End Engineer and UX/UI specialist
          currently living in Vancouver, Canada. I have a mathematics and
          computer science educational background from SFU and Thompson River
          University. I work with clients around the world through freelancing,
          contribute to open source projects like (GitPay and OpenMentorship),
          spear head start ups, maintain projects in the local tech scene, and
          teach CS and front end fundamentals to others online in my spare time.
        </p>
        <p className={classes.text}>
          My main objective is to bring my expertise of high end and modern web
          design and engineering together with my client's needs to create
          purposeful branding and a product or experience that truly stands out.
          Outside of web development - I enjoy making educational content for
          gamers, chilling with my cat Oscar - who I dubbed the prince of
          purrsia, and playing rugby or volleyball.
        </p>
      </div>
    </div>
  );
}
