import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import VizSensor from "react-visibility-sensor";
import Link from "@material-ui/core/Link";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: "left",
      color: "#333",
      width: ` 73%`,
      font: `16px/34px 'Roboto', Arial`,
      [theme.breakpoints.down("md")]: {
        width: `unset`,
      },
      [theme.breakpoints.down("xs")]: {
        textAlign: 'center'
      },
    },

    header: {
      font: `24px 'RobotoBold', Arial`,
      letterSpacing: `5px`,
    },
    headerViewSite: {
      font: `24px 'RobotoBold', Arial`,
      letterSpacing: `5px`,
      marginRight: `100px`,
      textDecoration: `none`,

      display: `block`,
      width: `150px`,
      lineHeight: `40px`,
      textAlign: `center`,
      position: `relative`,
      color: `#fff`,
      fontSize: `15px`,
      textTransform: `uppercase`,

      "&:before": {
        borderBottom: `2px solid #202329`,
        borderLeft: `2px solid #202329`,
        
        width: `10%`,
        height: `33%`,
        left: `-10px`,
        bottom: `-10px`,
      },

      "&:after": {
        borderTop: `2px solid #202329`,
        borderRight: `2px solid #202329`,
        width: `10%`,
        height: `33%`,
        top: `-10px`,
        right: `-10px`,
      },

      "&:before, &:after": {
        position: "absolute",
        content: '""',
        transition: `all .25s`,
      },
      "&:link":{
        color: "#202329",
      },
      "&:visited": {
        color: "#202329",
      },
      "&:hover": {
        "&:before": {
          width: `112%`,
          height: ` 140%`,
        },

        "&:after": {
          width: `112%`,
          height: ` 140%`,
        },
      },
      [theme.breakpoints.down("md")]:{
        marginRight: `unset`,
      },
      [theme.breakpoints.down("sm")]:{
        marginRight: `unset`,
      },
    },

    spacingViewSite: {
      paddingTop: "35px",
      marginLeft: `40px`,
      [theme.breakpoints.down("md")]:{
        margin: `0 auto`,
        paddingTop: `56px`,
        paddingBottom: `35px`,
        width: `100%`,
        display: `flex`,
        justifyContent: `center`,
      },

    },
    headerContainer: {
      display: "flex",
      marginBottom: '40px',

      [theme.breakpoints.down("md")]: {
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent:"center"
      },
    },
    headerContentContainer: {
      width: "200px",
      marginTop: "35px",
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
      [theme.breakpoints.down("xs")]: {
        textAlign: 'center'
      },
    },
    button: {
      background: `#202329`,
      color: `white`,
      borderRadius: `5px`,
      width: `150px`,
      textAlign: `center`,
      padding: `15px`,
      margin: `8px`,
      fontFamily: "Roboto",
      boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`,
      [theme.breakpoints.down("xs")]: {
        width: "120px",
      },
    },
    techContainer: {
      display: "flex",
      marginBottom: `75px`,
      marginTop: `20px`,
      width: `auto`,
      flexWrap: `wrap`,
      [theme.breakpoints.down("md")]: {
        width: "400px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "400px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "340px",
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
      <Slide direction="right" in={active} timeout={1000}>
        <div style={{ paddingLeft: "10px" }}>
          <div className={classes.headerContainer}>
            {props.data.website != "" ? (
              <div className={classes.spacingViewSite}>
                <Link
                  underline="none"
                  classes={{ root: classes.headerViewSite }}
                  href={props.data.website}
                >
                  View Site
                </Link>
              </div>
            ) : null}
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
