import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar";
// import background from '../public/static/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      background:
        "linear-gradient( rgba(0, 0, 200 , 0.5), rgba(255,0,200, 0.4) ), url(/static/images/brownbgM.png)",
      height: "100vh",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("sm")]: {
        background:
          "linear-gradient( rgba(0, 0, 200 , 0.5), rgba(255,0,200, 0.4) ), url(/static/images/brownbg.png)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    },
    title: {
      fontSize: "32px",
      margin: "0 auto",
      letterSpacing: "10px",
      marginBottom: "10px",
      color: "white",
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.up("sm")]: {
        letterSpacing: "10px",
      },
    },
    TopSectionText: {
      width: "300px",
      marginLeft: "20px",
      position: "absolute",
      top: "15%",

      [theme.breakpoints.up("sm")]: {
        width: "400px",
        top: "40%",
        right: "40%",
        position: "absolute",
      },
      [theme.breakpoints.up("md")]: {
        width: "500px",
        top: "40%",
        right: "50%",
        position: "absolute",
      },
    },
    TopSectionBar: {
      borderBottom: " white solid",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        width: '65%'
      },
      [theme.breakpoints.down("sm")]: {
        width: '90%'
      },
    },
    // sectionMobile: {
    //   display: "flex",
    //   [theme.breakpoints.up("md")]: {
    //     display: "none",
    //   },
    // },
  })
);

const TopSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavBar />
      <div className={classes.TopSectionText}>
        <p className={classes.title}>Front End Engineer</p>
        <div className={classes.TopSectionBar} />
        <p className={classes.title}>UX + Visual Designer</p>
        <p className={classes.title}></p>
      </div>
    </div>
  );
};

export default TopSection;

//top nav bar needs to be extended half during mobile
// bottom footer needs contacs
//middle needs work exp with singulars
