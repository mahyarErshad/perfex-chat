import React from "react";
import styles from "./styles.module.css"

function MyButton({ href, text, white }) {
  const color = white ? `bg-white text-primary ${styles["white-button"]}` : `bg-primary text-white  ${styles["primary-button"]}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles["my-button"]} ${color} shadow-md mt-[3.4375rem] py-3 px-12 text-xl font-semibold flex-center rounded-3xl hover:opacity-90 duration-300 relative`}>
      {text}
    </a>
  );
}

export default MyButton;
