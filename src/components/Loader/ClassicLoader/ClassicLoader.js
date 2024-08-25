import React, { useEffect } from "react";
import { classicLoader } from "../../../utils/constants/loader";
import { loaderDefaultStyle } from "../../../utils/constants/defaultStyle";
import { invalidVariant } from "../../../utils/helperFunctions/errors";
import { loaderCaptionDefaultStyle } from "../../../utils/constants/defaultStyle";

function ClassicLoader({ style, time, variant,caption, captionStyle }) {
  if (!variant) {
    variant = 1;
  }

  if (!time) {
    time = 2000;
  }

  invalidVariant(variant,Object.keys(classicLoader));

  const finalStyle = { ...loaderDefaultStyle, ...style };
  const loaderArray = classicLoader[variant];
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

  useEffect(()=>{
    const intervalId = showLoader();

    return ()=>{
        clearInterval(intervalId);
    }
  },[])

  return (
    <div className="classic-loader" style={finalStyle}>
      {loader}
      <span style={captionFinalStyle}>{caption}</span>
    </div>
  );
}

export default ClassicLoader;