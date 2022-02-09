import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import Collapse from "@material-ui/core/Collapse";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./Demo.css";
import Checkbox from "@material-ui/icons/CheckBox";
import "./App.css";
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Test from "./Test";
function Demo() {
  const [date, setData] = useState([{ date: new Date(), id: 1 }]);
  const [da, setDa] = useState([]);
  const [collapse, setCollapse] = useState(0);
  const [select, setSelected] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // setUsers(userDataSelect);
  }, []);
  const handleDayClick = (day, { selected }) => {
    //  console.log(day,selected,"=====")
    const selectedDays = date.concat();
    if (selected) {
      // let updated = date.filter((e) => e.id !==   )
      // setData(updated)
      // console.log(updated,"=============")
      // const selectedIndex = selectedDays.findIndex((selectedDay) =>
      //   DateUtils.isSameDay(selectedDay, day)
      // );
      // selectedDays.splice(selectedIndex, 1);
    } else {
      let no = date.length + 1;
      selectedDays.push({ date: day, id: no });
    }
    setData(selectedDays);
  };
  const handleDayClick2 = (day, { selected }) => {
    setData("");
    setData([{ date: selected ? new Date() : day }]);
  };
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  const handleExpandClick = (value) => {
    if (collapse === value) {
      setCollapse("");
    } else {
      setCollapse(value);
    }
  };
  const submit = (i) => {
    let news = date.map((r, index) =>
      index === i ? { ...date[i], value: users } : r
    );
    setData(news);
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
  const [checked, setChecked] = useState([]);
  const selectAll = () => {
    console.log();
    setChecked(
      time.map((r) => r.value)
    );
  };
  const clearAll = () => {
    setChecked([]);
  };
  const handleCheck = (event,time,no) => {
    // date.map((r) => r.date === time ? setData((r) => [...r,[event]]) : r)
    // setData((r) => r.map((e) => e.date === time ? {...r,event} : e))
  // date.map((r) => r.date == time ? setChecked((prev) => [...prev,event]) : r)
    // setChecked(date.map((r) => r.date == time ? (prev) => [...prev,event] : r))
    setChecked((prev) =>
      prev.includes(event) ? prev.filter((r) => r !== event) : [...prev, event]
    );
  };
  // console.log(date,"=================")
  const [ss,setSs] = useState([]);
  const cK =(e,r) => {
    // setSs(e)
  }
  
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
                    }}
                  >
                    <span className="date-format-span">
                      {dateNo} {day}
                    </span>
                    {ind === collapse ? (
                      <p className="select-all">
                        <span
                          style={{
                            borderRight: "2px solid black",
                            paddingRight: "4px",
                            marginRight: "4px",
                          }}
                          onClick={selectAll}
                        >
                          select All
                        </span>
                        <span onClick={clearAll}>clear All</span>
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
                  <Collapse in={ind === collapse} timeout="auto" unmountOnExit>
                    <div className="date-inner-left date-inner-sceond">
                      <Grid spacing={2} container lg={12}>
                        <Grid
                          item
                          xs={6}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                          onClick={() => cK(ind,collapse)}
                        >
                          <Test
                            handleCheck={handleCheck}
                            checked={checked}
                            time={e.date}
                            no={dateNo}
                            data={time.slice(0, 7)}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Test
                            handleCheck={handleCheck}
                            checked={checked}
                            time={e.date}
                            no={dateNo}
                            data={time.slice(7, 14)}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Collapse>
                </div>
              </div>
            );
          })}
          <button className="update">Update Calendar</button>
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
                mode={select === false ? "single" : "multiple"}
                modifiers={modifiers}
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
export default Demo;

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
