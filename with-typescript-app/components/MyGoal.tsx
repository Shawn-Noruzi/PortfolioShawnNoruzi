import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import VizSensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerTwo: {
        width: "100%",
        height: "360px",
        display: "flex",
        justifyContent: `space-between`,
        background: "#242730",
        paddingTop: "50px",
        paddingBottom: "50px",
  
        [theme.breakpoints.down("sm")]: {
          height: "380px",
          paddingBottom: "80px",
        },
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
          height: "660px",
          justifyContent: `space-around`,
        },
      },
  
      bannerTwoTitle: {
        fontFamily: "Roboto",
        fontSize: "48px",
        color: "white",
        marginBottom: "0px",
        marginTop: `50px`
      },
      bannerTwoText: {
        fontFamily: "Roboto",
        fontSize: "24px",
        color: "white",
        width: `86%`
      },
      bannerTwoImg: {
        width: "500px",
        height: "371px",
        marginLeft: "100px",
        [theme.breakpoints.down("md")]: {
          width: "450px",
          height: "380px",
          marginLeft: `3%`,
        },
        [theme.breakpoints.down("sm")]: {
          width: "49%",
          height: "80%",
          marginLeft: `0px`,
        },
        [theme.breakpoints.down("xs")]: {
          width: `350px`,
          height: `300px`,
          margin: `0 auto`,
        },
      },
      textLayoutTwo: {
        display: "flex",
        flexDirection: "column",
        marginRight: `150px`,
        [theme.breakpoints.down("md")]: {
          marginRight: `50px`,
          width: "500px",
        },
        [theme.breakpoints.down("sm")]: {
          marginRight: `10px`,
        },
        [theme.breakpoints.down("xs")]: {
          width: `80%`,
          margin: `0 auto`,
        },
      },

  })
);
export default function AboutMe() {
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
       <div className={classes.bannerTwo}>
          <Fade in={active} timeout={2400}>
            <img
              className={classes.bannerTwoImg}
              src="/static/images/man.png"
              alt="man"
            />
          </Fade>

          <Slide direction="left" in={active} timeout={1800}>
            <div className={classes.textLayoutTwo}>
              <p className={classes.bannerTwoTitle}>Mission</p>
              <p className={classes.bannerTwoText}>
                To effectively collaborate with my clients and their needs by
                bringing my expertise of combining contemporary high-end web
                design and engineering to create impactful branding and
                exceptional products.
              </p>
            </div>
          </Slide>
        </div>
    </VizSensor>
  );
}
