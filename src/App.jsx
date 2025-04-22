import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Screen1 from './Components/Screen1.jsx'
import Screen2 from './Components/Screen2.jsx'
import Screen3 from './Components/Screen3.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Sidebar from './Components/Sidebar.jsx'
function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App

// import React, { useState,useEffect } from 'react';
// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [start, setStart] = useState(false);
//   useEffect(() => {
//     let interval = null;

//     if (start) {
//       interval = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [start]);
//  const hello1 = () =>{
//     setStart(false);
//   }
//   return (
//     <>
//     <button onClick = {hello1}>start {seconds}</button>
//     <button>stop</button>
//     </>
//   )
// }
// export default App;
