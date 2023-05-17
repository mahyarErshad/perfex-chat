import React from "react";
import SectionTitle from "../Utils/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function ToolsSection() {
  return (
    <section className="max-md:mt-24 md:mt-[10.625rem] w-full px-4">
      <SectionTitle title="امکانات ماژول چت اسکریپت پرفکس" />
      <div className="grid max-md:grid-cols-1 md:grid-cols-2">
        <div className="flex-col"></div>
        <div></div>
      </div>
    </section>
  );
}

export default ToolsSection;
