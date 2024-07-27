import Image from "next/image";
import { useEffect } from "react";
import Header from "./Section/Header";
import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";
import VideoBox from "./Section/VideoBox";
import Company from "./Section/Company";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Courses from "./Section/Courses";
import Review from "./Section/Review";
import CallToAction from "./Section/CallToAction";
import Footer from "./Section/Footer";
import Popup from "./Components/Popup";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  return (
    <main className="relative xl:w-[1200px] w-full xl:mx-auto px-6" >
      <Popup/>
      <Header />
      <Navbar/>
      <Hero/>
      <VideoBox/>
      <Company/>
      <About/>
      <Projects/>
      <Courses/>
      <Review/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
