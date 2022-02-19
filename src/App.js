import './App.css';
import Appointment from './Appointment/Appointment';
import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./HomePage";
import Calendar from "./calendar/Calendar";
import Demo from './Demo';

function App() {
  return (
    <div className='App'>
       <Header/>
      <Routes>
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
     <Homepage/>
     {/* <Demo/> */}
    </div>
  
  );
}

export default App;
