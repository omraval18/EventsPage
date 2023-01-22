import React from "react";
import { GiTicket } from "react-icons/gi";

function HorCard(props) {
    return (
        <div className="w-[80%] md:w-1/3 lg:w-1/2 flex border-[1px] md:bg-white lg:bg-white bg-no-repeat mt-4">
            <div
                className={` none lg:w-1/2 bg-cover bg-no-repeat bg-center`}
                style={{ backgroundImage: `url(${props.thumb})` }}
            ></div>
            <div className="card-body p-4 lg:w-2/3 text-black text-left">
                <h2 className="card-title">{props.name}</h2>
                <p className="text-xs">{props.location}</p>
                <div class="w-full text-sm flex items-center justify-between mt-4">
                    <p class="flex text-gray-900 font-bold leading-none items-center">
                        <GiTicket className="text-sm" />
                        &nbsp;INR {props.price}
                    </p>
                    <div class="text-black p-2 flex items-center font-bold bg-[#1CDF63]">
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorCard;
