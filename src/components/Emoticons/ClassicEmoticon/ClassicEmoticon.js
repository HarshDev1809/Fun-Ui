import React, { useEffect, useState } from "react";
import { classicEmoticons } from "../../../utils/constants/emoticons";
import {invalidVariant} from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";
import { createUseStyles } from "react-jss";

function ClassicEmoticon({ variant, style, rotate}) {
  if (!variant) {
    variant = 1;
  }

  const useStyle = createUseStyles({
    rotated : {
        transform: "rotate(90deg)",
    },
})


  invalidVariant(variant,Object.keys(classicEmoticons))
  const [emoticon, setEmoticon] = useState(classicEmoticons[variant]);
  const finalStyle = { ...emoticonDefaultStyle, ...style };
  const classes = useStyle()
  return (
    <span className={`classic-emoticon ${rotate? "" : classes.rotated}`} style={finalStyle}>
      {emoticon}
    </span>
  );
}

export default ClassicEmoticon;
