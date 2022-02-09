import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Homepage = () => {
return <>
      <Link to="/calendar"><p>calendar</p></Link>
      <Link to="/appointment"> <p>Appointment</p></Link></>
}
export default Homepage