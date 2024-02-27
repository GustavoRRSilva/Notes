import React from "react";
import styles from "./ButtonInfo.module.css";

const ButtonInfo = ({ name, img, src, alt }) => {
  return (
    <div className={styles.ButtonInfoPai}>
      <button className={styles.ButtonInfoFilho}>
        {{ img } ? (
          <img src={src} alt={alt} className={styles.iconButton} />
        ) : ""}
        {name}
      </button>
    </div>
  );
};
export default ButtonInfo;
