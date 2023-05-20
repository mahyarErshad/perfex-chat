import React from "react";
import SectionTitle from "../Utils/SectionTitle/SectionTitle";
import MyButton from "../Utils/MyButton/MyButton";

function IntroductionSection() {
  return (
    <section id="Introduction" className="mt-48 md:mt-72 lg:mt-[23.5rem] w-full px-4 pt-10 flex-col items-center md:gap-14 max-md:gap-8">
      <SectionTitle title="ماژول گفتگو آنلاین اسکریپت پرفکس" />
      <p className="text-base font-medium max-w-[54.5rem] text-center mt-6">اگر مایل هستید در محیط پرفکس خیلی سریع با کارکنان و مشتریان خود گفتگو کنید،فایل های پروژه برای آنها ارسال نمایید و درخواست های مشتریان خود را به وظیفه تبدیل کنید،ماژول گفتگو آنلاین پرفکس نیازمندی های ارتباطی شما را برطرف می کند. ماژول چت اسکریپت پرفکس، یک ماژول گفتگو آنلاین می باشد که می توان از آن برای ارتباط بین همکاران ،کارکنان و مشتریان استفاده کرد. این ماژول به دلیل استفاده ازRequest های Web sockets دارای سرعت بالاتری نسبت به HTTP است(HTTP باعث کند شدن سرعت سرورمی شود).ماژول چت به طور ویژه برای کارمندان و مشتریان Perfex CRM توسعه یافته است تا بتوانند با یکدیگر ارتباط برقرار کرده و گفتگو آنلاین داشته باشند. ماژول چت پرفکس شامل ویژگی‌هایی مانند پشتیبانی از چت چندگانه، نمایش وضعیت آنلاین/آفلاین کاربران، ارسال پیام خودکار برای کاربران آفلاین، پشتیبانی از تماشای آنلاین ویدئو ، نمایش پیام‌های ناموفق، ارسال فایل‌ها و ... می‌باشد. همچنین این ماژول امکاناتی مانند نمایش پیام‌های جدید در پنل مدیریت، نمایش پیام‌های خوانده‌نشده، نمایش لیست کاربران آنلاین و آفلاین و گزارش‌گیری را نیز فراهم می‌کند. با استفاده از این ماژول، کسب‌وکارها می‌توانند ارتباط بهتری با مشتریان خود برقرار کنند و تجربه کاربری بهتری را برای آن‌ها فراهم کنند.</p>
      <MyButton text="خرید ماژول" href="https://www.zhaket.com/web/chat-module-perfex-crm-script" />
    </section>
  );
}

export default IntroductionSection;
