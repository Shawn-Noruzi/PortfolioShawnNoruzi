import React, { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
// import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from "swr";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fetcher } from "../../utils/Fetcher";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PagesNavbar from "../../components/pagesNavbar";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowBackIos } from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";

import VizSensor from "react-visibility-sensor";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topContentContainer: {
      width: `50%`,
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "350px",
      },
    },

    title: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      maxWidth: `750px`,
      padding: `55px 0px 0px`,
      [theme.breakpoints.down("md")]: {
        paddingLeft: "8px",
        padding: `20px 0px 0px`,
      },
    },
    root: {
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
    },

    text: {
      textAlign: "left",
      color: "#333",
      width: ` 70%`,
      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      [theme.breakpoints.down("md")]: {
        width: `unset`,
      },
    },
    textSpacingTitleContent: {
      [theme.breakpoints.down("md")]: {
        width: `320px`,
        margin: "0 auto",
      },
    },
    textSpacingOverviewContent: {
      [theme.breakpoints.down("md")]: {
        width: `280px`,
        margin: "0 auto",
      },
    },

    header: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
    },

    headerProject: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
      color: "white",
      marginBottom: `30px`,
    },
    textProject: {
      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      color: "white",
    },
    headerViewSite: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
      marginRight: `100px`,
      textDecoration: `none`,
    },
    spacingViewSite: {
      paddingTop: "30px",
    },
    headerContainer: {
      display: "flex",
      marginBottom: "20px",

      [theme.breakpoints.down("md")]: {
        width: "330px",
        display: `flex`,
        flexWrap: `wrap`,
      },
    },
    headerContentContainer: {
      width: "200px",
      marginTop: "35px",
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
    },
    button: {
      background: `grey`,
      color: `white`,
      borderRadius: `5px`,
      width: `150px`,
      textAlign: `center`,
      padding: `2px`,
      margin: `3px`,
      boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    },
    img: {
      width: "1000px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    imgContainer: {
      padding: "40px",
      background: "#202329",
      width: `80%`,
      display: `flex`,
      justifyContent: `center`,
      [theme.breakpoints.down(1500)]: {
        width: `90%`,
      },
      [theme.breakpoints.down("sm")]: {
        width: "unset",
        padding: "10px",
      },
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      background: "#e6e6e6",
      padding: "80px",
      [theme.breakpoints.down("md")]: {
        padding: "0px",
        paddingTop: "80px",
      },
    },
    contentContainerFlipped: {
      background: "red",
    },
    techContainer: {
      display: "flex",
      marginBottom: `75px`,
      marginTop: `20px`,
      width: `700px`,
      flexWrap: `wrap`,
      [theme.breakpoints.down("md")]: {
        width: "330px",
      },
    },
    navButtons: {
      display: "flex",
    },
    navIcon: {},
    navTextLeft: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      width: "50%",
      padding: `55px 0px 55px`,
      textAlign: "center",
      backgroundSize: `200% 100%`,
      backgroundImage: `linear-gradient(to left, #fff0 50%, #00ffe9 50%)`,
      transition: `background-position 1s`,

      "&:hover": {
        backgroundPosition: `100% 0`,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    navTextRight: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      width: "50%",
      padding: `55px 0px 55px`,
      textAlign: "center",
      backgroundSize: `200% 100%`,
      backgroundImage: `linear-gradient(to left, #fff0 50%, #00ffe9 50%)`,
      transition: `background-position 1s`,
      "&:hover": {
        backgroundPosition: `-100% 0`,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    contentTitleTextContainer: {
      padding: "40px",
      background: "#202329",
      marginTop: "50px",
      width: `80%`,
      display: `flex`,
      justifyContent: `end`,
      flexDirection: `column`,
      marginBottom: "75px",
      [theme.breakpoints.down("md")]: {
        width: `100%`,
      },
    },
    footer: {
      background: "rgb(32, 35, 41)",
      margin: "0 auto",
      color: "white",
      height: "175px",
      display: `flex`,
      justifyContent: `center`,
      paddingTop: `85px`,
    },
  })
);

export default function ProjectDetails(props: any) {
  const classes = useStyles();
  let [active, setActive] = useState(true);

  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => {
        setActive(isVisible);
      }}
      active={!active}
    >
      <Slide direction="right" in={active} timeout={1800}>
        <div style={{ paddingLeft: "10px" }}>
          {props.data.website != "" ? (
            <div className={classes.spacingViewSite}>
              <a className={classes.headerViewSite} href={props.data.website}>
                View Site
              </a>
            </div>
          ) : null}

          <div className={classes.headerContainer}>
            <div className={classes.headerContentContainer}>
              <div className={classes.header}>Client</div>
              <div className={classes.text}>{props.data.client}</div>
            </div>

            <div className={classes.headerContentContainer}>
              <div className={classes.header}>Date</div>
              <div className={classes.text}>{props.data.date}</div>
            </div>
            <div className={classes.headerContentContainer}>
              <div className={classes.header}>Role</div>
              <div className={classes.text}>{props.data.role}</div>
            </div>
          </div>

          <div>
            <div className={classes.header}>Tech Used</div>
            <div className={classes.techContainer}>
              {props.data.techSkills.map((value: String[], index: any) => {
                return (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    key={index}
                  >
                    <div className={classes.button}>{value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Slide>
    </VizSensor>
  );
}
