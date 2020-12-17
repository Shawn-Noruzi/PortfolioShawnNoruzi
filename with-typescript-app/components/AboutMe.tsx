import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Experience from "../components/Experience";
import MyGoal from "../components/MyGoal";
import WhoIAm from "../components/WhoIAm";

const useStyles = makeStyles(() =>
  createStyles({
    container: { margin: " 0 auto" },
  })
);
export default function AboutMe() {
  const classes = useStyles();
  return (
    <div id={"About"} className={classes.container}>
      <Experience />
      <MyGoal />
      <WhoIAm />
    </div>
  );
}
