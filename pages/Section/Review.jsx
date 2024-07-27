"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
  return (
    <div id="review" className="w-full pt-[80px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[10px]">
        <Image
          data-aos="fade-up"
          data-aos-duration="500"
          src={"/logo-icon.png"}
          alt="logo"
          width={64}
          height={64}
        />
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="text-[28px] md:text-[36px] lg:text-[48px] text-center font-[600]"
        >
          Оюутнуудын сэтгэгдэл
        </h2>
      </div>
      <div className="w-full mt-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            // 1024: { slidesPerView: 3 },
            // 1440: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ type: "bullets", clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/tuvshintulga.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Түвшинтулга</span>
                  <span className="text-indra-gray text-[14px]">
                    SW24 Оюутан
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Сургалт эхэлсэнээс хойш технологийн талын мэдлэг ойлголт эрс
                өөрчлөгдсөн. Анги хамт олон маань яг л нэг гэр бүл шиг халуун
                дотно уур амьсгалтай.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default  h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/anhbayr.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Анхбаяр</span>
                  <span className="text-indra-gray text-[14px]">
                    SW24 Оюутан
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Бусад сургалтууд цагийн хуваарь нь шахуу, хөтөлбөрүүдээр шахсан
                байсан. Индра институтын хувьд хичээл тарсан ч чөлөөтэй анги,
                танхимдаа үлдээд хичээлээ хийх боломжтой байдаг.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default  h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/anand.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Ананд</span>
                  <span className="text-indra-gray text-[14px]">
                    SW23 Оюутан
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Анх юу ч мэддэггүй багшийн заасан зүйлийг шат шатаар хийж
                сурдаг байсан. Тэгээд саяхан нэг анкет бөглөх гээд сурсан,
                мэдсэн зүйл юу байна гэсэн чинь бараг 16 ширхэг шинэ зүйл сурсан
                байсан. Тэдгээрийн тал нь бараг шинэ программын хэлнүүд байсан.
                ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/enhjin.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Энхжин</span>
                  <span className="text-indra-gray text-[14px]">
                    SW926 Төгсөгч
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Суралцаж төгсөөд Facebook-ийн толгой компани Meta-ийн олон
                улсад хүлээн зөвшөөрөгдсөн сертификатыг олгодог нь их
                таалагдсан. Энэ нь надад freelancer болох мөрөөдлөө биелүүлэхэд
                минь том ахиц болж өгсөн. ”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/goomaral.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Гоомарал</span>
                  <span className="text-indra-gray text-[14px]">
                    DM23 Төгсөгч
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Маркетинг гэдгийг сурталчилгаа хийх л гэж ойлгодог байсан би
                чадварлаг багш, хичээл бүрийн тэмдэглэлээ уйгагүй хөтөлж,
                давтсан хичээл зүтгэлийнхээ ачаар дөнгөж өнөөдөрхөн META-ийн
                олон улсад хүлээн зөвшөөрөгдсөн Дижитал маркетерын сертификатаа
                авсандаа туйлын их баяртай байна.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0D0022] rounded-[20px] border border-[#18003E] p-[30px] flex flex-col gap-[30px] cursor-default h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                  <Image
                    src="/review/aminhuu.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    alt="Avatar Image"
                  />
                  {/* Other content can go here */}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px]">Аминхүү</span>
                  <span className="text-indra-gray text-[14px]">
                    DM23 Төгсөгч
                  </span>
                </div>
              </div>
              <p className="text-indra-gray font-medium">
                “Нэг өдөр facebook-ээ ухаж байгаад ганцхан жилийн хугацаанд
                Дижитал маркетер, график дизайнер хосолсон хөтөлбөрөөр сургана
                гэсэн зараар Индра институт-д суралцаад одоо хүссэн газраасаа
                ажлаа хийгээд л сардаа 3-4 сая төгрөгийн цалин олж байна.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
