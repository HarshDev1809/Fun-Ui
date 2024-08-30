import React, { useState } from "react";
import { roundFaceEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function RoundFaceEmoticons({variant, style}){
    if(!variant){
        variant = 1;
    }
    invalidVariant(variant,Object.keys(roundFaceEmoticons));
    const [emoticon, setEmoticon] = useState(roundFaceEmoticons[variant]);
    const finalStyle = {...emoticonDefaultStyle,...style};

    return (
        <span className="round-face-emoticon" style={finalStyle}>{emoticon}</span>
    )
}

export default RoundFaceEmoticons;