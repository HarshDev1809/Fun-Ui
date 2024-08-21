import React from "react";
import defaultStyle from "../utils/defaultStyle";

function Hug({ variant, style }) {
  if(!variant){
    variant = 1;
  }
  const finalStyle = { ...defaultStyle, ...style };
  return (
    <span className="hug-emoticons" style={finalStyle}>
      \(o_o)/
    </span>
  );
}

export default Hug;
