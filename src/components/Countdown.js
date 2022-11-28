import React, { useState, useEffect } from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${2023}-11-11`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            "days until 'I do'": Math.floor(difference / (1000 * 60 * 60 * 24))
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
          <span className ="countdownText">
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div className="countdown">
          {timerComponents.length ? timerComponents : <span className = "countdownText">Time to get married!</span>}
        </div>
      );
    }

export default Countdown;
