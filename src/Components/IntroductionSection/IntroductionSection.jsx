import React from "react";
import SectionTitle from "../Utils/SectionTitle/SectionTitle";
import MyButton from "../Utils/MyButton/MyButton"

function IntroductionSection() {
  return (
    <section id="Introduction" className="mt-48 md:mt-72 lg:mt-[23.5rem] w-full px-4 pb-10 flex-col items-center md:gap-14 max-md:gap-8">
      <SectionTitle title="ماژول گفتگو آنلاین اسکریپت پرفکس" />
      <p className="text-base max-w-[54.5rem] text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      <MyButton />
    </section>
  );
}

export default IntroductionSection;
