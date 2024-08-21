import React from 'react';
// import "../style.css"

function Hug({style}){
    const defaultStyle = {
        fontSize: "1rem",
        color: "grey"
    }
    const finalStyle = {...defaultStyle, ...style}

    return <span style={finalStyle}>\(o_o)/</span>
}

export default Hug;