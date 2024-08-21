import emoticonsClassic from "../utils/emoticons.classic";
import React from "react";
import defaultStyle from "../utils/defaultStyle";

function Classic({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  const finalStyle = { ...defaultStyle, ...style };
  const data = emoticonsClassic[variant];
  return (
    <span className="classic-emoticon" style={finalStyle}>
      {data}
    </span>
  );
}

export default Classic;
