import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./App.css";
const Radio = ({onChange,value,selected,text}) => {
  return (
    <div
      className="modern-radio-container"
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="helper-text">{text}</div>
    </div>
  );
};
export default Radio
