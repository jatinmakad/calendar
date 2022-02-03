import * as React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "./App.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const time = [
  {
    value: "13:00",
  },
  {
    value: "14:00",
  },
  {
    value: "15:30",
  },
  {
    value: "16:00",
  },
  {
    value: "17:00",
  },
  {
    value: "18:30",
  },
  {
    value: "19:00",
  },
];
export default function DialogBox({ dateNo, day }) {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Request a Session
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <p className="header-text">Request a Session</p>
        <DialogContent>
          <Typography gutterBottom className="header-inner-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis
          </Typography>
          <div className="dialog-content">
            <p className="dialog-time">
              Date :{" "}
              <span style={{ fontWeight: "600" }}>
                {dateNo} {day} 2021
              </span>
            </p>
            <div className="dialog-second">
              <p>Time :</p>
              <select onChange={(e) => setOption(e.target.value)}>
                {time.map((r) => {
                  return <option>{r.value}</option>;
                })}
              </select>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus className="submit-btn" onClick={handleClose}>
            Request a Seassion
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
