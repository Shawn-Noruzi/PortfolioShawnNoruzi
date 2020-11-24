import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PortfolioCard from "./PortfolioCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portfolioContainer: {},
    buttonsContainer: {
      margin: `0 auto`,
      width: `fit-content`,
      marginBottom: `50px`,
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
      marginTop: `50px`,
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
  return (
    <div>
      <p className={classes.title}>My Work</p>
      <div className={classes.bar} />
      <div className={classes.buttonsContainer}>
        <Button
          onClick={() =>
            setSkills({
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
        <Button
          onClick={() =>
            setSkills({
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
        <Button
          onClick={() =>
            setSkills({
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
        <Button
          onClick={() =>
            setSkills({
              all: false,
              web: false,
              responsive: false,
              fullstack: true,
              restful: false,
            })
          }
          className={skills.fullstack ? classes.isActiveButton : classes.button}
        >
          FullStack
        </Button>
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
          className={skills.restful ? classes.isActiveButton : classes.button}
        >
          Restful
        </Button>
      </div>
      <div className={classes.portfolioContainer}> 
        <PortfolioCard skills={skills} />
      </div>
    </div>
  );
};

export default Portfolio;
