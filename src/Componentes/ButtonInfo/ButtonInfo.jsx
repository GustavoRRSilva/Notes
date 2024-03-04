import React from "react";
import styles from "./ButtonInfo.module.css";

const ButtonInfo = ({ name, img, src, alt }) => {
  return (
  
      <button className={styles.ButtonInfoFilho}>
        {{ img } ? (
          <img src={src} alt={alt} className={styles.iconButton} />
        ) : ""}
       <p> {name}</p>
      </button>
  
  );
};
export default ButtonInfo;
