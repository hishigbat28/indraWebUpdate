"use client";
import React from "react";
import { MdSchool } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

export default function About() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div id="about" className="w-full flex flex-col pt-[80px] items-center">
      <span
        data-aos="fade-up"
        data-aos-duration="500"
        className="border border-[#FFE380] text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] mb-[10px]"
      >
        Бидний тухай
      </span>
      <div className="text-[28px] md:text-[36px] lg:text-[48px] font-[600] mb-[56px] leading-[130%]">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="text-center"
        >
          Empowering Learners
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="500"
          className="italic newsreader font-[500] text-center"
        >
          Through Indra
        </h2>
      </div>

      <div className="w-full flex gap-[28px] lg:gap-[56px] xl:items-center mb-[30px] xl:flex-row flex-col">
        <div className="relative w-full xl:min-w-[400px] xl:h-[240px] rounded-[30px] overflow-hidden">
          <Image
            src="/team.jpg"
            alt="team"
            fill
            style={{ objectFit: "cover" }}
            className="object-cover"
          />
        </div>

        <div className="text-indra-gray text-[20px] md:text-[28px] lg:text-[36px] font-[500] leading-[120%]">
          Бид
          <span className="text-[#FFE380]">
            дэлхийд хүлээн зөвшөөрөгдсөн олон улсын хөтөлбөрөөр
          </span>
          чадварлаг шинэ залуу үеийг бэлтгэсээр байна.
        </div>
      </div>
      <div className="w-full radial-bg border border-[#251E31] rounded-[30px] p-8 sm:p-10 flex gap-10 flex-col mt-[30px] items-center">
        <div className="flex flex-col">
          <h3 className="text-[26px] font-[600] mb-[10px] leading-[120%] text-center">
            Түгээмэл асуулт, <br className="sm:hidden" /> хариулт
          </h3>
        </div>
        <div className="w-full flex flex-col gap-3">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-[4px] bg-[#11002E]">
                  <MdSchool size={18} className="text-[#FFE380]" />
                </div>
                <span className="text-white text-base sm:text-[20px]">
                  Тэтгэлгээр сурч болох уу?
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[14px] sm:text-base text-white ml-14		">
                &#34;Director&#39;s Scholarship&#34;-Жил бүр мэргэжил тус бүрээс
                1,1 шилдэг оюутанд олгогддог Захирлын нэрэмжит тэтгэлэг.
              </p>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                &ldquo;Academic Achievement Scholarship&rdquo;- IELTS, HSK,
                TOPIC, TOEFL-ын дундаас дээш түвшний оноотой оюутанд олгогддог
                Ур чадварын тэтгэлэг.
              </p>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                &ldquo;Competition Achievement Scholarship&rdquo;-Мэдээлэл зүй,
                зураг технологи, математикийн дүүрэг болон улсын олимпиадын
                медальтай оюутанд олгогддог Уралдаан тэмцээний амжилтын
                тэтгэлэг.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-[4px] bg-[#11002E]">
                  <FaChartLine size={18} className="text-[#FFE380]" />
                </div>
                <span className="text-white text-base sm:text-[20px]">
                  Элсэлтийн шалгуур?
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                GAP-бүрэн дунд боловсролын гэрчилгээ.
              </p>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                ЭЕШ-ын оноо шаардахгүй.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-[4px] bg-[#11002E]">
                  <FaWandMagicSparkles size={18} className="text-[#FFE380]" />
                </div>
                <span className="text-white text-base sm:text-[20px]">
                  Онлайн анги байгаа юу?
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[14px] sm:text-base text-white ml-14">
                Манайх 100% онол, практик хосолсон танхимын сургалттай.
                Хүндэтгэх шалтгаантай оюутнуудад хичээлийг нөхөж ордог.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-[4px] bg-[#11002E]">
                  <FaWandMagicSparkles size={18} className="text-[#FFE380]" />
                </div>
                <span className="text-white text-base sm:text-[20px]">
                  Диплом олгодог уу?
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                Дэлхийн 120 гаруй улсад хүлээн зөвшөөрөгдсөн GOOGLE, META,
                HARVARD-ын хосолсон сертификат.
              </p>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                Индра кибер институтийн мэргэжлийн диплом олгогдоно.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-[4px] bg-[#11002E]">
                  <FaWandMagicSparkles size={18} className="text-[#FFE380]" />
                </div>
                <span className="text-white text-base sm:text-[20px]">
                  Багш нарын ур чадвар?
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-[14px] sm:text-base text-white mt-3.5 ml-14">
                Хичээлийг Улсын болон Хувийн их дээд сургуулиудад мэргэжлээрээ
                суралцаж төгссөн, 3-с дээш жил ажилласан туршлагатай, олон төсөл
                хөтөлбөрүүдийг амжилттай хэрэгжүүлсэн мэргэжлийн багш нар ордог.
              </p>
            </AccordionBody>
          </Accordion>
        </div>
      </div>

      {/* <div className="w-full bg-[#11002E] rounded-[30px] p-10 flex gap-10 md:flex-row flex-col">
        <div className="flex flex-col">
          <h3 className="text-[26px] font-[600] mb-[10px] leading-[120%]">
            Бид хэрхэн ажилдаг вэ?
          </h3>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="collapse collapse-arrow bg-indra-bg rounded-[8px]">
            <input type="radio" name="my-accordion-2" defaultChecked />

            <div className="collapse-title font-medium flex items-center gap-4">
              <div className="p-3 rounded-[4px] bg-[#11002E]">
                <MdSchool size={18} className="text-[#FFE380]" />
              </div>
              <span>Сургалтын систем</span>
            </div>
            <div className="collapse-content">
              <p>
                Олон жилийн туршлагатай, чадварлаг багш, ажилчдын тусламжтайгаар
                олон улсын стандартад нийцсэн, шинэлэг сургалтын хөтөлбөрийг
                богино хугацаанд олгодог.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-indra-bg rounded-[8px]">
            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title font-medium flex items-center gap-4">
              <div className="p-3 rounded-[4px] bg-[#11002E]">
                <FaChartLine size={18} className="text-[#FFE380]" />
              </div>
              <span>Карьерын өсөлт</span>
            </div>
            <div className="collapse-content">
              <p>
                Орчин үетэйгээ хөл нийлүүлсэн, шинэлэг мэдээ мэдээлэлээр
                оюутнуудыг цаг тухайд нь хангаж, ирээдүйн карьерийг дэмжин
                ажилдаг.о
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-indra-bg rounded-[8px]">
            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title font-medium flex items-center gap-4">
              <div className="p-3 rounded-[4px] bg-[#11002E]">
                <FaWandMagicSparkles size={18} className="text-[#FFE380]" />
              </div>
              <span>Чөлөөт сэтгэлгээ</span>
            </div>
            <div className="collapse-content">
              <p>
                Хэнээс ч санаа зоволгүй үзэл бодлоо чөлөөтэй илэрхийлж, багаар
                ажиллах ур чадварыг суулгах нээлттэй орон зайг суралцагч бүрт
                гаргаж өгдөг.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
