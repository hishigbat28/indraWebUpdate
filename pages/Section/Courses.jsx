import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      color="#fff"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Courses() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div
      id="courses"
      className="w-full pt-[80px] flex flex-col items-center gap-2"
    >
      <span
        data-aos="fade-up"
        data-aos-duration="500"
        className="border border-[#FFE380] text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500]"
      >
        Хөтөлбөр
      </span>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        className="text-[28px] md:text-[36px] lg:text-[48px] font-[600]"
      >
        Courses
      </h2>
      <div className=" w-full flex gap-8 flex-wrap md:flex-nowrap mt-10">
        <div className="w-full flex flex-col gap-[20px] radial-bg border border-[#251E31] p-4 py-[30px] sm:p-10 rounded-[30px] h-fit">
          <h3 className="text-[24px] md:text-[32px] font-[600] text-center mb-6 leading-[130%]">
            1 жилийн <br /> <span className="text-[#FFE380]">GAP</span> хөтөлбөр
          </h3>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-[4px] bg-[#0D0022]">
                  <FaCode size={18} className="text-[#FFE380]" />
                </div>
                <span className="font-semibold text-base sm:text-[20px] raleway text-white">
                  Fullstack программист
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap gap-[40px] lg:gap-[20px]">
                <div className="flex flex-col">
                  <div className="self-center flex justify-center">
                    <Image
                      src="/course/fullstack.webp"
                      alt=""
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <ul className="flex flex-col gap-[10px] text-white">
                      <li>
                        <span className="font-[600]">Хичээллэх хугацаа: </span>9
                        сар
                      </li>
                      <li>
                        <span className="font-[600]">Оролтын тоо: </span>144
                        хичээл
                      </li>
                      <li>
                        <span className="font-[600]">Нийт цаг: </span>1100+ цаг
                      </li>
                      <li className="text-[#FFE380]">
                        <span className="font-[600]">Онцлог: </span>Meta
                        Facebook, Google Certificate
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-indra-gray">
                    Алгоритмын суурь мэдлэгээс HTML, CSS, Javascript, React JS,
                    Node js, Next JS, Native, Sql, MongoDB, Sass, Tailwind,
                    Bootstrap, Version controller зэргийг сурч вэбсайт,
                    аппликейшн бүтээж чаддаг Front-End, Back-End хөгжүүлэгч,
                    UI/UX дизайнер бэлдэх сургалт.
                  </p>
                  <a
                    href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                    target="_blank"
                    className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
                  >
                    Бүртгүүлэх
                    {/* <MdKeyboardArrowRight size={18} /> */}
                  </a>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-[4px] bg-[#0D0022]">
                  <MdDesignServices size={18} className="text-[#FFE380]" />
                </div>
                <span className="font-semibold text-base sm:text-[20px] text-white">
                  2D, 3D Animator & дизайнер
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap gap-[40px] lg:gap-[20px]">
                <div className="self-center flex justify-center">
                  <Image
                    src="/course/graphic.webp"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <li>
                      <span className="font-[600]">Хичээллэх хугацаа: </span>9
                      сар
                    </li>
                    <li>
                      <span className="font-[600]">Оролтын тоо: </span>144
                      хичээл
                    </li>
                    <li>
                      <span className="font-[600]">Нийт цаг: </span>1100+ цаг
                    </li>
                    <li className="text-[#FFE380]">
                      <span className="font-[600]">Онцлог: </span>
                      Google Certificate
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-indra-gray">
                    After effect, Premiere Pro, Photoshop, MAYA, MOHO дээр 2D,
                    3D анимейшн, модель, дүр бүтээх ригг зангидах, рендэрлэх
                    бүрэн ур чадвартай, ажлын байртай ANIMATOR бэлдэх сургалт.
                  </p>
                  <a
                    href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                    target="_blank"
                    className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
                  >
                    Бүртгүүлэх
                    {/* <MdKeyboardArrowRight size={18} /> */}
                  </a>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-[4px] bg-[#0D0022]">
                  <GrWorkshop size={18} className="text-[#FFE380]" />
                </div>
                <span className="font-semibold text-base sm:text-[20px] text-white">
                  Digital marketer & дизайнер
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap gap-[40px] lg:gap-[20px]">
                <div className="self-center flex justify-center">
                  <Image
                    src="/course/digital.webp"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <li>
                      <span className="font-[600]">Хичээллэх хугацаа: </span>9
                      сар
                    </li>
                    <li>
                      <span className="font-[600]">Оролтын тоо: </span>144
                      хичээл
                    </li>
                    <li>
                      <span className="font-[600]">Нийт цаг: </span>1100+ цаг
                    </li>
                    <li className="text-[#FFE380]">
                      <span className="font-[600]">Онцлог: </span>Meta Facebook,
                      Harvard Certificate
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-indra-gray">
                    Уламжлалт маркетинг, Сошиал медиа маркетинг, Имэйл
                    маркетинг, өрсөлдөгчийн судалгаа, маркетинг анализ хийж
                    сурсан, постер, лого, brandbook, reel, бичлэг хийж чаддаг,
                    англи хэлний мэдлэгтэй, дадлагажсан, чадварлаг Дижитал
                    маркетер бэлдэх сургалт.
                  </p>
                  <a
                    href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                    target="_blank"
                    className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
                  >
                    Бүртгүүлэх
                    {/* <MdKeyboardArrowRight size={18} /> */}
                  </a>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="w-full flex flex-col gap-[20px] radial-bg border border-[#251E31] p-4 py-[30px] sm:p-10 rounded-[30px] h-fit">
          <h3 className="text-[24px] md:text-[32px] font-[600] text-center mb-6 leading-[130%]">
            Хагас жилийн <br /> <span className="text-[#FFE380]">LIGHT</span>{" "}
            хөтөлбөр
          </h3>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-[4px] bg-[#0D0022]">
                  <GrWorkshop size={18} className="text-[#FFE380]" />
                </div>
                <span className="font-semibold text-base sm:text-[20px] text-white">
                  Social media marketer & дизайнер
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap gap-[40px] lg:gap-[20px]">
                <div className="self-center flex justify-center">
                  <Image
                    src="/course/digital.webp"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <li>
                      <span className="font-[600]">Хичээллэх хугацаа: </span>6
                      сар
                    </li>
                    <li>
                      <span className="font-[600]">Оролтын тоо: </span>48 хичээл
                    </li>
                    <li>
                      <span className="font-[600]">Нийт цаг: </span>144 цаг
                    </li>
                    <li className="text-[#FFE380]">
                      <span className="font-[600]">Онцлог: </span>Meta, Harvard
                      Leadership Certificate
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-indra-gray">
                    Маркетингийн онолын мэдлэгийг бүрэн эзэмшсэн, Facebook META
                    дээр төлбөртэй сурталчилгаа явуулж, анализ хийж чаддаг
                    poster,reel,бичлэг хийх чадвартай сошиал медиа маркетер
                    бэлдэх сургалт.
                  </p>
                  <a
                    href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                    target="_blank"
                    className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
                  >
                    Бүртгүүлэх
                    {/* <MdKeyboardArrowRight size={18} /> */}
                  </a>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-[4px] bg-[#0D0022]">
                  <TbDeviceDesktopCode size={18} className="text-[#FFE380]" />
                </div>
                <span className="font-semibold text-base sm:text-[20px] text-white">
                  Front-End программист & UI/UX дизайнер
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full flex items-center lg:justify-between mt-6 flex-wrap gap-[40px] lg:gap-[20px]">
                <div className="self-center flex justify-center">
                  <Image
                    src="/course/uiux.webp"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <li>
                      <span className="font-[600]">Хичээллэх хугацаа: </span>6
                      сар
                    </li>
                    <li>
                      <span className="font-[600]">Оролтын тоо: </span>72 хичээл
                    </li>
                    <li>
                      <span className="font-[600]">Нийт цаг: </span>216 цаг
                    </li>
                    <li className="text-[#FFE380]">
                      <span className="font-[600]">Онцлог: </span>Meta Facebook,
                      Google Certificate
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-indra-gray">
                    Вэбсайт, аппликэйшны гадна харагдах загвар дизайн, өнгө
                    төрхийг HTML, CSS, JS, React JS зэрэг программын хэлүүдийг
                    ашиглан мэргэжлийн түвшинд бүтээж чаддаг Front-End
                    хөгжүүлэгч, UI/UX дизайнер бэлтгэх сургалт.
                  </p>
                  <a
                    href="https://share.hsforms.com/1Zngn6_sWShKPmdI6dtey5wq7zp1"
                    target="_blank"
                    className="border border-[#FFE380] flex text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
                  >
                    Бүртгүүлэх
                    {/* <MdKeyboardArrowRight size={18} /> */}
                  </a>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
