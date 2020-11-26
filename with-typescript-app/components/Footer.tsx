import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white",
      fontWeight: "normal",
      fontSize: "medium",
      textAlign: `left`,
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    textBottom:{
        color: "white",
        fontWeight: "normal",
        fontSize: "medium",
        textAlign: `center`,
        paddingBottom: '30px',
        fontFamily:
          "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  
        [theme.breakpoints.down("sm")]: {
          marginLeft: "5px",
        },
    },
    title: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
      color: `#333`,
      margin: `0 auto`,
      width: "fit-content",
      paddingTop: `80px`,
      marginBottom: `20px`,
    },
    container: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        background: `rgba(18, 67, 117, 0.90)` },
    card: {
      minWidth: 275,
      margin: "20px",
      background: `#00c0ffa6`,
      boxShadow: `2px 2px 6px 0px black`,
    },
    cardTitle: {},
    ".MuiCardContent-root": {
      textAlign: "center",
    },
    links: {
      textDecoration: `none`,
      margin: "8px",
      "&:visited": { color: `#ffffff` },
      "&:hover": { color: `#a2e9ff` },
      "&:active": { color: `#a2e9ff` },
      "&:link": { color: `#ffffff` },
    },
  })
);
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", flexDirection: "row",  justifyContent: `center`, }}>
        <div style={{ display: "flex", flexDirection: "column",  margin: '30px',width:`200px`}}>
          <p className={classes.text}>Navigation</p>
          <a
            className={classes.links}
            href="#About"
          >
            About
          </a>
          <a href="#Portfolio" className={classes.links}>
             Portfolio
          </a>

          <a className={classes.links} href="#Contact">
            Contacts
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column"  , margin: '30px', width:`200px`}}>
          <p className={classes.text}>About The Site</p>
          <a href="tel:+1 604 704 5402" className={classes.links}>
            Privacy Policy
          </a>
          <a
            className={classes.links}
            href="https://www.linkedin.com/in/shawn-noruzi/"
          >
            Cookie Policy 
          </a>
          <a className={classes.links} href="https://github.com/Shawn-Noruzi">
            Terms Of Use
          </a>

        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin: '30px', width:`200px` }}>
          <p className={classes.text}>Contacts</p>
          <a href="tel:+1 604 704 5402" className={classes.links}>
            Phone : +1 604 704 5402
          </a>
          <a
            className={classes.links}
            href="https://www.linkedin.com/in/shawn-noruzi/"
          >
            linkedin.com/in/shawn-noruzi
          </a>
          <a href="mailto:Shawn.Noruzi@gmail.com" className={classes.links}>
              shawn.noruzi@Gmail.com
            </a>
          <a
            className={classes.links}
            href="/static/ShayanNoruziResume.docx"
            download
          >
            Download my Resume
          </a>
        </div>
      </div>

      <p className={classes.textBottom}>
        Made with love © 2020 Shawn Noruzi. All rights reserved.
      </p>
    </div>
  );
}
