import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import Collapse from "@material-ui/core/Collapse";
import FilterListIcon from "@material-ui/icons/FilterList";


const userDataSelect = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" },
];

function Demo() {
  const [date, setData] = useState([]);
  const [da, setDa] = useState([]);
  const [collapse, setCollapse] = useState(0);
  const [select,setSelected] = useState(false)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userDataSelect);
  }, []);
  const handleDayClick = (day, { selected }) => {
      const selectedDays = date.concat();
      if (selected) {
        const selectedIndex = selectedDays.findIndex((selectedDay) =>
          DateUtils.isSameDay(selectedDay, day)
        );
        selectedDays.splice(selectedIndex, 1);
      } else {
        selectedDays.push({ date: day });
      }
      setData(selectedDays);
    }
  const handleDayClick2 = (day,{selected}) => {
    setData("")
    setData([{date : selected ? undefined : day}])
  }
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
  console.log(date,"data")
  const today = new Date();
  const modifiers = {
    currentDay: new Date(),
    selected : date.map((r) => r.date)
  };
  const modifiersStyles = {
   currentDay: {
      color: 'black',
      border:"1px solid black",
      backgroundColor: '#fff',
    },
    selected:{
      backgroundColor:"#FF7070",
      color: "#fff",
    }
  };
  return (
    <div>
      <button onClick={() => setSelected(prevCheck => !prevCheck)} style={{borderRadius:"20px"}}>multiple</button>
      <DayPicker
      style={{backgroundColor:"red !important"}}
        selectedDays={date.map((r) => r.date)}
        disabledDays={{ before: today }}
        onDayClick={select === false ? handleDayClick2 :handleDayClick}
        mode={select === false ? "single" : "multiple"}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
      {date.map((e, ind) => {
        return (
          <div>
            <p>
              {new Date(e.date).toString()}
              {date.length >= 2 ? (
                <FilterListIcon
                  onClick={() => handleExpandClick(ind)}
                  key={ind}
                />
              ) : (
                ""
              )}
            </p>
            <Collapse in={ind === collapse} timeout="auto" unmountOnExit>
              <div key={ind}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    // checked={
                    //   users.filter((user) => user?.isChecked !== true).length < 1
                    // }
                    checked={!users.some((user) => user?.isChecked !== true)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ms-2">All Select</label>
                </div>
                {users.map((user, index) => (
                  <form className="form-check" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name={user.name}
                      checked={user?.isChecked || false}
                      onChange={handleChange}
                    />
                    <label className="form-check-label ms-2">{user.name}</label>
                  </form>
                ))}
               
              </div>
            </Collapse>
            <button onClick={() => submit(ind)}>submit</button>
          </div>
        );
      })}
      
    </div>
  );
}
export default Demo;
