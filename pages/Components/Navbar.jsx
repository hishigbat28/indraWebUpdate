import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false);
    }
  };

  return (
    <div
      className={`duration-500 rounded-full flex items-center gap-2 fixed bottom-6 left-1/2 transform -translate-x-1/2 lg:pl-6 p-2 bg-[#1a1a1a] border-2 border-[#363636] z-[100] ${
        showNavBar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`lg:hidden dropdown ${
          dropdownOpen ? "dropdown-open" : ""
        } dropdown-top`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div
          tabIndex={0}
          role="button"
          className="p-[10px] rounded-full border border-white"
        >
          <HiMenu />
        </div>
        <ul
          tabIndex={0}
          className={`dropdown-content ml-[-10px] mb-4 z-[1] menu p-2 shadow rounded-[30px] bg-[#1a1a1a] border-2 border-[#363636] w-[285px] ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <span
              onClick={() => {
                handleScrollToElement("about");
                setDropdownOpen(false);
              }}
            >
              Бидний тухай
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleScrollToElement("projects");
                setDropdownOpen(false);
              }}
            >
              Сурагчдын бүтээл
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleScrollToElement("courses");
                setDropdownOpen(false);
              }}
            >
              Хөтөлбөр
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleScrollToElement("review");
                setDropdownOpen(false);
              }}
            >
              Сэтгэгдэл
            </span>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:flex gap-7 text-[13px] text-indra-gray mr-3">
        <li>
          <span
            className="cursor-pointer text-nowrap hover:text-white"
            onClick={() => {
              handleScrollToElement("about");
              setDropdownOpen(false);
            }}
          >
            Бидний тухай
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer text-nowrap hover:text-white"
            onClick={() => {
              handleScrollToElement("projects");
              setDropdownOpen(false);
            }}
          >
            Сурагчдын бүтээл
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer text-nowrap hover:text-white"
            onClick={() => {
              handleScrollToElement("courses");
              setDropdownOpen(false);
            }}
          >
            Хөтөлбөр
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer text-nowrap hover:text-white"
            onClick={() => {
              handleScrollToElement("review");
              setDropdownOpen(false);
            }}
          >
            Сэтгэгдэл
          </span>
        </li>
      </ul>
      <a
        href="https://m.me/463946697439334"
        target="_blank"
        className="active:bg-[#303030] active:text-[#4a4a4a] active:border-[#303030] duration-300 rounded-full border border-white hover:bg-white hover:text-[#1a1a1a] text-[13px] font-[600] px-[20px] py-[10px]"
      >
        Зөвлөгөө
      </a>
      <button
        onClick={() => document.getElementById("burtgel").showModal()}
        className="border border-[#FFE380] text-[#FFE380] py-2 px-4 rounded-full w-fit text-[13px] font-[500] hover:bg-[#FFE380] hover:text-[#000]"
      >
        Бүртгүүлэх
      </button>
    </div>
  );
}
