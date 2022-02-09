import Radio from "./Radio"
import './App.css';
import Appointment from './Appointment';
import Demo from './Demo';
import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Test from "./Test";
import Homepage from "./HomePage";

function App() {
  return (
    <div className='App'>
       <Header/>
      <Routes>
        <Route path="/calendar" element={<Demo/>} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
     <Homepage/>
  {/* <Appointment/> */}
  {/* <Demo/> */}
  {/* <Test/> */}
    </div>
  
  );
}

export default App;
