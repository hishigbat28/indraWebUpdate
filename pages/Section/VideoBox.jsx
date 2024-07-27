"use client";
import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function VideoBox() {
  return (
    <div className="w-full rounded-[30px] overflow-hidden">
      {/* <div className="absolute inset-0 w-full h-full rounded-[30px] bg-[#cdcdcd]"></div> */}
      <video src="/projects/preview.mp4" className="w-full h-full" loop muted autoPlay></video>
    </div>
  );
}
