import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    button: {
      borderRadius: `100px`,
      paddingLeft: `24px`,
      paddingRight: `24px`,
      color: `white`,
      background: `linear-gradient(45deg, #f342ff, #00faff9c)`,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",

      "&:hover": {
        boxShadow: `0px 4px 32px rgb(56 136 252 / 61%)`,
      },
      "&:active": {},
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const CustomizedDialogs = withStyles(styles)((props: any) => {
  const { classes, ...other } = props;
  const [open, setOpen] = React.useState(false);

  const images = props.data.images.map((item: object) => {
    return { original: item, thumbnail: item };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p>
           {props.data.title}
          </p>
          <p>            {props.data.catchLine}</p>
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.ImageContainer}>
            <ImageGallery items={images} />
          </div>

          <Typography gutterBottom>
            <FiberManualRecordIcon fontSize="small" />
            {props.data.role}
            {props.data.date}

            {props.data.jobDescription}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
});
export default CustomizedDialogs;
