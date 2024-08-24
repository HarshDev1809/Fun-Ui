import React, {useEffect, useState} from "react";
import { faceEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function FaceEmoticon({variant, style }){
    if(!variant){
        variant = 1;
    }
    invalidVariant(variant,Object.keys(faceEmoticons));
    const [emoticon, setEmoticon] = useState(faceEmoticons[variant]);
    const finalStyle = {...emoticonDefaultStyle,...style};

    return (
        <span className="face-emoticon" style={finalStyle}>{emoticon}</span>
    )
}

export default FaceEmoticon;