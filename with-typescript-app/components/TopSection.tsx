import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "./navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      background:
        "linear-gradient( rgb(196 181 255 / 56%), rgb(228 146 222 / 60%)), url(/static/images/brownbgM.png)",

      height: "100vh",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.up("sm")]: {
        background:
        
          "linear-gradient(rgb(196 181 255 / 56%), rgb(146 202 228 / 60%)), url(/static/images/mountain.jpg)",
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
      color: "white",
      paddingTop: `3px`,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      [theme.breakpoints.up("sm")]: {
        letterSpacing: "10px",
      },
    },
    subTitle:{
      color:'white',
      textAlign: `center`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
    },
    nameContainer:{
      border: `7px solid white`,
      textAlign: `center`,
      height: `110px`,
      background: `rgb(0 0 0 / 14%)`,
      fontFamily: `ProximaNovaExCn-Semibold, Arial`,
  
    },
    TopSectionText: {
      width: "325px",
      margin: '0 auto',
      paddingTop: `359px`,
      [theme.breakpoints.up("sm")]: {
      },
      [theme.breakpoints.up("md")]: {

      },
    },
    TopSectionBar: {
      borderBottom: " white solid",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        width: "65%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
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

const TopSection = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavBar props={props} />
      <div className={classes.TopSectionText}>
        <div className={classes.nameContainer} >
          <p style={{marginTop:`8px`}} className={classes.title}>SHAWN</p>
          <p className={classes.title}>NORUZI</p>
        </div>
        <p className={classes.subTitle}> Front End Developer |  UX and UI Designer </p>
      </div>
    </div>
  );
};

export default TopSection;
