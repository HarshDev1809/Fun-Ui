import React, { useEffect, useState } from "react";
// import useStyle from "../../../utils/helperFunctions/cssClasses";
import { loaderDefaultStyle } from "../../../utils/constants/defaultStyle";
import { loaderCaptionDefaultStyle } from "../../../utils/constants/defaultStyle";
import { sandWatchLoader } from "../../../utils/constants/loader";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { sandWatchLoaderCaptionDefaultStyle } from "../../../utils/constants/defaultStyle";
import { createUseStyles } from 'react-jss';

function SandWatchLoader({ gap, offSet ,variant, style, time, caption, captionStyle }) {
  if (!time) {
    time = 2000;
  }

  if(!variant){
    variant = 1;
  }

  if(!gap){
    gap = 10
  }

  if(!offSet){
    offSet = 5
  }


  const useStyle = createUseStyles({
    rotated : {
        transform: "rotate(90deg)",
        paddingBottom : `${offSet}px`
    },

    sandWatchLoader : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        gap : `${gap}px`,
    }
})


  invalidVariant(variant,Object.keys(sandWatchLoader));

  const finalStyle = { ...loaderDefaultStyle, ...style };
  const [loader, setLoader] = useState(sandWatchLoader[variant]);
  const [isRotated, setIsRotated] = useState(true);
  const classes = useStyle();
  const captionFinalStyle = { ...sandWatchLoaderCaptionDefaultStyle, ...captionStyle };

  const showLoader = () => {
    const intervalId = setInterval(() => {
      setIsRotated((prevIsRotated) => !prevIsRotated);
    }, time);
    return intervalId;
  };

  useEffect(() => {
    const intervalId = showLoader();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={classes.sandWatchLoader}>
        <span
      className={`${isRotated ? classes.rotated : ""}`}
      style={finalStyle}
    >
      {loader}
    </span>
    <span style={captionFinalStyle}>{caption}</span>
    </div>

  );
}

export default SandWatchLoader;
