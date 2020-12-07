import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import VizSensor from "react-visibility-sensor";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: "1000px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  })
);

export default function ProjectImg(props: any) {
  const classes = useStyles();
  let [active, setActive] = useState(true);

  return (
    <VizSensor
      partialVisibility
      scrollThrottle={100}
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
