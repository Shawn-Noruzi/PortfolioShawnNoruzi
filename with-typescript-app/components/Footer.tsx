import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textFooter: {
      color: "white",
      fontWeight: "normal",
      fontSize: "large",
      textAlign: `left`,

      fontFamily: "Roboto",
      [theme.breakpoints.down("md")]: {
        margin: "0px",
      },
    },
    textBottom: {
      [theme.breakpoints.down("md")]: {
        width: `250px`,
        margin: `0 auto`,
      },

      color: "white",
      fontWeight: "normal",
      fontSize: "medium",
      textAlign: `center`,
      paddingBottom: "30px",
      fontFamily: "Roboto",
    },
    container: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      background: `rgb(36 39 48)`,
      [theme.breakpoints.down("md")]: {
        alignItems: "unset",
      },
    },
    contentContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: `center`,
      [theme.breakpoints.down("md")]: {
        justifyContent: "",
        flexDirection: "column",
        marginTop: `30px`,
      },
    },
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "30px",
      width: `228px`,
    },
    card: {
      minWidth: 275,
      margin: "20px",
      background: `#00c0ffa6`,
      boxShadow: `2px 2px 6px 0px black`,
    },
    linksFooter: {
      textDecoration: `none`,
      fontFamily: "Roboto",
      paddingTop: `5px`,
      paddingBottom: `5px`,
      paddingLeft: `3px`,
      margin: "0px",
      "&:visited": { color: `#ffffff` },
      "&:hover": { color: `#a2e9ff` },
      "&:active": { color: `#a2e9ff` },
      "&:link": { color: `#ffffff` },
      [theme.breakpoints.down("md")]: {
        paddingTop: `20px`,
        paddingBottom: `5px`,
        paddingLeft: `5px`,
      },
    },
    navAndAboutContainer: {
      display: "flex",
      flexDirection: "row",
    },
  })
);
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.navAndAboutContainer}>
          <div className={classes.linksContainer}>
            <p className={classes.textFooter}>Navigation</p>
            <a className={classes.linksFooter} href="#About">
              About
            </a>
            <a href="#Portfolio" className={classes.linksFooter}>
              Portfolio
            </a>

            <a className={classes.linksFooter} href="#Contact">
              Contacts
            </a>
          </div>
          <div className={classes.linksContainer}>
            <p className={classes.textFooter}>About The Site</p>
            <a  href="" className={classes.linksFooter}>
              Privacy Policy
            </a>
            <a
              className={classes.linksFooter}
              href=""
            >
              Cookie Policy
            </a>
            <a
              className={classes.linksFooter}
              href=""
            >
              Terms Of Use
            </a>
          </div>
        </div>

        <div className={classes.linksContainer}>
          <p className={classes.textFooter}>Contacts</p>
          <a href="tel:+1 604 704 5402" className={classes.linksFooter}>
            Phone : +1 604 704 5402
          </a>
          <a
            className={classes.linksFooter}
            href="https://www.linkedin.com/in/shawn-noruzi/"
          >
            linkedin.com/in/shawn-noruzi
          </a>
          <a
            href="mailto:Shawn.Noruzi@gmail.com"
            className={classes.linksFooter}
          >
            shawn.noruzi@Gmail.com
          </a>
          <a
            className={classes.linksFooter}
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
