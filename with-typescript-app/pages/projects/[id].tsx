import React, { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
import useSWR from "swr";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fetcher } from "../../utils/Fetcher";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PagesNavbar from "../../components/pagesNavbar";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowBackIos } from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";
import ProjectImgText from "../../components/Projects/ProjectImgText";
import ProjectImg from "../../components/Projects/ProjectImg";
import ProjectDetails from "../../components/Projects/ProjectDetails";
import VizSensor from "react-visibility-sensor";

//custom mui styling for mui icon - root then class name apply - look @ arrow icon
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topContentContainer: {
      width: `50%`,
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "550px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "350px",
      },
    },

    title: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      maxWidth: `750px`,
      padding: `55px 0px 0px`,
      [theme.breakpoints.down("md")]: {
        paddingLeft: "8px",
        padding: `20px 0px 0px`,
      },
    },
    root: {
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
    },

    text: {
      textAlign: "left",
      color: "#333",

      font: `16px/34px 'HelveticaNeue_Thin', Arial`,
      [theme.breakpoints.down("md")]: {
        width: `unset`,
      },
    },
    textSpacingTitleContent: {
      marginLeft: `50px`,
      [theme.breakpoints.down("md")]: {
        width: `500px`,
        margin: "0 auto",
      },
      [theme.breakpoints.down("sm")]: {
        width: `320px`,
        margin: "0 auto",
      },
    },
    textSpacingOverviewContent: {
      [theme.breakpoints.down("md")]: {
        width: `280px`,

      },
    },
    overviewTextContainer:{
      display: "flex", alignItems: "baseline",     marginLeft: `30px`,
      [theme.breakpoints.down("md")]: {
        marginLeft: `10px`

      },
    },
    navButtons: {
      display: "flex",
    },
    navIcon: {},
    navTextLeft: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      width: "50%",
      padding: `55px 0px 55px`,
      textAlign: "center",
      backgroundSize: `200% 100%`,
      backgroundImage: `linear-gradient(to left, #fff0 50%, #00ffe9 50%)`,
      transition: `background-position 1s`,

      "&:hover": {
        backgroundPosition: `100% 0`,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    navTextRight: {
      font: ` 45px/130% 'HelveticaNeue_Light', Arial`,
      color: ` #333`,
      width: "50%",
      padding: `55px 0px 55px`,
      textAlign: "center",
      backgroundSize: `200% 100%`,
      backgroundImage: `linear-gradient(to left, #fff0 50%, #00ffe9 50%)`,
      transition: `background-position 1s`,
      "&:hover": {
        backgroundPosition: `-100% 0`,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
    footer: {
      font: "16px/34px 'HelveticaNeue_Thin', Arial",
      background: "rgb(32, 35, 41)",
      margin: "0 auto",
      color: "white",
      height: "175px",
      display: `flex`,
      justifyContent: `center`,
      paddingTop: `85px`,
    },
  })
);

interface items {
  img: string;
  text: string;
  header: string;
}

export default function project() {
  const classes = useStyles();
  let [active, setActive] = useState(true);
  let [hasBeenVisible, setHasBeenVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/projects/${id}`, Fetcher);

  if (error) {
    return (
      <div>
        <PagesNavbar />
        <div
          style={{
            textAlign: `center`,
            position: `relative`,
            top: `300px`,
            width: "50%",
            margin: "0 auto",
          }}
        >
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <div
          style={{
            textAlign: `center`,
            position: `relative`,
            top: `300px`,
            width: "50%",
            margin: "0 auto",
          }}
        >
          <CircularProgress color="secondary" />;
        </div>
      </div>
    );
  }

  return (
    <VizSensor
      partialVisibility
      scrollThrottle={100}
      onChange={(isVisible) => {
        if (active && hasBeenVisible) {
          return;
        }

        setActive(isVisible);
        setHasBeenVisible(true);
      }}
      active={hasBeenVisible ? !active : true}
    >
      <div>
        <div>
          <PagesNavbar />
          <div className={classes.topContentContainer}>
            <Slide timeout={300} direction="right" in={active}>
              <div className={classes.title}>{data.title}</div>
            </Slide>

            <Slide direction="right" in={active} timeout={550}>
              <div
                className={clsx(classes.text, classes.textSpacingTitleContent)}
              >
                {data.summary}
              </div>
            </Slide>

            <div>
              <Slide timeout={650} direction="right" in={active}>
                <div className={classes.title}>Overview</div>
              </Slide>

              <div>
                {data.jobDescription.map((value: String[], index: any) => {
                  return (
                    <Slide
                      timeout={750 + index * 400}
                      direction="right"
                      in={active}
                    >
                      <div
                        className={classes.overviewTextContainer}
                        key={index}
                      >
                        <ArrowRightIcon style={{ paddingTop: `7px` }} />

                        <div
                          className={clsx(
                            classes.text,
                            classes.textSpacingOverviewContent
                          )}
                        >
                          {value}
                        </div>
                      </div>
                    </Slide>
                  );
                })}
              </div>
            </div>
            <ProjectDetails data={data} />
          </div>

          {data.content.map((value: items, index: any) => {
            // flip the image and the text if the index is odd
            // function isEven(index: number) {
            //   if (index % 2 == 0) return true;
            //   else return false;
            // }

            // const flip = isEven(index);
            // flexWrap: flip ? "wrap-reverse" : "nowrap",
            if (value.text) {
              return <ProjectImgText value={value} index={index} />;
            } else if (value.img != "none") {
              return <ProjectImg value={value} />;
            }
          })}

          <div className={classes.navButtons}>
            <Link href={"/"}>
              <div className={classes.navTextLeft}>
                <ArrowBackIos className={classes.root} /> Go Home
              </div>
            </Link>
            <Link href={`/projects/${data.nextProject}`}>
              <div className={classes.navTextRight}>
                {data.nextProjectTitle}
                <ArrowForwardIosIcon className={classes.root} />
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.footer}>
          © Shawn Noruzi 2020. All Rights Reserved
        </div>
      </div>
    </VizSensor>
  );
}

