import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { jobData } from "../utils/PortfolioData";
import Modal from "./Modal";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    background: `#312783`,
    marginLeft: "150px",
    marginBottom: "40px",
    width: "1200px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    overflow: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  rightRoot: {
    background: `#312783`,
    marginLeft: "450px",
    marginBottom: "40px",
    width: "1200px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    overflow: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    boxShadow: `5px 5px #00000063`,
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #ffffff00 0%, #c496ea47 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  buttonStyles: {
    background: `linear-gradient(45deg, #f342ff, #00faff9c)`,
    paddingLeft: `24px`,
    paddingRight: `24px`,
    borderRadius: `100px`,
    fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
    "&:hover": {
      boxShadow: `0px 4px 32px rgb(56 136 252 / 61%)`,
    }
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {

  const styles = useStyles();
  const {
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <div
      id={"Portfolio"}
      style={{
        display: "flex",
        background: "rgb(165 174 236)",
        paddingTop: "20px",
      }}
    >
      <p
        style={{
          color: "white",
          height: "30px",
          fontSize: "larger",
          marginTop: `50px`,
          fontFamily: `Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif`,
          fontWeight: `400`,
          position: "absolute",
          left: `45%`,
          borderBottom: `2.5px solid #617ac1`,
        }}
      >
        Portfolio
      </p>
      <div
        style={{
          paddingTop: "20px",
          marginTop: "100px",
          marginBottom: "100px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"static/images/GitPay.PNG"}
          />
          <CardContent style={{ width: "500px" }}>
            <TextInfoContent
              style={{
                "&.heading": {
                  color: "white",
                },
              }}
              classes={contentStyles}
              overline={"2020"}
              heading={"GitPay"}
              body={
                "Collaborate, learn and receive payments by solving issues from projects"
              }
            />
            <div style={{ display: "flex", marginTop: "40px" }}>
              <Button
                style={{marginRight: '20px'}}
                className={styles.buttonStyles}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://gitpay.me/#/"
                >
                  View Site
                </a>
              </Button>
              <Modal data={jobData.gitpay} />
            </div>
          </CardContent>
        </Card>
        <Card className={cx(styles.rightRoot, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"/static/images/PlaceSpeak.png"}
          />
          <CardContent style={{ width: "500px" }}>
            <TextInfoContent
              classes={contentStyles}
              overline={"2019-2020"}
              heading={"PlaceSpeak"}
              body={
                "PlaceSpeak is a location-based community consultation platform. Claim your place. Speak your mind. Influence the outcome."
              }
            />
            <div style={{ display: "flex", marginTop: "40px" }}>
              <Button
                style={{marginRight: '20px'}}
                className={styles.buttonStyles}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.placespeak.com/en/"
                >
                  View Site
                </a>
              </Button>
              <Modal data={jobData.placespeak} />
            </div>
          </CardContent>
        </Card>

        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"/static/images/Mentor.png"}
          />
          <CardContent style={{ width: "500px" }}>
            <TextInfoContent
              style={{ color: "white" }}
              classes={contentStyles}
              overline={"2020"}
              heading={"Open Mentorship"}
              body={
                "A tinder-like mentor finding application for new programmers."
              }
            />
            <div style={{ display: "flex", marginTop: "40px" }}>
              <Button
                style={{marginRight: '20px'}}
                className={styles.buttonStyles}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="http://www.openmentorship.com/#home"
                >
                  View Site
                </a>
              </Button>
              <Modal data={jobData.mentor} />
            </div>
          </CardContent>
        </Card>
        <Card className={cx(styles.rightRoot, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"/static/images/Portfolio.PNG"}
          />
          <CardContent style={{ width: "500px" }}>
            <TextInfoContent
              style={{ color: "white" }}
              classes={contentStyles}
              overline={"2020"}
              heading={"Custom Portfolio Design"}
              body={"A Custom Portfolio with slides and animations"}
            />
            <div style={{ display: "flex", marginTop: "40px" }}>
              <Button
                style={{marginRight: '20px'}}
                className={styles.buttonStyles}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://noruzi.vercel.app/"
                >
                  View Site
                </a>
              </Button>
              <Modal data={jobData.custom} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default BlogCardDemo;
