import React, { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./Navbar";
export default function About() {
      useEffect(() => {
        Aos.init({duration:2000});
      }, [])
    return (
        <div className="w-full">
            <section className="Navbar homepageimg relative  w-full z-1 flex flex-col justify-center items-center " >
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex justify-center w-full">
                        <div className="w-full">
                            <Navbar></Navbar>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[80%] mt-[8%] z-2 p-[5%] max-[800px]:mt-[12%] max-[800px]:p-[3%] max-[600px]:mt-[18%] max-[500px]:mt-[26%] max-[400px]:mr-5" data-aos="fade-up-right">
                        <div className="max-[600px]:w-full">
                            <h2 className="text-5xl max-[600px]:text-3xl max-[400px]:text-2xl">About</h2>
                        </div>
                        <div className="flex gap-[7%] max-[500px]:text-sm max-[400px]:text-xs max-[600px]:w-full">
                            <h5>Home</h5>
                            <h5>/</h5>
                            <h5>Pages</h5>
                            <h5>/</h5>
                            <h5>About</h5>
                        </div>
                    </div>
                </div>
            </section >
            <section className="History w-full flex-col flex justify-center items-center mt-[5%]" data-aos="fade-up-right">
                <div className="flex w-[80%] flex-col justify-center items-center max-[700px]:w-[90%]">
                    <div className="flex w-full justify-between max-[600px]:flex-col max-[600px]:justify-center">
                        <div className="w-[50%] flex justify-between gap-[5%] max-[600px]:w-full max-[600px]:justify-center">
                            <div className="aboutimage1 w-[600px] h-120">
                            </div>
                            <div className="aboutimage2 w-[600px] h-120 text-white text-xl max-[600px]:w-[300px] max-[600px]:h-100">
                                <h5 className="text-center bg-teal-700 pt-[4%] ">Award Winning</h5>
                                <h5 className="text-center bg-teal-700 pb-[4%]">Studio Since 1990</h5>
                            </div>
                        </div>
                        <div className="w-[45%] flex flex-col max-[600px]:w-full max-[600px]:mt-8">
                            <h2 className="text-4xl max-[800px]:text-2xl max-[600px]:text-xl"><span className="text-teal-700 bg-teal-100 p-1">HISTORY</span> of Our Creation</h2>
                            <h5 className="mt-[6%] max-[800px]:text-sm max-[600px]:text-xs">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</h5>
                            <h5 className="mt-[6%] max-[800px]:text-sm max-[600px]:text-xs">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</h5>
                            <div className="mt-[6%] flex justify-between w-full max-[800px]:text-sm max-[800px]:gap-5">
                                <div>
                                    <h5><span className="text-xl text-teal-700">✔</span> Award Winning</h5>
                                    <h5 className="mt-2"><span className="text-xl text-teal-700">✔</span> Professional Staff</h5>
                                </div>
                                <div>
                                    <h5><span className="text-xl text-teal-700">✔</span> 24/7 Support</h5>
                                    <h5 className="mt-2"><span className="text-xl text-teal-700">✔</span> Fair Prices</h5>
                                </div>
                            </div>
                            <div className="media_1 mt-[6%] flex gap-5">
                                <button className="border-2  p-2 pl-3 pr-3 bg-teal-700 text-white">Read More</button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-facebook-f"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-twitter"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-instagram"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-linkedin-in"></i></button>
                            </div>
                            <div className="media_2 mt-[6%] flex gap-5 max-[800px]:text-sm max-[600px]:text-xs">
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-facebook-f"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-twitter"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-instagram"></i></button>
                                <button className="border-2  p-2 pl-2 pr-2 text-teal-700"><i class="fa-brands fa-linkedin-in"></i></button>
                                <button className="border-2  p-2 pl-3 pr-3 bg-teal-700 text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Designers w-full flex-col flex justify-center items-center mt-[5%]" data-aos="fade-up-right">
                <div className="w-full flex justify-center items-center">
                    <div className="w-[80%] flex flex-col max-[700px]:w-full">
                        <div className="flex flex-col text-start">
                            <h2 className="text-3xl  max-[800px]:text-2xl  max-[800px]:ml-5 max-[700px]:ml-10 max-[600px]:text-xl max-[600px]:underline">Our Professional <span className="bg-white text-teal-800 p-1">DESIGNERS</span></h2>
                        </div>
                        <div className="mt-[2%] flex justify-between text-white max-[1050px]:flex-wrap max-[1050px]:justify-evenly ">
                            <div className="designerimg1 relative grid content-end w-70 h-80 pb-3 pl-5 hover:scale-[110%] hover:ease-linear hover:duration-400 max-[1050px]:mt-[3%]">
                                <h5 className="bg-teal-700 w-fit p-2 z-1">Architect</h5>
                                <h3 className="text-xl mt-[2%] z-1">Boris Johnson</h3>
                                <div className="mt-[1%] flex gap-2 z-1 ">
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-facebook-f"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-twitter"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-instagram"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-linkedin-in"></i></button>
                                </div>
                            </div>
                            <div className="designerimg2 relative grid content-end w-70 h-80 pb-3 pl-5 hover:scale-[110%] hover:ease-linear hover:duration-400 max-[1050px]:mt-[3%]">
                                <h5 className="bg-teal-700 w-fit p-2 z-1">Architect</h5>
                                <h3 className="text-xl mt-[2%] z-1">Donald Pakura</h3>
                                <div className="mt-[1%] flex gap-2 z-1 ">
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-facebook-f"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-twitter"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-instagram"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-linkedin-in"></i></button>
                                </div>
                            </div>
                            <div className="designerimg3 relative grid content-end w-70 h-80 pb-3 pl-5 hover:scale-[110%] hover:ease-linear hover:duration-400 max-[1050px]:mt-[3%]">
                                <h5 className="bg-teal-700 w-fit p-2 z-1">Architect</h5>
                                <h3 className="text-xl mt-[2%] z-1">Bradley Gordon</h3>
                                <div className="mt-[1%] flex gap-2 z-1">
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-facebook-f"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-twitter"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-instagram"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-linkedin-in"></i></button>
                                </div>
                            </div>
                            <div className="designerimg4 relative grid content-end w-70 h-80 pb-3 pl-5 hover:scale-[110%] hover:ease-linear hover:duration-400 max-[1050px]:mt-[3%]">
                                <h5 className="bg-teal-700 w-fit p-2 z-1">Architect</h5>
                                <h3 className="text-xl mt-[2%] z-1">Alexander Bell</h3>
                                <div className="mt-[1%] flex gap-2 z-1">
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-facebook-f"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-twitter"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-instagram"></i></button>
                                    <button className="border-2 p-1 pl-2 pr-2 text-teal-700 text-sm"><i class="fa-brands fa-linkedin-in"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
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