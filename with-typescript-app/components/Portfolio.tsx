import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PortfolioCard from "./PortfolioCard";
import VizSensor from "react-visibility-sensor";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portfolioContainer: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`


    },
    buttonsContainer: {
      margin: `0 auto`,
      width: `fit-content`,
      zIndex: 1,
      [theme.breakpoints.down("md")]: {
        display: `flex`,
        width: `350px`,
        flexWrap: `wrap`,
        marginBottom: `30px`,
        justifyContent:"center"
      },
    },
    button: {
      color: `white`,
      background: `rgb(18 72 128 / 52%)`,
      margin: `10px`,
      " &:hover": {
        background: `rgba(18, 67, 117)`,
        boxShadow: `2px 4px 10px 0px #888888`,
      },
    },
    isActiveButton: {
      color: `white`,
      background: `rgba(18, 67, 117, 0.90)`,
      margin: `10px`,
      " &:hover": {
        boxShadow: `2px 4px 10px 0px #888888`,
        background: `rgba(18, 67, 117, 0.90)`,
      },
    },
    bar: {
      color: `#4777ff`,
      width: ` 50px`,
      margin: ` 0 auto`,
      borderBottom: `3px solid`,
      marginBottom: `50px`,
    },
    title: {
      font: `24px 'PrbuttonoximaNovaSbold', Arial`,
      letterSpacing: `5px`,
      color: ` #333`,
      margin: `0 auto`,
      width: "fit-content",
      marginTop: `80px`,
      marginBottom: `20px`,
    },
  })
);

const Portfolio = () => {
  const [skills, setSkills] = useState({
    all: true,
    frontend: false,
    fullstack: false,
  });
  const classes = useStyles();
  let [active, setActive] = useState(true);
  let [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [checked, setChecked] = React.useState(true);
  function handleChange(props: any) {
    setChecked(false);
    setTimeout(function () {
      setChecked((prev) => !prev);
    }, 600);

    setSkills(props);
  }
 
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
      <div id={"Portfolio"}>
        <Grow in={active} timeout={1000}>
          <div>
            <p className={classes.title}>My Work</p>
            <div className={classes.bar} />
          </div>
        </Grow>

        <div className={classes.buttonsContainer}>
          <Grow in={active} timeout={1500}>
            <Button
              onClick={() =>
                handleChange({
                  all: true,
                  frontend: true,
                  fullstack: true,
                })
              }
              className={skills.all ? classes.isActiveButton : classes.button}
            >
              All
            </Button>
          </Grow>

          <Grow in={active} timeout={2000}>
            <Button
              onClick={() =>
                handleChange({
                  all: false,
                  frontend: true,
                  fullstack: false,
                })
              }
              className={skills.frontend ? classes.isActiveButton : classes.button}
            >
              Front End
            </Button>
          </Grow>

          <Grow in={active} timeout={3000}>
            <Button
              onClick={() =>
                handleChange({
                  all: false,
                  frontend: false,
                  fullstack: true,
                })
              }
              className={
                skills.fullstack ? classes.isActiveButton : classes.button
              }
            >
              FullStack
            </Button>
          </Grow>


        </div>
        <Grow in={active} timeout={2500}>
          <div className={classes.portfolioContainer}>
            {checked == true ? (
              <PortfolioCard skills={skills} checked={checked} />
            ) : (
              <div
                style={{
                  height: "800px",
                  width: "400px",
                  margin: "0 auto",
                  marginTop: `50px`,
                  textAlign: `center`,
                }}
              >
                <CircularProgress disableShrink />
              </div>
            )}
          </div>
        </Grow>
      </div>
    </VizSensor>
  );
};

export default Portfolio;
