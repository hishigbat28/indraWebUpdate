import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  const handleScrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-[80px] flex flex-col items-center">
      <div className="flex items-center gap-2 pl-[14px] pr-[10px] py-[6px] border border-white rounded-full w-fit mb-7">
        <FaRegDotCircle className="animate-pulse" />
        <span
          className="text-[14px] font-[500] text-center cursor-pointer"
          onClick={() => handleScrollToElement("courses")}
        >
          Элсэлтийн бүртгэл явагдаж байна{" "}
          <span className="hidden md:inline">| Хөтөлбөр сонгох</span>
        </span>
        <MdOutlineKeyboardArrowRight size={18} className="mt-[1px]" />
      </div>
      <h1 className="text-[36px] md:text-[48px] lg:text-[64px] text-center leading-[110%] font-[600] mb-4">
        <span className="block">We will help you</span> to build your{" "}
        <span className="italic newsreader font-[500]">future</span>
      </h1>
      <p className="text-indra-gray mb-[52px] text-center">
        Программист, График Дизайнер, Дижитал Маркетер, Аниматор мэргэжлүүдээр
        ОУ-н жишиг хөтөлбөрөөр суралц.
      </p>
      <div className="flex gap-4 flex-wrap-reverse justify-center">
        <span
          onClick={() => handleScrollToElement("courses")}
          className="active:bg-[#303030] active:text-[#4a4a4a] cursor-pointer hover:bg-[#d0af3a] hover:text-white duration-300 text-[14px] md:text-base px-6 py-[14px] md:px-8 md:py-[18px] rounded-full bg-white text-indra-bg font-[700]"
        >
          Хөтөлбөртэй танилцах
        </span>
        <span
          onClick={() => handleScrollToElement("footer")}
          className="active:bg-[#303030] active:text-[#4a4a4a] cursor-pointer active:border-[#303030] hover:bg-white hover:text-indra-bg duration-300 text-[14px] md:text-base px-6 py-[14px] md:px-8 md:py-[18px] rounded-full border border-white font-[700]"
        >
          Бидэнтэй Холбогдох
        </span>
      </div>
    </div>
  );
}
