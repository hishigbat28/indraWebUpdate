import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full flex flex-col gap-8 rounded-tr-[40px] rounded-tl-[40px] p-[40px] pb-[100px] bg-[#0D0022]"
    >
      <div className="w-full flex justify-between flex-wrap">
        <div className="flex flex-col gap-8 mb-10">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={155} height={42} />
          </Link>
          <a
            href="https://maps.app.goo.gl/z81DEz1CTJ3C3gBn6"
            target="_blank"
            className="text-indra-gray text-[14px]"
          >
            ЧД дүүрэг, 4-р хороо, <br />
            Барилгачдын талбайн зүүн хойд
          </a>
        </div>
        <div className="flex gap-[48px] flex-wrap mb-10">
          <ul className="flex flex-col gap-[10px]">
            <li className="text-white font-[600] mb-[14px]">Хөтөлбөрүүд</li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a
                href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                target="_blank"
              >
                Fullstack Developer
              </a>
            </li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a
                href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                target="_blank"
              >
                Graphic Designer + Animator
              </a>
            </li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a
                href="https://share.hsforms.com/1YQc-6f8qRju4Ax0lNPLDMAq7zp1"
                target="_blank"
              >
                Digital Marketer + Graphic Designer
              </a>
            </li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a
                href="https://share.hsforms.com/1YQc-6f8qRju4Ax0lNPLDMAq7zp1"
                target="_blank"
              >
                Frontend Developer + UI/UX Designer
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-white font-[600] mb-[14px]">Үйлчилгээ</li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a href="https://m.me/463946697439334" target="_blank">
                Ганцаарчилсан зөвлөгөө
              </a>
            </li>
            <li className="cursor-pointer hover:text-white text-indra-gray text-[13px]">
              <a href="https://m.me/463946697439334" target="_blank">
                Танилцуулга өдөрлөг
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <span className="font-[600]">Холбоо барих:</span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-[12px] items-center">
              <FaPhoneAlt />
              <span className="text-indra-gray text-[14px] cursor-pointer hover:text-white">
                (+976) 72773030
              </span>
            </div>
            <div className="flex gap-[12px] items-center">
              <IoIosMail size={20} />
              <a
                href="mailto:indra@amjilt.com"
                className="text-indra-gray text-[14px] hover:text-white"
              >
                indra@amjilt.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/indra.cyber.institute"
              target="_blank"
            >
              <Image src={"/facebook.png"} width={32} height={32} />
            </a>

            <a
              href="https://www.instagram.com/indra_cyber_institute/"
              target="_blank"
            >
              <Image src={"/instagram.png"} width={32} height={32} />
            </a>
            <a
              href="https://www.youtube.com/@IndraCyberInstitute"
              target="_blank"
            >
              <Image src={"/youtube.png"} width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
      <span className="text-indra-gray text-[13px]">
        © 2019 - 2024 IndraCyber Institute • Бүх эрх хуулиар хамгаалагдсан
      </span>
    </div>
  );
}
