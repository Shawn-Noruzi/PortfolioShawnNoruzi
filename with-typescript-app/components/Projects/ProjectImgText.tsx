import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import VizSensor from "react-visibility-sensor";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerProject: {
      font: `24px 'RobotoBold', Arial`,
      letterSpacing: `5px`,
      color: "white",
      marginBottom: `30px`,
    },
    textProject: {
      font: `21px 'Roboto', Arial`,
      lineHeight: 2,
      color: "white",
      whiteSpace: `pre-wrap`
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
      padding: "50px",

    },

    contentTitleTextContainer: {
      padding: "40px",
      background: "#202329",
      marginTop: "50px",
      width: `80%`,
      display: `flex`,
      justifyContent: `end`,
      flexDirection: `column`,

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
            {props.value.text ? (
              <div className={classes.contentTitleTextContainer}>
                <div className={classes.headerProject}>
                  {props.value.header}
                </div>
                <div className={classes.textProject}>{props.value.text}</div>
              </div>
            ) : null}
          </div>
        </Grow>
      </div>
    </VizSensor>
  );
}
