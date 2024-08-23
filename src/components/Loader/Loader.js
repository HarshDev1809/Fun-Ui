import React, { useEffect, useState } from 'react';

function Loader(){

    // const arr = ["(0_0 )","(0_0)","( 0_0)"]
    // const index = 1
    // const [index, setIndex] = useState(0);
    // const [data, setData] = useState("hello");
    // console.log(useEffect)
    // console.log(useState)
    // const [hello,setHello] = useState("hello");

    // const showLoader = ()=>{
    //     let value = 0;
    //     let counter = 1;
    //     setInterval(()=>{
    //         console.log("value: " + counter)
    //         if(value + counter > 2){
    //             counter = (-1);
    //         }
    //         if(value + counter < 0){
    //             counter = 1;
    //         }
    //         value = counter + value;
    //         console.log(arr[value]);

    //     },2000)
    // }

    // useEffect(()=>{
    //     let counter = 1;
    //     const interval = setInterval(()=>{
            
    //         // setIndex(prevIndex => {
    //         //     if(prevIndex + counter > 2){
    //         //         counter = -1
    //         //     }
    //         //     if(prevIndex + counter < 0){
    //         //         counter = 1
    //         //     }
    //         //     return prevIndex + counter;
    //         // })
    //         // setIndex(1);
    //         console.log(counter)
    //     },1000)
    //     return ()=> clearInterval(interval);
    // },[])

    const arr = ["(0_0 )","(0_0)","( 0_0)"]
    const [data,setData] = useState("(0_0)")
  
    const showLoader = ()=>{
      let value = 0;
      let counter = 1;
      setInterval(()=>{
          console.log("value: " + counter)
          if(value + counter > 2){
              counter = (-1);
          }
          if(value + counter < 0){
              counter = 1;
          }
          value = counter + value;
          setData(arr[value]);
  
      },2000)
  }
  
  useEffect(()=>{
    showLoader()
  },[])

    return <div className="loader">
        {/* {showLoader()} */}
        {/* {arr[index]} */}
        {data}
        {/* {arr} */}
        {/* {hello} */}
    </div>
}

export default Loader;