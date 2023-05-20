import React from "react";
import SectionTitle from "../Utils/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as LayerIcon } from "../../assets/images/tabs-layer-icon.svg";
import image1 from "../../assets/images/tabpanel-images/switch.png";
import image2 from "../../assets/images/tabpanel-images/chat.png";

function ToolsSection() {
  const tabs = ["سوئیچ پوسته", "امکان چت", "ایجاد گروه", "ارسال اطلاعیه", "پاپ آپ", "تاگل چت", "اعمال دسترسی", "تاریخچه  فایل ها"];
  return (
    <section id="tools" className="max-md:mt-24 md:mt-[10.625rem] w-full px-4">
      <SectionTitle title="امکانات ماژول چت اسکریپت پرفکس" />
      <Tabs className="flex max-lg:flex-col justify-center gap-6 mt-14">
        <div className="flex-col gap-8 lg:max-w-[33.5rem] flex-shrink-0">
          <TabList className="grid grid-1 max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 grid-tabs-gap">
            {tabs.map((tab, index) => {
              return (
                <Tab key={index}>
                  <LayerIcon stroke="#242424" />
                  <h3 className="text-inherit">{tab}</h3>
                </Tab>
              );
            })}
          </TabList>
        </div>
        <div className="min-w-2/4 h-full flex-shrink">
          {tabs.map((_, index) => {
            return (
              <TabPanel key={index}>
                <img src={image} alt="Screenshot of Perfex chat module" />
              </TabPanel>
            );
          })}
        </div>
      </Tabs>
    </section>
  );
}

export default ToolsSection;
