import { NavLink } from "react-router-dom"
export default function Navbar() {

    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center">
                <div className="w-[70%] flex justify-between items-center m-auto p-4">
                    <div className="w-full">
                        <h2 className="text text-3xl font-bold">TRAINING <span className="text-orange-600">STUDIO</span></h2>
                    </div>
                    <div className="w-full flex justify-between items-center font-bold text-sm">
                        <h5><NavLink to="/" >HOME</NavLink></h5>
                        <h5><NavLink to="/about" >ABOUT</NavLink></h5>
                        <h5><NavLink to="/classes" >CLASSES</NavLink></h5>
                        <h5><NavLink to="/schedules" >SCHEDULES</NavLink></h5>
                        <h5><NavLink to="/signup" >SIGN UP</NavLink></h5>
                    </div>
                </div>
            </div>
        </div>


    )
}
