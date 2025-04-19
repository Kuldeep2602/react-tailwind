import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Screen1 from './Components/Screen1.jsx'
import Screen2 from './Components/Screen2.jsx'
function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
