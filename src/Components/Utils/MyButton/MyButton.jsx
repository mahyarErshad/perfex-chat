import React from "react";
import styles from "./styles.module.css";

const MyButton = ({ href, text, white, className }) => {
  const buttonClass = white ? `${styles["white-button"]}` : `${styles["primary-button"]}`;
  const colorClass = white ? `bg-white text-primary` : `bg-primary text-white`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles["my-button"]} ${colorClass} ${buttonClass} ${className} min-w-[13.5625rem] shadow-md py-3 px-12 text-xl font-semibold flex-center rounded-3xl hover:opacity-90 duration-300 relative`}>
      {text}
    </a>
  );
};

export default MyButton;
