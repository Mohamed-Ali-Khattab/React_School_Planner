import React from "react";

import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles/";
import Controls from "../Controls/Controls";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: "2rem",
    position: "absolute",
    top: "5rem",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseOutlinedIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
