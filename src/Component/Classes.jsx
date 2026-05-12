import React, { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "./Navbar";
import { Autoplay } from "swiper/modules";
export default function Services() {
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
                            <h2 className="text-5xl max-[600px]:text-3xl max-[400px]:text-2xl">Services</h2>
                        </div>
                        <div className="flex gap-[7%] max-[500px]:text-sm max-[400px]:text-xs max-[600px]:w-full">
                            <h5>Home</h5>
                            <h5>/</h5>
                            <h5>Pages</h5>
                            <h5>/</h5>
                            <h5>Services</h5>
                        </div>
                    </div>
                </div>
            </section >
            <section className="Services w-full flex-col flex justify-center items-center mt-[8%]" data-aos="fade-up-right">
                <div className="w-full flex justify-center items-center">
                    <div className="service w-[80%] flex justify-between items-center text-black max-[700px]:w-[90%]">
                        <div className="w-[40%] max-[1050px]:w-full">
                            <h2 className="text-4xl max-[800px]:text-2xl max-[600px]:text-xl">Our Creative <span className="bg-teal-100 text-teal-800 p-1">SERVICES</span></h2>
                            <h5 className="mt-[12%] max-[1050px]:mt-[5%] max-[800px]:text-sm max-[600px]:text-xs">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</h5>
                            <h5 className="mt-[3%] max-[800px]:text-sm max-[600px]:text-xs">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</h5>
                            <div className="flex items-center mt-[12%] text-white gap-5 bg-teal-800 p-3 max-[1050px]:mt-[4%]">
                                <h5 className="text-2xl p-3 max-[600px]:text-xl max-[340px]:text-sm"><i class="fa-solid fa-phone"></i></h5>
                                <div className="border-l-4 pl-5">
                                    <h5 className="text-2xl max-[600px]:text-xl max-[340px]:text-sm">+0123456789</h5>
                                    <h5 className="max-[600px]:text-sm max-[340px]:text-xs">Call us direct 24/7 for get a free consultation</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-[55%] flex flex-wrap max-[1050px]:w-full max-[1050px]:mt-[3%] max-[600px]:w-full max-[600px]:flex-col">
                            <div className="bg-teal-800 p-[4%] text-white w-[50%] hover:bg-neutral-300 hover:text-black max-[600px]:w-full">
                                <div className="servicesimg1 w-70 h-45 max-[800px]:w-65 max-[600px]:w-full">
                                    <h4 className="bg-teal-800 text-xl w-fit p-2 hover:bg-neutral-300 max-[600px]:text-sm">Interior Design</h4>
                                </div>
                                <h5 className="mt-[8%] max-[600px]:text-xs">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem</h5>
                            </div>
                            <div className="bg-neutral-300 p-[4%] text-black w-[50%] hover:bg-teal-800 hover:text-white max-[600px]:w-full">
                                <div className="servicesimg1 w-70 h-45 max-[800px]:w-65 max-[600px]:w-full">
                                    <h4 className="bg-neutral-300 text-xl w-fit p-2 hover:bg-teal-800 max-[600px]:text-sm">Implement</h4>
                                </div>
                                <h5 className="mt-[8%] max-[600px]:text-xs">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem</h5>
                            </div>
                            <div className="bg-neutral-300 p-[4%] text-black w-[50%] hover:bg-teal-800 hover:text-white max-[600px]:w-full">
                                <div className="servicesimg1 w-70 h-45 max-[800px]:w-65 max-[600px]:w-full">
                                    <h4 className="bg-neutral-300 text-xl w-fit p-2 hover:bg-teal-800 max-[600px]:text-sm">Renovation</h4>
                                </div>
                                <h5 className="mt-[8%] max-[600px]:text-xs">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem</h5>
                            </div>
                            <div className="bg-teal-800 p-[4%] text-white w-[50%] hover:bg-neutral-300 hover:text-black max-[600px]:w-full">
                                <div className="servicesimg1 w-70 h-45 max-[800px]:w-65 max-[600px]:w-full">
                                    <h4 className="bg-teal-800 text-xl w-fit p-2 hover:bg-neutral-300 max-[600px]:text-sm">Commercial</h4>
                                </div>
                                <h5 className="mt-[8%] max-[600px]:text-xs">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Review w-full flex-col flex justify-center items-center mt-[5%]" data-aos="fade-up-right">
                <div className="flex w-[80%] justify-between items-center  max-[700px]:w-[90%] ">
                    <Swiper
                        freeMode={true}
                        loop={true}
                        rewind={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper w-full">
                        <SwiperSlide>
                            <div className="w-full flex justify-center gap-[5%] items-center flex max-[500px]:flex-col">
                                <div className="review_img w-[35%] border-teal-700 border-l-90 border-t-40 border-b-40 max-[1050px]:w-[45%] max-[800px]:w-[55%] max-[800px]:border-l-50 max-[500px]:w-[90%] max-[350px]:border-0"><img src="https://external-preview.redd.it/iKeuRZ2OHeqhodqBSoeZFCDHaakxbYRHzGUWvmoWK0E.jpg?width=640&crop=smart&auto=webp&s=914a6da1a4e1a3d99453fadfe345a42f6d6eb4cf" alt="" className="w-full h-60" /></div>
                                <div className="about_review w-[45%] max-[800px]:w-[40%]  max-[500px]:w-full max-[500px]:mt-3">
                                    <h2 className="text-3xl max-[800px]:text-2x max-[400px]:text-xl">Sustainable Material</h2>
                                    <h5 className="mt-[4%] w-full max-[800px]:text-sm max-[400px]:text-xs">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.</h5>
                                    <h4 className="mt-[4%] text-xl text-teal-700">- Boris Johnson</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex justify-center gap-[5%] items-center flex max-[500px]:flex-col">
                                <div className="review_img w-[35%] border-teal-700 border-l-90 border-t-40 border-b-40 max-[1050px]:w-[45%] max-[800px]:w-[55%] max-[800px]:border-l-50  max-[500px]:w-[90%] max-[350px]:border-0"><img src="https://tala.co.ke/wp-content/uploads/sites/2/2020/07/KE-blog-header.png?w=854" alt="" className="w-full h-60" /></div>
                                <div className="w-[45%] max-[800px]:w-[40%]  max-[500px]:w-full max-[500px]:mt-3">
                                    <h2 className="text-3xl max-[800px]:text-2xl max-[400px]:text-xl">Budget Freinndly</h2>
                                    <h5 className="mt-[4%] w-full max-[800px]:text-sm max-[400px]:text-xs">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.</h5>
                                    <h4 className="mt-[4%] text-xl text-teal-700">- Bradley Gordon</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex justify-center gap-[5%] items-center flex max-[500px]:flex-col">
                                <div className="review_img w-[35%] border-teal-700 border-l-90 border-t-40 border-b-40 max-[1050px]:w-[45%] max-[800px]:w-[55%] max-[800px]:border-l-50  max-[500px]:w-[90%] max-[350px]:border-0"><img src="https://s1.1zoom.me/big0/769/Italy_Motorboat_Brown_haired_Formal_shirt_Glance_577684_1280x800.jpg" alt="" className="w-full h-60" /></div>
                                <div className="w-[45%] max-[800px]:w-[40%]  max-[500px]:w-full max-[500px]:mt-3">
                                    <h2 className="text-3xl max-[800px]:text-2xl max-[400px]:text-xl">Customer Satisfaction</h2>
                                    <h5 className="mt-[4%] w-full max-[800px]:text-sm max-[400px]:text-xs">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.</h5>
                                    <h4 className="mt-[4%] text-xl text-teal-700">- Alexander Bell</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
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