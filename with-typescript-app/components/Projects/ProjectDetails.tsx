import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import VizSensor from "react-visibility-sensor";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({


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
      padding: `15px`,
      margin: `8px`,
      fontFamily: "HelveticaNeue_Light",
      boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
    },
    techContainer: {
      display: "flex",
      marginBottom: `75px`,
      marginTop: `20px`,
      width: `400px`,
      flexWrap: `wrap`,
      [theme.breakpoints.down("md")]: {
        width: "330px",
      },
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
