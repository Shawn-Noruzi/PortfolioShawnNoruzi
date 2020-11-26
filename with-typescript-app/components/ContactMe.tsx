import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "@material-ui/core";
import VizSensor from "react-visibility-sensor";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white",
      width: "400px",
      marginLeft: "80px",
      fontWeight: "normal",
      fontSize: "medium",
      fontFamily:
        "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
      },
    },
    title: {
      font: `24px 'ProximaNovaSbold', Arial`,
      letterSpacing: `5px`,
      color: `#333`,
      margin: `0 auto`,
      width: "fit-content",
      paddingTop: `80px`,
      marginBottom: `20px`,
    },
    bar: {
      color: `#4777ff`,
      width: ` 50px`,
      margin: ` 0 auto`,
      borderBottom: `3px solid`,
      marginBottom: `50px`,
    },
    container: {},
    textContainer: {
      width: "1200px",
      margin: "0 auto",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    card: {
      minWidth: 275,
      margin: "20px",
      background: `#295583`,

      boxShadow: `2px 2px 6px 0px black`,
    },
    cardTitle: {},
    ".MuiCardContent-root": {
      textAlign: "center",
    },
    links: {
      textDecoration: `none`,
      margin: "20px",
      "&:visited": { color: `#ffffff` },
      "&:hover": { color: `#a2e9ff` },
      "&:active": { color: `#a2e9ff` },
      "&:link": { color: `#ffffff` },
    },
  })
);
export default function ContactMe() {
  const classes = useStyles();
  let [active, setActive] = useState(true);
  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => {
        setActive(isVisible);
      }}
    >
      <div id={"Contact"} className={classes.container}>
        <Grow in={active} timeout={1000}>
          <div>
            <p className={classes.title}> Contact Me </p>
            <div className={classes.bar} />
          </div>
        </Grow>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Grow in={active} timeout={1000}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: `center`, color: `white` }}>
                <a
                  style={{ margin: "20px" }}
                  href="mailto:Shawn.Noruzi@gmail.com"
                >
                  <MailOutlineIcon style={{ fill: "white" }} fontSize="large" />
                </a>
                <p className={classes.cardTitle}>Email </p>
                <a
                  href="mailto:Shawn.Noruzi@gmail.com"
                  className={classes.links}
                >
                  Shawn.Noruzi@Gmail.com
                </a>
              </CardContent>
            </Card>
          </Grow>

          <Grow in={active} timeout={2000}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: `center`, color: `white` }}>
                <a style={{ margin: "20px" }} href="tel:604-704-5402">
                  <PhoneIcon style={{ fill: "white" }} fontSize="large" />
                </a>
                <p className={classes.cardTitle}>Phone </p>
                <a href="tel:+1 604 704 5402" className={classes.links}>
                  +1 604 704 5402
                </a>
              </CardContent>
            </Card>
          </Grow>

          <Grow in={active} timeout={3000}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: `center`, color: `white` }}>
                <a
                  style={{ margin: "20px" }}
                  href="https://www.linkedin.com/in/shawn-noruzi/"
                >
                  <LinkedInIcon style={{ fill: "white" }} fontSize="large" />
                </a>
                <p className={classes.cardTitle}>LinkedIn</p>
                <a
                  className={classes.links}
                  href="https://www.linkedin.com/in/shawn-noruzi/"
                >
                  linkedin.com/in/shawn-noruzi
                </a>
              </CardContent>
            </Card>
          </Grow>

          <Grow in={active} timeout={4000}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: `center`, color: `white` }}>
                <Link
                  className={classes.links}
                  href="https://github.com/Shawn-Noruzi"
                >
                  <GitHubIcon style={{ fill: "white" }} fontSize="large" />
                </Link>
                <p className={classes.cardTitle}>Github</p>
                <a
                  className={classes.links}
                  href="https://github.com/Shawn-Noruzi"
                >
                  github.com/Shawn-Noruzi
                </a>
              </CardContent>
            </Card>
          </Grow>
        </div>
      </div>
    </VizSensor>
  );
}
