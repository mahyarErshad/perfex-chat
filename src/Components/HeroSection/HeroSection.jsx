import React from "react";

function HeroSection() {
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
    <section className="hero-section h-screen w-full flex-col justify-start items-center">
      <div className="mt-12 w-full max-w-[54.375rem] flex-center py-7">
        <nav>
          <ul className="flex-center gap-[6.5rem]"></ul>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
