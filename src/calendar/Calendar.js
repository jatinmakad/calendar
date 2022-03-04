import React, { useEffect, useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Collapse from "@material-ui/core/Collapse";
import "./Calendar.css";
import "../App.css";
import { Grid } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Test from "../Test";
import "react-calendar/dist/Calendar.css";
import moment from "moment-timezone";
import { Demo } from "../Demo";
function Calendar() {
  const [allselect, setAllSelected] = useState(false);
  const [date, setData] = useState([
    {
      date: new Date(),
      id: 1,
      select: false,
      clear: false,
      time: Demo,
    },
  ]);
  const [collapse, setCollapse] = useState(0);
  const [select, setSelected] = useState(false);
  const handleDayClick = (day) => {
    const selectedDays = date.concat();
      let no = date.length + 1;
      selectedDays.push({
        date: day,
        id: no,
        select: false,
        clear: false,
        time: Demo,
      });
    setData(selectedDays);
  };

  const handleDayClick2 = (day, { selected }) => {
    let sum = date.map((r) => {
      return r.id === date.length
        ? {
            ...r,
            date: selected ? new Date() : day,
            id: date.length,
            select: false,
            clear: false,
            time: Demo,
          }
        : r;
    });
    setData(sum);
  };
  const handleExpandClick = (value) => {
    if (collapse === value) {
      setCollapse(0);
    } else {
      setCollapse(value);
    }
  };
  const today = new Date();
  const modifiers = {
    currentDay: new Date(),
    selected: date?.map((r) => r.date),
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
  const selectAll = (ind) => {
    let temp = date.map((r, index) =>
      index === ind ? r.time.map((e) => ({ ...e, isChecked: true })) : r
    );
    let updated = temp.filter((r, index) => index === ind);
    let final = date.map((r, index) =>
      index === ind ? { ...r, time: updated[0], select: true, clear: false } : r
    );
    setData(final);
  };
  const clearAll = (ind) => {
    let temp = date.map((r, index) =>
      index === ind ? r.time.map((e) => ({ ...e, isChecked: false })) : r
    );
    let updated = temp.filter((r, index) => index === ind);
    let final = date.map((r, index) =>
      index === ind ? { ...r, time: updated[0], clear: true, select: false } : r
    );
    setData(final);
  };
  const handleCheck = (event, id, index, last) => {
    let temp = date.map((r) =>
      r.id === id
        ? r.time.map((e) =>
            e.value === event.target.name
              ? { ...e, isChecked: !e.isChecked }
              : e
          )
        : r
    );
    let updated = temp.filter((r, index) => index === last);
    let final = date.map((r) =>
      r.id === id ? { ...r, time: updated[0], select: false, clear: false } : r
    );
    setData(final);
  };
  useEffect(() => {
    if (date) {
      setAllSelected(false);
    }
    if (date.length) {
      setCollapse(date.length - 1);
    }
  }, [date.length,date]);
  // useEffect(() => {
  //   const data = localStorage.getItem("Date");
  //   if (data) {
  //     let up = JSON.parse(data);
  //     let temp = up.map((r) => {
  //       return r ? { ...r, date: moment(r.date)?.tz("Asia/Calcutta")._d } : "";
  //     });
  //     setData(temp);
  //   }
  // }, []);
  const yesterday = moment().subtract(1, "day");
  const disablePastDt = (current) => {
    return current.isAfter(yesterday);
  };
  const onSubmit = () => {
    setAllSelected(true);
    // localStorage.setItem("Date", JSON.stringify(date));
    // const data = localStorage.getItem("Date");
    // let up = JSON.parse(data);
    // let temp = up.map((r) => {
    //   return r ? { ...r, date: moment(r.date)?.tz("Asia/Calcutta")._d } : "";
    // });
    // setData(temp);
  };
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
        <div style={{ flex: ".5" }} className="demo-left">
          <div className="demo-main">
            {date.map((e, ind) => {
              let day = e?.date?.toString().slice(4, 8);
              let dateNo = e?.date?.toString().slice(7, 10);
              return (
                <div className="date-format-main">
                  <div className="date-format-outer">
                    <p
                      className="date-format"
                      style={{
                        border: ind === collapse ? "" : "2px solid #FF7070",
                        background: ind === collapse ? "" : "#fff",
                        borderRadius: ind === collapse ? " " : "15px",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        className="date-format-span"
                        onClick={() => handleExpandClick(ind)}
                      >
                        {dateNo} {day}
                      </span>
                      {ind === collapse ? (
                        <p className="select-all">
                          <span
                            style={{
                              borderRight: "2px solid black",
                              paddingRight: "4px",
                              marginRight: "4px",
                              color: e.select ? "gray" : "black",
                            }}
                            onClick={() => selectAll(ind)}
                          >
                            select All
                          </span>
                          <span
                            onClick={() => clearAll(ind)}
                            style={{ color: e.clear ? "gray" : "black" }}
                          >
                            clear All
                          </span>
                        </p>
                      ) : (
                        ""
                      )}

                      {date.length >= 2 ? (
                        <KeyboardArrowDownIcon
                          onClick={() => handleExpandClick(ind)}
                          key={ind}
                          style={{
                            transform: ind === collapse ? "rotate(180deg)" : "",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </p>
                    <Collapse
                      in={ind === collapse}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div
                        className="date-inner-left date-inner-sceond"
                        key={e.date}
                      >
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
                            <Test
                              handleCheck={handleCheck}
                              id={e.id}
                              data={e?.time?.slice(0, 10)}
                              ind={ind}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                            }}
                          >
                            <Test
                              handleCheck={handleCheck}
                              id={e.id}
                              data={e?.time?.slice(10, 20)}
                              ind={ind}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </Collapse>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="update"
            disabled={allselect}
            style={{ background: !allselect ? "#FF7070" : "gray" }}
            onClick={onSubmit}
          >
            Update Calendar
          </button>
        </div>
        <div className="second second-right">
          <div className="inner demo-second">
            <button
              onClick={() => setSelected((prevCheck) => !prevCheck)}
              style={{
                borderRadius: "10px",
                background: select ? "#FF7070" : "",
                padding: "8px 40px",
                fontSize: "16px",
                color: select ? "#fff" : "",
                fontWeight: "600",
                border: select ? "none" : "",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              multiple
            </button>
            <div className="calendar-outer">
              <DayPicker
                selectedDays={date.map((r) => r.date)}
                disabledDays={{ before: today }}
                onDayClick={select === false ? handleDayClick2 : handleDayClick}
                calendarType="US"
                modifiers={modifiers}
                isValidDate={disablePastDt}
                className="calendar-inner"
                minDate={new Date()}
                modifiersStyles={modifiersStyles}
              />
            </div>
            <div className="second-bottom">
              <p>
                <span></span>Checked Available
              </p>
              <p>
                <span
                  style={{ background: "#fff", border: "1px solid black" }}
                ></span>
                current Date
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
