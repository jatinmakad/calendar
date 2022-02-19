import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import Collapse from "@material-ui/core/Collapse";
import FilterListIcon from "@material-ui/icons/FilterList";
import Checkbox from "@material-ui/icons/CheckBox";
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
import moment from "moment";
import Test from "./Test";
const Demo = () => {
    const [date, setData] = useState([
        {
            date: new Date(),
            id: 1,
            time: [
                {
                    value: "08:00",
                    isChecked: true,
                },
                {
                    value: "09:00",
                    isChecked: true,
                },
                {
                    value: "09:30",
                    isChecked: true,
                },
                {
                    value: "10:00",
                    isChecked: true,
                },
                {
                    value: "11:00",
                    isChecked: true,
                },
                {
                    value: "11:30",
                    isChecked: true,
                },
                {
                    value: "12:00",
                    isChecked: true,
                },
                {
                    value: "13:00",
                    isChecked: true,
                },
                {
                    value: "14:00",
                    isChecked: true,
                },
                {
                    value: "15:30",
                    isChecked: true,
                },
                {
                    value: "16:00",
                    isChecked: true,
                },
                {
                    value: "17:00",
                    isChecked: true,
                },
                {
                    value: "18:30",
                    isChecked: true,
                },
                {
                    value: "19:00",
                    isChecked: true,
                },
            ],
        },
        {
            date: new Date(),
            id: 2,
            time: [
                {
                    value: "08:00",
                    isChecked: true,
                },
                {
                    value: "09:00",
                    isChecked: true,
                },
                {
                    value: "09:30",
                    isChecked: true,
                },
                {
                    value: "10:00",
                    isChecked: true,
                },
                {
                    value: "11:00",
                    isChecked: true,
                },
                {
                    value: "11:30",
                    isChecked: true,
                },
                {
                    value: "12:00",
                    isChecked: true,
                },
                {
                    value: "13:00",
                    isChecked: true,
                },
                {
                    value: "14:00",
                    isChecked: true,
                },
                {
                    value: "15:30",
                    isChecked: true,
                },
                {
                    value: "16:00",
                    isChecked: true,
                },
                {
                    value: "17:00",
                    isChecked: true,
                },
                {
                    value: "18:30",
                    isChecked: true,
                },
                {
                    value: "19:00",
                    isChecked: true,
                },
            ],
        },
        {
            date: new Date(),
            id: 3,
            time: [
                {
                    value: "08:00",
                    isChecked: true,
                },
                {
                    value: "09:00",
                    isChecked: true,
                },
                {
                    value: "09:30",
                    isChecked: true,
                },
                {
                    value: "10:00",
                    isChecked: true,
                },
                {
                    value: "11:00",
                    isChecked: true,
                },
                {
                    value: "11:30",
                    isChecked: true,
                },
                {
                    value: "12:00",
                    isChecked: true,
                },
                {
                    value: "13:00",
                    isChecked: true,
                },
                {
                    value: "14:00",
                    isChecked: true,
                },
                {
                    value: "15:30",
                    isChecked: true,
                },
                {
                    value: "16:00",
                    isChecked: true,
                },
                {
                    value: "17:00",
                    isChecked: true,
                },
                {
                    value: "18:30",
                    isChecked: true,
                },
                {
                    value: "19:00",
                    isChecked: true,
                },
            ],
        },
    ]);
    // console.log(date,"=========")
    const handleCheck = (event,id,index) => {
// console.log(event.target.checked,id,index)
        // let temp=  date.map((r) =>
        //   r.id === id
        //     ? {...r,[]}
        //     : r
        // );
        // console.log(temp)
    //    console.log(temp)
    // r.time.map((e) => (e.value === event ? { ...e, isChecked: true } : e))
    //    setData(temp)
    };
    return (
        <div>
            {date.map((r) => {
                return (
                    <>
                        <p>{r.id}</p>
                        <Test handleCheck={handleCheck} data={r.time} id={r.id}/>
                    </>
                );
            })}
        </div>
    );
};

export default Demo;
