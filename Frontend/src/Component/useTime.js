import { useState, useEffect } from 'react';
export const useTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Update every second
      return () => clearInterval(intervalId);
    }, []);
    return{
        currentTime
    }
       
}