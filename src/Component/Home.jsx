import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "./Navbar";
import HOC from "./HOC";
import { Autoplay } from "swiper/modules";
import Aos from "aos";
import 'aos/dist/aos.css'
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="w-full m-auto">
      <section className="homepage w-full flex flex-col justify-center items-center">
        <video autoPlay loop muted className="back_video w-full">
          <source src="/videogym.mp4" />
        </video>
        <div className="    w-full flex flex-col items-center h-screen text-white" style={{background:"rgb(0,0,255,0.2)"}}>
          <div className="flex  justify-center items-center w-full">
            <div className="flex justify-center w-full">
              <Navbar></Navbar>
            </div>
          </div>
          <div className="herobanner flex flex-col justify-center items-center w-full h-full">
            <h5 className="text text-xl font-bold">WORK HARDER , GET STRONGER</h5>
            <h3 className="text text-7xl font-bold mt-[3%]">EASY WITH OUR <span className="text-orange-600">GYM</span></h3>
            <button className="bg-orange-600 p-3 mt-[3%] rounded">BECOME A MEMBER</button>
          </div>
        </div>
      </section>
      <section className="About w-full flex justify-center items-center mt-[5%]">
        <div className="w-[75%] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center ">
            <h4 className="text text-3xl">CHOOSE <span className="text-orange-600">PROGRAM</span></h4>
            <h5 className="text text-4xl text-orange-600 mt-[1%]"><i class="fa-solid fa-water"></i></h5>
            <h5 className="w-[50%] text-center mt-[1%]">Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</h5>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center ">
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">Basic Fitness</h4>
                <h5 className="text-sm my-2">Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">Advanced Muscle Course</h4>
                <h5 className="text-sm my-2">You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">New Gym Training</h4>
                <h5 className="text-sm my-2">If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">Yoga Training</h4>
                <h5 className="text-sm my-2">This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">Basic Muscle Course</h4>
                <h5 className="text-sm my-2">Credit goes to Pexels website for images and video background used in this HTML template.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
            <div className="w-[45%] flex justify-between items-center mt-[6%]">
              <div className="w-[30%] text-5xl p-[6%] w-fit bg-orange-600 rounded text-white">
                <h3 className="rotate-135"><i class="fa-solid fa-dumbbell"></i></h3>
              </div>
              <div className="w-[69%]">
                <h4 className="font-bold text-xl">Body Building Course</h4>
                <h5 className="text-sm my-2">Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</h5>
                <button className="text-sm font-semibold text-orange-500">DISCOVER MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="addmembers w-full flex justify-center items-center mt-[5%]">
        <div className="bg-blue-900 relative opacity-[50%] w-full flex justify-center items-center">
          <div className="w-[70%] flex flex-col justify-center items-center text-white p-[8%]">
            <h3 className="text text-4xl">DON'T <span className="text-orange-600">THINK</span> , BEGIN <span className="text-orange-600">TODAY</span> !</h3>
            <h5 className="text-center mt-[2%]">Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</h5>
            <button className="bg-orange-600 p-3 mt-[3%] rounded">BECOME A MEMBER</button>
          </div>
        </div>
      </section>
      <section className="classes w-full flex justify-center items-center mt-[8%]">
        <div className="w-[75%] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center ">
            <h4 className="text text-3xl">OUR <span className="text-orange-600">CLASSES</span></h4>
            <h5 className="text text-4xl text-orange-600 mt-[1%]"><i class="fa-solid fa-water"></i></h5>
            <h5 className="w-[50%] text-center mt-[1%]">Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</h5>
          </div>
          <div className="w-full flex justify-between mt-[6%]">
            <div className="w-[30%] flex flex-col">
              <div className="w-full flex justify-center items-center gap-[10%] p-[9%] rounded-md bg-neutral-50 inset-shadow-sm shadow-lg">
                <h5 className="rotate-135 text-3xl"><i class="fa-solid fa-dumbbell"></i></h5>
                <h5 className="text-xl font-semibold">First Traininng  Class</h5>
              </div>
              <div className="w-full flex justify-center items-center gap-[10%] p-[9%] mt-[9%] rounded-md bg-neutral-50 inset-shadow-sm shadow-lg">
                <h5 className="rotate-135 text-3xl"><i class="fa-solid fa-dumbbell"></i></h5>
                <h5 className="text-xl font-semibold">Second Traininng  Class</h5>
              </div>
              <div className="w-full flex justify-center items-center gap-[10%] p-[9%] mt-[9%] rounded-md bg-neutral-50 inset-shadow-sm shadow-lg">
                <h5 className="rotate-135 text-3xl"><i class="fa-solid fa-dumbbell"></i></h5>
                <h5 className="text-xl font-semibold">Third Traininng  Class</h5>
              </div>
              <div className="w-full flex justify-center items-center gap-[10%] p-[9%] mt-[9%] rounded-md bg-neutral-50 inset-shadow-sm shadow-lg">
                <h5 className="rotate-135 text-3xl"><i class="fa-solid fa-dumbbell"></i></h5>
                <h5 className="text-xl font-semibold">Fourth Traininng  Class</h5>
              </div>
              <button className="bg-orange-600 p-3 mt-[9%] text-white text-md font-semibold rounded">View All Schedules</button>
            </div>
            <div className="w-[60%]">
              <div className="w-full">
                <img src="https://www.myprotein.ie/images?url=https://blogscdn.thehut.net/app/uploads/sites/511/2023/02/hardgainer-1-min_1607419093_1692977153.jpg&auto=avif&width=582&height=327&fit=crop" alt="" className="w-full h-75 rounded-xl" />
              </div>
              <h4 className="text-xl font-bold mt-[3%]">First Training Class</h4>
              <h5 className="mt-[3%]">Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</h5>
              <button className="bg-orange-600 p-3 mt-[5%] text-white text-md font-semibold rounded">View All Schedules</button>
            </div>
          </div>
        </div>
      </section>
      <section className="schedules w-full flex justify-center items-center mt-[8%]">
        <div className="w-[75%] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center ">
            <h4 className="text text-3xl">CLASSES <span className="text-orange-600">SCHEDULES</span></h4>
            <h5 className="text text-4xl text-orange-600 mt-[1%]"><i class="fa-solid fa-water"></i></h5>
            <h5 className="w-[50%] text-center mt-[1%]">Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</h5>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-center mt-[6%] font-semibold">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-center gap-[3%] items-center ">
                <h5>Monday</h5>
                <h5>/</h5>
                <h5>Tuesday</h5>
                <h5>/</h5>
                <h5>wednesday</h5>
                <h5>/</h5>
                <h5>Thursday</h5>
                <h5>/</h5>
                <h5>Friday</h5>
              </div>
              <div className="w-full mt-[4%]">
                <table className="w-full">
                  <tbody className="border">
                    <tr className="flex items-center">
                      <td className="w-[25%] h-20 border flex justify-center items-center">Fitness Class</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">10:00AM - 11:30AM</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">William G. Stewart</td>
                    </tr>
                    <tr className="flex items-center">
                      <td className="w-[25%] h-20 border flex justify-center items-center">Muscle Training</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">Paul D. Newman</td>
                    </tr>
                    <tr className="flex items-center">
                      <td className="w-[25%] h-20 border flex justify-center items-center">Body Building</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">2:00PM - 3:30PM</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">Boyd C. Harris</td>
                    </tr>
                    <tr className="flex items-center">
                      <td className="w-[25%] h-20 border flex justify-center items-center">Yoga Training Class</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">Hector T. Daigle</td>
                    </tr>
                    <tr className="flex items-center">
                      <td className="w-[25%] h-20 border flex justify-center items-center">Advanced Training</td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center"></td>
                      <td className="w-[25%] h-20 border flex justify-center items-center">Bret D. Bowers</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section className="schedules w-full flex justify-center items-center mt-[8%]">
        <div className="w-[75%] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center ">
            <h4 className="text text-3xl">EXPERT <span className="text-orange-600">TRAINERS</span></h4>
            <h5 className="text text-4xl text-orange-600 mt-[1%]"><i class="fa-solid fa-water"></i></h5>
            <h5 className="w-[50%] text-center mt-[1%]">Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</h5>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-center mt-[6%] font-semibold">
            
          
          </div>
        </div>
      </section>
      
    </div>

  )
}

export default HOC(Home);