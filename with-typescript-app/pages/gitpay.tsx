import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PagesNavbar from "../components/pagesNavbar";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function portfolioPage(props: any) {
  const classes = useStyles();
    console.log("props in gitpay", props)
  return (
    <div>
      <PagesNavbar />
    </div>
  );
}
