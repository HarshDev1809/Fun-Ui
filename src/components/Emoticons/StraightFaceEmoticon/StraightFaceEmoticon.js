import React, { useState } from "react";
import { straightFaceEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function StraightFaceEmoticon({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  invalidVariant(variant, Object.keys(straightFaceEmoticons));
  const [emoticon, setEmoticon] = useState(straightFaceEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };

  return (
    <span className="straight-face-emoticon" style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default StraightFaceEmoticon;
