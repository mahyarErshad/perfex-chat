import React from "react";

function MyButton({ href, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="my-button shadow-md mt-[3.4375rem] bg-white py-3 px-12 text-xl font-semibold text-primary flex-center rounded-3xl hover:opacity-90 duration-300 relative">
      {text}
    </a>
  );
}

export default MyButton;
