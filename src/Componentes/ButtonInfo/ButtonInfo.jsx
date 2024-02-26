import React from "react";
import "./ButtonInfo.css";

const ButtonInfo = ({ name, img, src, alt }) => {
  return (
    <div className="ButtonInfoPai">
      <button className="ButtonInfoFilho">
        {{ img } ? <img src={src} alt={alt} className="iconButton"/> : ""}
        {name}
      </button>
    </div>
  );
};
export default ButtonInfo;
