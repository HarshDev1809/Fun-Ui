import React, { useState } from "react";
import { hugEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function HugEmoticon({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  invalidVariant(variant, Object.keys(hugEmoticons));
  const [emoticon, setEmoticon] = useState(hugEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };

  return (
    <span className="hug-emoticon" style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default HugEmoticon;
