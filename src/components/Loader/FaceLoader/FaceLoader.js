import React, { useEffect, useState } from "react";
import { faceLoader } from "../../../utils/constants/loader";
import { loaderDefaultStyle } from "../../../utils/constants/defaultStyle";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { loaderCaptionDefaultStyle } from "../../../utils/constants/defaultStyle";

function FaceLoader({ variant, style, time,caption, captionStyle }) {
  if (!time) {
    time = 2000;
  }

  if (!variant) {
    variant = 1;
  }

  invalidVariant(variant,Object.keys(faceLoader));
  
  const finalStyle = { ...loaderDefaultStyle, ...style };
  const loaderArray = faceLoader[variant];
  const [loader, setLoader] = useState(loaderArray[0]);
  const captionFinalStyle = {...loaderCaptionDefaultStyle, ...captionStyle}

  const showLoader = () => {
    let value = 0;
    let counter = 1;
    const intervalId = setInterval(() => {
      if (value + counter > loaderArray.length - 1) {
        counter = -1;
      }
      if (value + counter < 0) {
        counter = 1;
      }
      value = counter + value;
      setLoader(loaderArray[value]);
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
    <div className="face-loader" style={finalStyle}>
      {loader}
      <span style={captionFinalStyle}>{caption}</span>
    </div>
  );
}

export default FaceLoader;
