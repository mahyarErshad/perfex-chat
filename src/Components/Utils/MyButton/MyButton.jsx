import React from "react";

function MyButton({ href, text, white }) {
  const color = white ? "bg-white text-primary" : "bg-primary text-white";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`my-button ${color} shadow-md mt-[3.4375rem] py-3 px-12 text-xl font-semibold flex-center rounded-3xl hover:opacity-90 duration-300 relative`}>
      {text}
    </a>
  );
}

export default MyButton;
