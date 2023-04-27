import React, { useState, useEffect } from "react";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ seconds: 30 }); // set initial time

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime.seconds === 0) {
                    // stop the countdown at 0 seconds
                    clearInterval(intervalId);
                    return prevTime;
                } else {
                    return { seconds: prevTime.seconds - 1 };
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="font text-[72px] text-[#8400ff] flex flex-col items-center">
            <p className="text-[black] text-[36px]">Lakshya Fest Starts in </p>
            <p>
                {`${timeLeft.seconds < 10 ? "0" : ""}${timeLeft.seconds}`}{" "}
                {/* pad with leading 0 if less than 10 seconds */}
            </p>
        </div>
    );
}

export default CountdownTimer;
