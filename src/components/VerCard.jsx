import React from "react";
import { GiTicket } from "react-icons/gi";

function VerCard(props) {
    return (
        <div className="mt-4 lg:mx-8 flex flex-wrap ">
            <div class="w-80 bg-white shadow rounded">
                {" "}
                <div
                    class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${props.thumb})`,
                    }}
                >
                    <div class="w-full text-sm flex items-center justify-between mt-18">
                        <p class="flex text-gray-900 font-bold leading-none items-center bg-white p-2 rounded-md">
                            <GiTicket className="text-sm" />
                            &nbsp;{props.price}
                        </p>
                        <div class="text-black p-2 flex items-center font-bold bg-[#1CDF63]">
                            {props.date}
                        </div>
                    </div>
                </div>
                <div className="card-body text-black text-left">
                    <h2 className="card-title font-bold text-base max-lines_title">{props.name}</h2>
                    <p className="text-gray-700 text-xs max-lines">{props.location}</p>
                </div>
            </div>
        </div>
    );
}

export default VerCard;
