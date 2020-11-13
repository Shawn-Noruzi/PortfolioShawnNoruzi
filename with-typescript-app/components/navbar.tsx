import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      "html, body": {
        margin: 0,
        padding: 0,
      },
    },
    grow: {
      flexGrow: 1,
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
      textDecoration: "none",
      color: "white",
      fontWeight: "normal",
      fontSize: "larger",
      marginLeft: "65px",
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
    },
    left: {
      position: "relative",
      textDecoration: "none",
      color: "white",
      fontWeight: "normal",
      fontSize: "larger",
      marginLeft: "65px",
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",

      "&:before": {
        content: '""',
        position: "absolute",
        width: "0",
        height: "2px",
        bottom: "0",
        left: "0",
        backgroundColor: "white",
        visibility: "hidden",
        transition: "all 0.3s ease-in-out",
      },
      "&:hover": {
        "&:before": {
          visibility: "visible",
          width: "100%",
        },
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    activeLink: {
      position: "relative",
      textDecoration: "none",
      color: "white",
      fontWeight: "bolder",
      fontSize: "larger",
      marginLeft: "65px",
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
        backgroundColor: "#2A2683",
      },
    },
  })
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState({
    about: false,
    portfolio: false,
    contact: false,
  });
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const tabHandler = (value: string) => {
    if (value == "about") {
      setActiveTab({ about: true, portfolio: false, contact: false });
    } else if (value == "portfolio") {
      setActiveTab({ about: false, portfolio: true, contact: false });
    } else if (value == "contact") {
      setActiveTab({ about: false, portfolio: false, contact: true });
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  //When Mobile
  const renderMobileMenu = (
    <Menu
      className={classes.menu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link href="/">
          <a
            onClick={() => tabHandler("about")}
            className={
              activeTab.about == true ? classes.activeLink : classes.left
            }
          >
            About
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/">
          <a
            onClick={() => tabHandler("portfolio")}
            className={
              activeTab.portfolio == true ? classes.activeLink : classes.left
            }
          >
            Portfolio
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/">
          <a
            onClick={() => tabHandler("contact")}
            className={
              activeTab.contact == true ? classes.activeLink : classes.left
            }
          >
            Contact
          </a>
        </Link>
      </MenuItem>
    </Menu>
  );

  //Desktop
  return (
    <div className={classes.grow}>
      <AppBar
        style={{ background: "transparent", boxShadow: "none" }}
        position="fixed"
      >
        <Toolbar className={classes.gutters}>
          <Link href="/">
            <a className={classes.title}>Shawn Noruzi </a>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>
              <Link href="/">
                <a
                  onClick={() => tabHandler("about")}
                  className={
                    activeTab.about == true ? classes.activeLink : classes.left
                  }
                >
                  About
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={() => tabHandler("portfolio")}
                  className={
                    activeTab.portfolio == true
                      ? classes.activeLink
                      : classes.left
                  }
                >
                  Portfolio
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={() => tabHandler("contact")}
                  className={
                    activeTab.contact == true
                      ? classes.activeLink
                      : classes.left
                  }
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <MenuIcon
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            ></MenuIcon>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
