import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";
import Home from './Component/Home'
import About from "./Component/About";
import Classes from "./Component/Classes"
import Schedules from "./Component/Shedules"
import Contact from './Component/Contact'
import Error from "./Component/Error";
import './App.css'
import Navbar from "./Component/Navbar";
export default function App() {

    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/classes" element={<Classes />}></Route>
                <Route path="/schedules" element={<Schedules />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/*" element={<Error />}></Route>=
            </Routes>
        </div>
    )
}
