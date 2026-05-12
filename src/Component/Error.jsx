import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./Navbar";
export default function Error() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="w-full">
            <section className="Navbar homepageimg relative w-full z-1 flex flex-col justify-center items-center " data-aos="fade-up-right">
                <div className="flex justify-between items-center w-[80%] z-2 p-[5%] max-[400px]:mr-5 max-[500px]:w-[90%]">
                    <div className="max-[600px]:w-full">
                        <h2 className="text-5xl max-[600px]:text-3xl max-[400px]:text-2xl">404 Error</h2>
                    </div>
                    <div className="flex gap-[7%] max-[500px]:text-sm max-[400px]:text-xs max-[600px]:w-full">
                        <h5>Home</h5>
                        <h5>/</h5>
                        <h5>Pages</h5>
                        <h5>/</h5>
                        <h5>404</h5>
                    </div>
                </div>
            </section >
            <section className="w-full flex flex-col justify-center items-center mt-[3%] max-[500px]:mt-15">
                <h2 className="text-5xl"><i class="fa-solid fa-triangle-exclamation"></i></h2>
                <h2 className="text-5xl mt-[1%] max-[900px]:mt-3 max-[500px]:text-4xl">404</h2>
                <h3 className="text-4xl mt-[1%] max-[900px]:mt-4 max-[500px]:text-3xl">Page Not Found</h3>
                <h5 className="w-[40%] text-center mt-[1%] max-[900px]:w-[70%] max-[500px]:text-sm max-[500px]:mt-3 max-[400px]:w-[90%]">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</h5>
                <button className="mt-[3%] bg-teal-700 p-3 text-white max-[500px]:mt-8"><NavLink to="/" >Go Back To Home</NavLink></button>
            </section>
        </div>
    )
}