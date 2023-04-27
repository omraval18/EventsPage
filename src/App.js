import React from "react";
import CountdownTimer from "./components/Countdown";

export default function App() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex w-full justify-center item-center">
                <CountdownTimer />
                <div className="flex w-full items-c">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
            </div>
        </div>
    );
}
