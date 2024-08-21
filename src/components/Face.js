import React from "react";
import faceEmoticons from "../utils/emoticons.face";
import defaultStyle from "../utils/defaultStyle"

function Face({variant, style}){
    if(!variant){
        variant = 1;
    }
    const finalStyle = {...defaultStyle,...style};
    const data = faceEmoticons[variant];
    return <span className="face-emoticon" style={finalStyle}>{data}</span>
}

export default Face;