import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex-center gap-6">
      <span className="w-[0.375rem] bg-primary rounded-[6.25rem] h-8"></span>
      <h2 className="max-md:text-xl md:text-2xl font-semibold text-center">{title}</h2>
      <span className="w-[0.375rem] bg-primary rounded-[6.25rem] h-8"></span>
    </div>
  );
}

export default SectionTitle;
