import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex-center gap-6">
      <span className="w-[0.375rem] bg-primary rounded-[6.25rem]"></span>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <span className="w-[0.375rem] bg-primary rounded-[6.25rem]"></span>
    </div>
  );
}

export default SectionTitle;
