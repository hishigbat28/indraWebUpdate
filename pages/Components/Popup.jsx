import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Popup() {
  return (
    <dialog id="burtgel" className="modal">
      <div className="modal-box w-fit bg-[#1d232a]">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Бүртгэл</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="duration-300 hover:bg-white hover:text-[#1d232a] py-2 pl-4 pr-3 rounded-full border w-fit border-white flex items-center gap-2">
            <a
              href="https://m.me/463946697439334"
              target="_blank"
              className="font-[500]"
            >
              Зөвлөгөө авахад бүртгүүлэх
            </a>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="duration-300 hover:bg-white hover:text-[#1d232a] py-2 pl-4 pr-3 rounded-full border w-fit border-white flex items-center gap-2">
            <a
              href="https://share.hsforms.com/1YQc-6f8qRju4Ax0lNPLDMAq7zp1"
              target="_blank"
              className="font-[500]"
            >
              6 сарын LITE хөтөлбөр
            </a>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="duration-300 hover:bg-white hover:text-[#1d232a] py-2 pl-4 pr-3 rounded-full border w-fit border-white flex items-center gap-2">
            <a
              href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
              target="_blank"
              className="font-[500]"
            >
              1 жилийн GAP хөтөлбөр
            </a>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </dialog>
  );
}
