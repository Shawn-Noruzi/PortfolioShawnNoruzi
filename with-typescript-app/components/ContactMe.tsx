import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white",
      width: "400px",
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
      marginTop: "30px",
      color: "white",
      height: "45px",
      borderBottom: "2.5px solid #617ac1",
      fontWeight: "400",
      fontSize: "larger",
      width: `300px`,
      margin: `0 auto`,
      marginBottom: `20px`,
      textAlign: `center`,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    container: {
      background: "rgb(49, 39, 131)",
    },
    textContainer: {
      width: "1200px",
      margin: "0 auto",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  })
);
export default function ContactMe() {
  const classes = useStyles();
  return (
    <div  id={"Contact"} className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.title}> Contact Me </p>
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <a style={{ margin: "20px" }} href="mailto:Shawn.Noruzi@gmail.com">
            <MailOutlineIcon style={{ fill: "white" }} fontSize="large" />
          </a>
          <a style={{ margin: "20px" }} href="tel:604-704-5402">
            <PhoneIcon style={{ fill: "white" }} fontSize="large" />
          </a>
          <a
            style={{ margin: "20px" }}
            href="https://www.linkedin.com/in/shawn-noruzi/"
          >
            <LinkedInIcon style={{ fill: "white" }} fontSize="large" />
          </a>
          <a style={{ margin: "20px" }} href="https://github.com/Shawn-Noruzi">
            <GitHubIcon style={{ fill: "white" }} fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}
