import React, { useState } from "react";
import { dancingEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function DancigEmoticon({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  invalidVariant(variant, Object.keys(dancingEmoticons));
  const [emoticon, setEmoticon] = useState(dancingEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };

  return (
    <span className="dancing-emoticon" style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default DancigEmoticon;
