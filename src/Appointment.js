import {
  Avatar,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
// import "react-day-picker/lib/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Icon from "./jhonny.png";
import DialogBox from "./Dialog";
const data = [
  {
    value: "1500",
  },
  {
    value: "3000",
  },
  {
    value: "6000",
  },
];
const time = [
  {
    value: "08:00",
  },
  {
    value: "09:00",
  },
  {
    value: "09:30",
  },
  {
    value: "10:00",
  },
  {
    value: "11:00",
  },
  {
    value: "11:30",
  },
  {
    value: "12:00",
  },
];
const time2 = [
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
const Appointment = () => {
  const [date, setData] = useState(new Date());
  const [option, setOption] = useState("0");
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleDayClick = (day, { selected }) => {
    setData(selected ? undefined : day);
  };
  const submit = () => {
    setValue("");
  };
  let day = date?.toString().slice(4, 8);
  let dateNo = date?.toString().slice(7, 10);
  let condition =
    date?.toString().slice(4, 10) === new Date()?.toString().slice(4, 10);
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
  console.log(date);
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
              <select
                className="select-select"
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="0">15 Mins</option>
                <option value="1">30 Mins</option>
                <option value="2">50 Mins</option>
              </select>
              <p className="select-price">INR {data[option].value}/hour</p>
            </div>
            <div className="date">
              {date ? (
                <span className="date-date">
                  {" "}
                  {dateNo}
                  <span style={{ marginLeft: "5px" }}>{day}</span>
                </span>
              ) : (
                <span className="date-date">Today</span>
              )}
              {condition || date === undefined ? (
                <>
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
                        <FormControl>
                          <RadioGroup value={value} onChange={handleChange}>
                            {time.map((r) => {
                              return (
                                <FormControlLabel
                                  className="radio-outer"
                                  value={r.value}
                                  control={<Radio />}
                                  label={
                                    <Typography className="radio-label">
                                      {r.value}
                                    </Typography>
                                  }
                                />
                              );
                            })}
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <FormControl>
                          <RadioGroup value={value} onChange={handleChange}>
                            {time2.map((r) => {
                              return (
                                <FormControlLabel
                                  className="radio-outer"
                                  value={r.value}
                                  control={<Radio />}
                                  label={
                                    <Typography className="radio-label">
                                      {r.value}
                                    </Typography>
                                  }
                                />
                              );
                            })}
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <button type="submit" onClick={submit}>
                    Book Now
                  </button>{" "}
                </>
              ) : (
                <>
                  <p className="available">Not Available</p>
                  <DialogBox dateNo={dateNo} day={day} />
                </>
              )}
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
