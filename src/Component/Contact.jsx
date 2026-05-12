import React, { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./Navbar";
export default function Contact() {
      useEffect(() => {
        Aos.init({duration:2000});
      }, [])
    
    return (
        <div className="w-full">
            <section className="Navbar homepageimg relative  w-full z-1 flex flex-col justify-center items-center" >
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex justify-center w-full">
                        <div className="w-full">
                            <Navbar></Navbar>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[80%] mt-[8%] z-2 p-[5%] max-[800px]:mt-[12%] max-[800px]:p-[3%] max-[600px]:mt-[18%] max-[500px]:mt-[26%]  max-[400px]:mr-5" data-aos="fade-up-right">
                        <div className="max-[600px]:w-full">
                            <h2 className="text-5xl max-[600px]:text-3xl max-[400px]:text-2xl">Contact</h2>
                        </div>
                        <div className="flex gap-[7%] max-[500px]:text-sm max-[400px]:text-xs max-[600px]:w-full">
                            <h5>Home</h5>
                            <h5>/</h5>
                            <h5>Pages</h5>
                            <h5>/</h5>
                            <h5>Contact</h5>
                        </div>
                    </div>
                </div>
            </section >
            <section className="Contactform w-full flex-col flex justify-center items-center" data-aos="fade-up-right">
                <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Have Any Query? <span className="bg-teal-100 text-teal-700 px-2 py-1">CONTACT US</span></h2>
                    <p className="text-gray-600 text-center max-w-xl mb-8">
                        The contact form is currently inactive. Get a functional and working
                        contact form with Ajax & PHP in a few minutes. Just copy and paste the
                        files, add a little code and you're done. <span className="text-teal-600 font-medium hover:underline">Download Now.</span></p>
                    <form className="w-full max-w-3xl space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        <textarea placeholder="Message" rows="5" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                        <button type="submit" className="w-full bg-teal-700 text-white font-medium py-4 rounded hover:bg-teal-800 transition">Send Message</button>
                    </form>
                </div>
            </section>
            <section className="Contact w-full flex-col flex justify-center items-center mt-[5%]" data-aos="fade-up-right">
                <div className="w-full flex justify-center items-center">
                    <section className="contactimg relative  w-full z-1 flex flex-col justify-center items-center">
                        <div className="flex w-full gap-[5%] items-center">
                            <div className=" contactimg_2 w-[40%] z-2 ">
                                <img src="https://japan.cnet.com/storage/2019/05/20/cd5aada24152e57689eff2d053f7cc71/35137174_002.jpg" alt="" className="w-full h-110 max-[1050px]:h-80  max-[800px]:h-60" />
                            </div>
                            <div className="w-[40%] z-2 flex flex-col justiy-center items-center max-[600px]:w-[90%] max-[600px]:h-30 max-[600px]:mt-3 max-[460px]:p-3">
                                <h2 className="text-4xl  max-[800px]:text-3xl max-[600px]:text-xl max-[600px]:text-start max-[600px]:w-full max-[370px]:text-sm">Subscribe the <span>Newsletter</span></h2>
                                <input type="text" placeholder=" Enter your Email" className="border-2 rounded p-2 w-full mt-[6%] max-[600px]:p-0 max-[600px]:mt-1" />
                                <h5 className="mt-[1%] max-[600px]:text-start max-[600px]:w-full max-[370px]:text-xs">Diam sed sed dolor stet amet eirmod</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <footer className=" w-full flex justify-center items-center bg-black text-white" data-aos="fade-up-right">
                <div className="w-[80%] mt-[3%] max-[700px]:w-[90%]">
                    <div className="w-full flex p-3 justify-between  max-[800px]:flex-col ">
                        <div className="w-[23%]  max-[800px]:w-full ">
                            <div className="w-full">
                                <h2 className="font-semibold text-4xl max-[800px]:text-3xl">iSTUDIO</h2>
                                <h5 className="mt-[5%] text-sm  max-[800px]:text-xs  max-[800px]:mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor</h5>
                            </div>
                        </div>
                        <div className="w-[70%] flex justify-between max-[800px]:w-full max-[800px]:mt-[5%] max-[600px]:flex-col">
                            <div className="w-[70%] max-[800px]:text-xs">
                                <h3 className="text-xl font-semibold max-[800px]:text-[16px]">Get in Touch</h3>
                                <h5 className="mt-5 max-[600px]:mt-3">123 Street, New York, USA</h5>
                                <h5 className="mt-3 max-[600px]:mt-1">+012 345 67890</h5>
                                <h5 className="mt-3 max-[600px]:mt-1">info@example.com</h5>
                                <div className="mt-3 flex gap-2 ">
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-facebook-f"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-twitter"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-instagram"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-linkedin-in"></i></button>
                                </div>
                            </div >
                            <div className="w-[40%] flex w-full justify-between">
                                <div className="max-[800px]:text-xs max-[600px]:mt-5 ">
                                    <h3 className="text-xl font-semibold max-[800px]:text-[16px]">Poopular Link</h3>
                                    <h5 className="mt-5 max-[600px]:mt-0">About Us</h5>
                                    <h5>Contact Us</h5>
                                    <h5>Privacy Policy</h5>
                                    <h5>Terms & Condition</h5>
                                    <h5>Career</h5>
                                </div>
                                <div className="max-[800px]:text-xs max-[600px]:mt-5">
                                    <h3 className="text-xl font-semibold max-[800px]:text-[16px]">Our Services</h3>
                                    <h5 className="mt-5 max-[600px]:mt-0">Interior Design</h5>
                                    <h5>Project Planning</h5>
                                    <h5>Renovation</h5>
                                    <h5>Implement</h5>
                                    <h5>Landscape Design</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="mt-[3%] text-white border-2" />
                        <div className="mt-[2%] mb-[3%] flex justify-between  max-[800px]:text-sm  max-[800px]:text-3xl flex-col max-[600px]:text-xs max-[600px]:mt-5">
                            <h5>© Your Site Name, All Right Reserved. Designed By HTML Codex. Distributed by ThemeWagon</h5>
                            <div className="flex gap-5  max-[800px]:w-full  max-[800px]:justify-between max-[800px]:mt-4">
                                <h5>Home</h5>
                                <h5>Cookies</h5>
                                <h5>Help</h5>
                                <h5>FAQs</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}



