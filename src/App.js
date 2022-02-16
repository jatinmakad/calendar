import './App.css';
import Appointment from './Appointment/Appointment';
import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./HomePage";
import Calendar from "./calendar/Calendar";

function App() {
  return (
    <div className='App'>
       <Header/>
      <Routes>
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
     <Homepage/>
    </div>
  
  );
}

export default App;
