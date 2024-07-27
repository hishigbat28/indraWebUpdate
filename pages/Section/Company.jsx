import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Company() {
  return (
    <div className="w-full flex flex-col gap-8 py-[80px]">
      <p className="text-indra-gray text-center">
        Төгсөгчдийн ажилд орсон байгууллагууд
      </p>
      <div className="w-full relative">
        <div className="w-full h-full absolute z-[10] project-grid-gradient"></div>
        <Marquee speed={40}>
          <div className="mr-12">
            <Image
              src="/companies/amjilt-erp.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>

          <div className="mr-12">
            <Image
              src="/companies/tsonjin-cyber.png"
              alt="logo"
              width={200}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/xacbank.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/unitel.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/mobicom.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/amjilt-lms.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/golomt.png"
              alt="logo"
              width={140}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/xaanbank.png"
              alt="logo"
              width={140}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/hipay.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/xpro.png"
              alt="logo"
              width={100}
              height={32}
            />
          </div>
          <div className="mr-12">
            <Image
              src="/companies/timely.png"
              alt="logo"
              width={120}
              height={32}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
