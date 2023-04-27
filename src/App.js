import React from "react";

export default function App() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <span className="countdown">
                <span style={{ "--value": 56 }}></span>
            </span>
            <div className="flex w-full flex-col gap-[20px] justify-center item-center">
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
    );
}
