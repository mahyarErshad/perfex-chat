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
    </section>
  );
}

export default HeroSection;
