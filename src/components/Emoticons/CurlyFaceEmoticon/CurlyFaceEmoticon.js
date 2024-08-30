import React, {useState} from "react";
import { curlyFaceEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function CurlyFaceEmoticon({variant, style}){
    if(!variant){
        variant = 1;
    }
    invalidVariant(variant,Object.keys(curlyFaceEmoticons));
    const [emoticon, setEmoticon] = useState(curlyFaceEmoticons[variant]);
    const finalStyle = {...emoticonDefaultStyle,...style};

    return (
        <span className="curly-face-emoticon" style={finalStyle}>{emoticon}</span>
    )
}

export default CurlyFaceEmoticon;