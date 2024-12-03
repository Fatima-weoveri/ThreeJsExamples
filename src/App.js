import { Route, BrowserRouter, Routes } from "react-router-dom";
import Car from "./pages/Car";
import Earth from "./pages/Earth";
import Home from "./pages/Home/Home";
import "./App.css";
import Sample from "./pages/Sample/Sample";
import Sun from "./pages/Sun/Sun";
import Mountains from "./pages/Mountains/Mountains";
import Planets from "./pages/Planets/Planets";
import Circle from "./pages/Circle/Circle";
import Kurdistan from "./pages/KurdistanMap/Kurdistan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/car" element={<Car />} />
        <Route path="/kurdistan" element={<Kurdistan />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/sun" element={<Sun />} />
        <Route path="/mountains" element={<Mountains />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/circle" element={<Circle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
