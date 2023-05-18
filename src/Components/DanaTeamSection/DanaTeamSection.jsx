import React from "react";
import MyButton from "../Utils/MyButton/MyButton";
import backgroundShape from "../../assets/images/footer-background-shape.svg";

function DanaTeamSection() {
  return (
    <>
      <section id="team" className="w-full px-4 flex-center">
        <div className="hero-section max-md:mt-24 py-10 md:mt-56 w-full max-w-[82.5rem] rounded-custom flex-center flex-col gap-8">
          <p className="max-md:text-xl md:text-[2rem] text-white font-semibold">ساخته شده با عشـــــق توسط تیم داناتیم</p>
          <MyButton white text="دیگر محصولات" href="#" />
        </div>
      </section>
      <img className="w-full h-full" src={backgroundShape} alt="background shape" />
    </>
  );
}

export default DanaTeamSection;
