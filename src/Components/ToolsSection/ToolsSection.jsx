import React from "react";
import SectionTitle from "../Utils/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function ToolsSection() {
  return (
    <section className="max-md:mt-24 md:mt-[10.625rem] w-full px-4">
      <SectionTitle title="امکانات ماژول چت اسکریپت پرفکس" />
      <Tabs className="flex justify-center gap-6 mt-14">
        <div className="flex-col gap-8 lg:max-w-[33.5rem]">
          <p className="text-base font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
          <TabList className="grid lg:grid-cols-2 grid-tabs-gap">
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
            <Tab>Title 4</Tab>
            <Tab>Title 5</Tab>
            <Tab>Title 6</Tab>
          </TabList>
        </div>
        <div className=""></div>
      </Tabs>
    </section>
  );
}

export default ToolsSection;