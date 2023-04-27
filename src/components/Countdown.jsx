import React, { useState, useEffect } from "react";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({});
    const targetDate = new Date("April 30, 2023 00:00:00").getTime(); // set target date for the event

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div>
            <p>
                Time left:{" "}
                {`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
            </p>
        </div>
    );
}

export default CountdownTimer;
