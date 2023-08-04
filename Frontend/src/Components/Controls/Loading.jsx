import React, { useState, useEffect } from 'react';

import { Loader } from 'rsuite'
export default function Loading() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (seconds === 60) {
        setSeconds(0);
        setMinutes(prevMinutes => prevMinutes + 1);
      }
    }, [seconds]);
  
  return (
   <>

   <Loader content={ `${minutes} min ${seconds} sec`}vertical inverse center  size="lg"/>
  
   </>
  )
}
