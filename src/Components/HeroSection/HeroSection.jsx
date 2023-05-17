import React, { memo, useState } from "react";
import desktopImage from "../../assets/images/hero-section-desktop-image.png";
import MyButton from "../Utils/MyButton/MyButton";

const HeroSection = () => {
  const [selectedNav, setSelectedNav] = useState(0);

  const navbars = [
    {
      text: "معرفی",
      href: "#Introduction",
    },
    {
      text: "امکانات",
      href: "#tools",
    },
    {
      text: "تیم تولید کننده",
      href: "#team",
    },
  ];

  const handleNavClick = (index) => {
    setSelectedNav(index);
  };

  return (
    <section className="hero-section h-fit max-md:pb-40 md:pb-[21.875rem] w-full flex-col justify-start items-center px-4 relative">
      {/* Navbars */}
      <div className="header-navbar-container mt-12 w-full max-w-[54.375rem] flex-center py-7 px-2">
        <nav>
          <ul className="flex-center max-md:gap-8 md:gap-[6.5rem]">
            {navbars.map(({ text, href }, index) => (
              <li key={index}>
                <a onClick={() => handleNavClick(index)} className={`inline-block relative text-base duration-300 text-white ${selectedNav === index ? "font-bold navbar-after" : "font-normal"}`} href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* CTA */}
      <div className="hero-section-cta max-md:mt-8 md:mt-40 w-full max-w-[82.5rem] h-[26.75rem] flex-col items-center">
        <h1 className="px-6 py-7 font-bold max-md:text-xl md:text-[2.5rem] mt-[4.5rem] text-white h-fit rounded-md">ماژول چت پرفکس</h1>
        <p className="mt-[3.25rem] text-[#292929] max-md:text-lg md:text-2xl font-semibold text-center">
          با ماژول <strong className="text-white">” چت پرفکس ”</strong> امکان گفتگو آنلاین بین کارکنان را فراهم کنید.
        </p>
        <MyButton text="دموی محصول" href="#" white />
      </div>
      <img className="absolute bottom-0 translate-y-[50%]" src={desktopImage} alt="Screenshot of perfex chat module" />
    </section>
  );
};

export default memo(HeroSection);
