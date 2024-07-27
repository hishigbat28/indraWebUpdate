import React from "react";

export default function CallToAction() {
  return (
    <div
      className="relative w-full my-[80px] rounded-[30px] py-[60px] px-[30px]"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2779948/pexels-photo-2779948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
      <div className="flex flex-col items-center mx-auto relative z-10">
        <h3 className="text-[28px] md:text-[36px] font-[600] text-center mb-3 leading-[120%]">
          Ready to <br className="sm:hidden" />{" "}
          <span className="newsreader italic font-[500]">grow</span> with us?
        </h3>
        <p className="text-indra-gray font-[600] sm:text-base text-[14px]">
          Бидний нэг болоход бэлэн үү?
        </p>
        <span
          onClick={() => document.getElementById("burtgel").showModal()}
          className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[14px] font-[500] mt-[36px] hover:bg-[#FFE380] hover:text-[#000]"
        >
          Бүртгүүлэх
        </span>
      </div>
    </div>
  );
}
