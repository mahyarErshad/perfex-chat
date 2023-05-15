import React, { useState } from "react";

function HeroSection() {
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
  return (
    <section className="hero-section h-screen w-full flex-col justify-start items-center px-4">
      {/* Navbars */}
      <div className="header-navbar-container mt-12 w-full max-w-[54.375rem] flex-center py-7">
        <nav>
          <ul className="flex-center gap-[6.5rem]">
            {navbars.map(({ text, href }, index) => {
              return (
                <li key={index}>
                  <a onClick={() => setSelectedNav(index)} className={`inline-block relative text-base duration-300 text-white ${selectedNav === index ? "font-bold navbar-after" : "font-normal"}`} href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* CTA */}
      <div className="hero-section-cta max-md:mt-8 md:mt-40 w-full max-w-[82.5rem] h-[26.75rem] flex-col items-center">
        <h1 className="px-6 py-7 font-bold max-md:text-xl md:text-[2.5rem] mt-[4.5rem] text-white h-fit rounded-md">ماژول چت پرفکس</h1>
        <p className="mt-[3.25rem] text-[#292929] max-md:text-lg md:text-2xl font-semibold text-center">
          با ماژول <strong className="text-white">” چت پرفکس ”</strong> امکان گفتگو آنلاین بین کارکنان را فراهم کنید.
        </p>
        <div className="button-wrapper relative">
          <a href="#aa" target="_blank" className="shadow-md mt-[3.4375rem] bg-white py-3 px-12 text-xl font-semibold text-primary flex-center rounded-3xl hover:opacity-90 duration-300">
            دموی محصول
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
