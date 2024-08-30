import React, {useEffect, useState} from "react";
import { smileEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function SmileEmoticons({variant, style}){
    if(!variant){
        variant = 1;
    }
    invalidVariant(variant,Object.keys(smileEmoticons));
    const [emoticon, setEmoticon] = useState(smileEmoticons[variant]);
    const finalStyle = {...emoticonDefaultStyle,...style};

    return (
        <span className="smile-emoticon" style={finalStyle}>{emoticon}</span>
    )
}

export default SmileEmoticons;