import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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

export default function ProjectImgText(props: any) {
  const classes = useStyles();
  let [active, setActive] = useState(true);
  let [hasBeenVisible, setHasBeenVisible] = useState(false);

  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => {
        let count = 0;
        if (active && hasBeenVisible) {
          return;
        }

        setActive(isVisible);
        count++;

        if (count >= 1) {
          setHasBeenVisible(true);
        }
      }}
      active={hasBeenVisible ? !active : true}
    >
      <div className={classes.background}>
        <Grow in={active} timeout={1800}>
          <div key={props.index} className={classes.contentContainer}>
            <div className={classes.imgContainer}>
              <img src={props.value.img} className={classes.img} />
            </div>

            <div className={classes.contentTitleTextContainer}>
              <div className={classes.headerProject}>{props.value.header}</div>
              <div className={classes.textProject}>{props.value.text}</div>
            </div>
          </div>
        </Grow>
      </div>
    </VizSensor>
  );
}
