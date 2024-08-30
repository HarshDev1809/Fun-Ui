import React, {useState} from "react";
import { confusedEmoticons } from "../../../utils/constants/emoticons";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { emoticonDefaultStyle } from "../../../utils/constants/defaultStyle";

function ConfusedEmoticon({variant, style}){
    if(!variant){
        variant = 1;
    }
    invalidVariant(variant,Object.keys(confusedEmoticons));
    const [emoticon, setEmoticon] = useState(confusedEmoticons[variant]);
    const finalStyle = {...emoticonDefaultStyle,...style};

    return (
        <span className="confused-emoticon" style={finalStyle}>{emoticon}</span>
    )
}

export default ConfusedEmoticon;