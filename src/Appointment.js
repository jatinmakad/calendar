import {
  Avatar,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
// import "react-day-picker/lib/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Icon from "./jhonny.png";
const Appointment = () => {
  const [date, setData] = useState("");
  const handleDayClick = (day, { selected }) => {
    setData(selected ? undefined : day);
  };
  const today = new Date();
  const modifiers = {
    currentDay: new Date(),
    selected: date,
  };
  const modifiersStyles = {
    currentDay: {
      color: "#FF7070",
      backgroundColor: "#fff",
    },
    selected: {
      backgroundColor: "#FF7070",
      color: "#fff",
    },
  };
  const [value, onChange] = useState(new Date());
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="number">
        <div className="first">
          <div className="left">
            <div className="header">
              <img src={Icon} className="card-avatar" />
              <div className="header-inner">
                <span className="card-title">Jhonny Doe</span>
                <span className="card-subheader">Enterprenuer | CEO</span>
              </div>
            </div>
            <div className="what-to">
              <span>What to expect</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis
              </p>
            </div>
            <div className="select">
              <p className="select-text">Select Duration</p>
              <select className="select-select">
                <option>15 Mins</option>
                <option>30 Mins</option>
                <option>50 Mins</option>
              </select>
              <p className="select-price">INR 2500/hour</p>
            </div>
            <div className="date">
              <span className="date-date">9th July</span>
              <div className="date-inner">
                <Grid spacing={2} container lg={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                        name="sample"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                      />{" "}
                      <span className="checkmark"></span>
                      16:50
                    </label>
                  </Grid>
                </Grid>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="inner">
            <div className="calendar-outer">
              <DayPicker
                selectedDays={date}
                disabledDays={{ before: today }}
                onDayClick={handleDayClick}
                className="calendar-inner"
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
