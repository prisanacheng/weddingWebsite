import React, { useState, useEffect } from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${2023}-11-11`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            "days to go!": Math.floor(difference / (1000 * 60 * 60 * 24))
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      );
    }

export default Countdown;