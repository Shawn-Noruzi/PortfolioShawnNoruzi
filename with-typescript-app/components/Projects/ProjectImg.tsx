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

    text: {
      textAlign: "left",
      color: "#333",
      width: ` 70%`,
      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      [theme.breakpoints.down("md")]: {
        width: `unset`,
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

    background: {
      background: "#e6e6e6",
    },
  })
);

export default function ProjectImg(props: any) {
  const classes = useStyles();
  let [active, setActive] = useState(true);

  return (
    <VizSensor
      partialVisibility
      scrollThrottle = {100}
      onChange={(isVisible) => {
        setActive(isVisible);
      }}
      active={!active}
    >
      <Grow in={active} timeout={1800}>
        <div
          style={{
            padding: "40px",
            background: "#202329",
            width: `100%`,
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <img src={props.value.img} className={classes.img} />
        </div>
      </Grow>
    </VizSensor>
  );
}
