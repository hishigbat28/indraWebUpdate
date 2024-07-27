import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Projects() {
  return (
    <div id="projects" className="w-full pt-[80px] flex flex-col items-center">
      <span
        data-aos="fade-up"
        data-aos-duration="500"
        className="border border-[#FFE380] text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] mb-[10px]"
      >
        Сурагчдын бүтээлүүд
      </span>
      <h2 className="text-center text-[28px] md:text-[36px] lg:text-[48px] font-[600] leading-[120%] mb-10">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
          Project Showcase of
        </div>
        <span
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="500"
          className="italic newsreader font-[500] block"
        >
          Our Students
        </span>
      </h2>
      <div className="w-full relative">
        <div
          className="w-full h-full absolute z-[10] project-grid-gradient"
          style={{ pointerEvents: "none" }}
        ></div>
        <div className="w-full flex flex-col gap-4">
          <Marquee speed={20}>
            <div className="relative min-w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
              <Image
                src="/projects/dm1.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Project Image"
              />
            </div>
            <a href="https://youtu.be/O53xhoGVH2E" target="_blank">
              <div className="w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4 relative">
                <Image
                  src="/projects/sw1.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background"
                  className="absolute inset-0"
                />
                {/* You can add additional content inside the div here */}
              </div>
            </a>
            <a href="https://amraaaepf.vercel.app/" target="_blank">
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/sw2.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
            <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
              <Image
                src="/projects/gdd.webp"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
                alt="Background Image"
              />
              {/* Other content can go here */}
            </div>
            <a href="https://youtu.be/1CBL5JE1WKM" target="_blank">
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/gd5.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
          </Marquee>
          <Marquee direction="right" speed={20}>
            <a href="https://youtu.be/buvyrbQaAF0" target="_blank">
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <img
                  src="/projects/gd3.gif"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="Background Image"
                />
              </div>
            </a>
            <a
              href="https://next-portfolio-naranbaatars-projects.vercel.app/"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/sw4.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
            <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
              <img
                src="/projects/gd2.gif"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Background Image"
              />
              {/* Other content can go here */}
            </div>
            <a
              href="https://www.behance.net/gallery/187559735/raiden-shogun-digital-art"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/art4.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>

            <a
              href="https://www.behance.net/gallery/187561097/red-guitar"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/art1.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
          </Marquee>
          <Marquee speed={20}>
            <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
              <img
                src="/projects/gd1.gif"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Background Image"
              />
              {/* Other content can go here */}
            </div>
            <a
              href="https://www.behance.net/gallery/187555317/dragon-trainer"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/art3.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
            <a href="https://whisper-landing-page.vercel.app/" target="_blank">
              <div className="relative min-w-[280px] h-[180px] bg-[#cdcdcd] rounded-xl mr-4 overflow-hidden">
                <img
                  src="/projects/gd4.gif"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
            <a
              href="https://www.behance.net/gallery/188074151/angry"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/art2.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=aDuZipYwa5g"
              target="_blank"
            >
              <div className="relative w-[280px] h-[180px] bg-[#cdcdcd] overflow-hidden rounded-xl mr-4">
                <Image
                  src="/projects/gd.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  alt="Background Image"
                />
                {/* Other content can go here */}
              </div>
            </a>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
