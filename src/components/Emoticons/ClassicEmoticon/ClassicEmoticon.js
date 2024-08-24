import React, { useEffect, useState } from "react";
import { classicEmoticons } from "../../../utils/constants/emoticons";
import {invalidVariant} from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function ClassicEmoticon({ variant, style }) {
  if (!variant) {
    variant = 1;
  }
  invalidVariant(variant,Object.keys(classicEmoticons))
  const [emoticon, setEmoticon] = useState(classicEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };

  return (
    <span className="classic-emoticon" style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default ClassicEmoticon;
