import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(10),
    },

    linkText: {
      marginBottom: `40px`,
      position: "relative",
      textDecoration: "none",
      color: "white",
      fontWeight: "normal",
      fontSize: "larger",
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      "&:hover": {
        transition: "0.3s",
        fontSize: `23px`,
      },
    },
    menu: {
      "& .MuiPaper-root": {
        width: "118px",
        backgroundColor: "#be9bde",
      },
    },
    appBar: {
      position: `fixed`,
      margin: `20px`,
      right: "-16px",
      zIndex: 1,
    },
    overlay: {
      height: `0%`,
      width: `100%`,
      position: `fixed`,
      zIndex: 3,
      left: `0`,
      top: `0`,

      backgroundColor: `#202329f5`,
      overflowX: `hidden`,
      overflowY: `hidden`,

      transition: `0.3s ease-in`,
    },
    overlayContent: {
      position: `relative`,
      top: `25%`,
      width: `100%`,
      textAlign: `center`,
      marginTop: ` 30px`,
      display: `flex`,
      flexDirection: `column`,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
    if (menu == true) {
      const lsOutput = document.getElementById("myNav")!;
      lsOutput.style.height = "0%";
    } else {
      const lsOutput = document.getElementById("myNav")!;
      lsOutput.style.height = "100%";
    }
  };

  return (
    <div className={classes.appBar}>
      <button
        onClick={() => openMenu()}
        className={
          menu
            ? "hamburger hamburger--collapse is-active"
            : "hamburger hamburger--collapse"
        }
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div id="myNav" className={classes.overlay}>
        <div className={classes.overlayContent}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >

            <Link href="/" scroll={false}>
              <a
                onClick={() => {
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={classes.linkText}
              >
                Home
              </a>
            </Link>
            <Link href="/#About" scroll={false}>
              <a
                onClick={() => {
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={classes.linkText}
              >
                About
              </a>
            </Link>
            <Link href="/#Portfolio" scroll={false}>
              <a
                onClick={() => {
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={classes.linkText}
              >
                Portfolio
              </a>
            </Link>
            <Link href="/#Contact" scroll={false}>
              <a
                onClick={() => {
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={classes.linkText}
              >
                Contact
              </a>
            </Link>
          </div>

          <div
            style={{
              margin: "0 auto",
              textAlign: "center",
              marginTop: "10%",
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
            <a
              style={{ margin: "20px" }}
              href="https://github.com/Shawn-Noruzi"
            >
              <GitHubIcon style={{ fill: "white" }} fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
