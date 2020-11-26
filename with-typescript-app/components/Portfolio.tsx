import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PortfolioCard from "./PortfolioCard";
import VizSensor from "react-visibility-sensor";
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(() =>
  createStyles({
    portfolioContainer: {
      display: `flex`,
      flexWrap: `wrap`,
    },
    buttonsContainer: {
      margin: `0 auto`,
      width: `fit-content`,
      zIndex: 2,
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
      font: `24px 'ProximaNovaSbold', Arial`,
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
    web: false,
    responsive: false,
    fullstack: false,
    restful: false,
  });
  const classes = useStyles();
  let [active, setActive] = useState(true);
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
        setActive(isVisible);
      }}
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
                  web: true,
                  responsive: true,
                  fullstack: true,
                  restful: true,
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
                  web: true,
                  responsive: false,
                  fullstack: false,
                  restful: false,
                })
              }
              className={skills.web ? classes.isActiveButton : classes.button}
            >
              Web
            </Button>
          </Grow>

          <Grow in={active} timeout={2500}>
            <Button
              onClick={() =>
                handleChange({
                  all: false,
                  web: false,
                  responsive: true,
                  fullstack: false,
                  restful: false,
                })
              }
              className={
                skills.responsive ? classes.isActiveButton : classes.button
              }
            >
              Responsive
            </Button>
          </Grow>

          <Grow in={active} timeout={3000}>
            <Button
              onClick={() =>
                handleChange({
                  all: false,
                  web: false,
                  responsive: false,
                  fullstack: true,
                  restful: false,
                })
              }
              className={
                skills.fullstack ? classes.isActiveButton : classes.button
              }
            >
              FullStack
            </Button>
          </Grow>

          <Grow in={active} timeout={3500}>
            <Button
              onClick={() =>
                setSkills({
                  all: false,
                  web: false,
                  responsive: false,
                  fullstack: false,
                  restful: true,
                })
              }
              className={
                skills.restful ? classes.isActiveButton : classes.button
              }
            >
              Restful
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
                  height: "400px",
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
