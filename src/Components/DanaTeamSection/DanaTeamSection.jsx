import React from "react";
import MyButton from "../Utils/MyButton/MyButton";
import { ReactComponent as EmptyHeart } from "../../assets/images/shapes/empty-heart.svg";

function DanaTeamSection() {
  return (
    <>
      <section id="team" className="w-full px-4 flex-center">
        <div className="hero-section relative max-md:mt-24 py-10 md:mt-56 w-full max-w-[82.5rem] rounded-custom flex-center flex-col gap-8">
          <p className="max-md:text-xl md:text-[2rem] text-white font-semibold">ساخته شده با عشـــــق توسط تیم داناتیم</p>
          <MyButton white text="دیگر محصولات" href="#" />
        </div>
      </section>
      <div className="w-full h-full max-h-[23.9375rem] footer-background mt-[7rem]"></div>
    </>
  );
}

export default DanaTeamSection;
