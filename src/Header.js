import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";

function Header() {
  return (
    <div className="header-main">
      <div className="header-in">
        <div className="header-inner-main">
          <ArrowBackIosIcon />
          <h1>Appointment</h1>
        </div>
        <div className="notification">
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
