import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      "html, body": {
        margin: 0,
        padding: 0,
        scrollBehavior: "smooth",
      },
    },

    menuButton: {
      marginRight: theme.spacing(10),
    },
    title: {
      textDecoration: "none",
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      borderLeft: "solid",
      paddingLeft: "10px",
      letterSpacing: "10px",
      color: "white",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        fontSize: "xx-large",
        fontWeight: "400",
        letterSpacing: "10px",
      },
    },

    linkText: {
      marginBottom: `20px`,
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
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    activeLink: {
      marginBottom: `20px`,
      position: "relative",
      textDecoration: "none",
      color: "white",
      fontWeight: "bolder",
      transition: "0.3s",
      fontSize: `23px`,

      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.down("md")]: {
        marginLeft: "5px",
      },
    },
    gutters: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
    inputRoot: {
      color: "inherit",
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        margin: `0 auto`,
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
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
      right: "0",
      zIndex: 1,
    },
    overlay: {
      height: `0%`,
      width: `100%`,
      position: `fixed`,
      zIndex: 3,
      left: `0`,
      top: `0`,

      backgroundColor: `rgb(65 199 210 / 90%)`,
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

export default function Navbar(props: any) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState({
    about: false,
    portfolio: false,
    contact: false,
  });
  useEffect(() => {
    setActiveTab({
      about: props.props.isFirstVisible,
      portfolio: props.props.isSecondVisible,
      contact: props.props.isThirdVisible,
    });
  }, [props]);

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
              height: "200px",
            }}
          >
            <Link href="/#About" scroll={false}>
              <a
                onClick={() => {
                  setActiveTab({
                    about: true,
                    portfolio: false,
                    contact: false,
                  });
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={
                  activeTab.about == true
                    ? classes.activeLink
                    : classes.linkText
                }
              >
                About
              </a>
            </Link>
            <Link href="/#Portfolio" scroll={false}>
              <a
                onClick={() => {
                  setActiveTab({
                    about: false,
                    portfolio: true,
                    contact: false,
                  });
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={
                  activeTab.portfolio == true
                    ? classes.activeLink
                    : classes.linkText
                }
              >
                Portfolio
              </a>
            </Link>
            <Link href="/#Contact" scroll={false}>
              <a
                onClick={() => {
                  setActiveTab({
                    about: false,
                    portfolio: false,
                    contact: true,
                  });
                  setTimeout(function () {
                    openMenu();
                  }, 800);
                }}
                className={
                  activeTab.contact == true
                    ? classes.activeLink
                    : classes.linkText
                }
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
