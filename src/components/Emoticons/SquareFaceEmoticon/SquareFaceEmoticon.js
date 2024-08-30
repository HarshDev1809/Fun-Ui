import React, { useState } from "react";
import { squareFaceEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function SquareFaceEmoticon({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  invalidVariant(variant, Object.keys(squareFaceEmoticons));
  const [emoticon, setEmoticon] = useState(squareFaceEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };

  return (
    <span className="square-face-emoticon" style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default SquareFaceEmoticon;
