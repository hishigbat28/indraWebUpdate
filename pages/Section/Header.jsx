import React from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const handleScrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full items-center flex justify-between py-[30px]">
      <Image src="/logo.png" alt="logo" width={155} height={42} />
      <nav className="items-center text-indra-gray gap-[28px] font-[500] text-[13px] hidden lg:flex">
        <span
          className="hover:text-white cursor-pointer"
          onClick={() => handleScrollToElement("about")}
        >
          Бидний тухай
        </span>
        <span
          className="hover:text-white cursor-pointer"
          onClick={() => handleScrollToElement("projects")}
        >
          Сурагчдын бүтээл
        </span>
        <span
          className="hover:text-white cursor-pointer"
          onClick={() => handleScrollToElement("courses")}
        >
          Хөтөлбөр
        </span>
        <span
          className="hover:text-white cursor-pointer"
          onClick={() => handleScrollToElement("review")}
        >
          Сэтгэгдэл
        </span>
      </nav>
      <button
        onClick={() => document.getElementById("burtgel").showModal()}
        className="border border-[#FFE380] text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
      >
        Бүртгүүлэх
      </button>
    </div>
  );
}
