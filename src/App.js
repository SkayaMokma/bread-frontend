import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navbar"
import Home from "./Components/Home";
import Bread from "./Components/Bread";
import New from "./Components/New";
import UpdateBread from "./Components/UpdateBread";
import Game from "./Components/Game"
import MemoryMatch from "./Components/Games/MemoryMatch/MemoryMatch"

function App() {
  return (

    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bread/:id" element={<Bread />} />
          <Route path="/bread/update/:id" element={<UpdateBread />} />
          <Route path="/new" element={<New />} />
          {/* 
          Add routes for separate game pages  */}
          <Route path="/game" element={<Game />} />
          <Route path="/memory-match" element={<MemoryMatch />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;