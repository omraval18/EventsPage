import React from "react";
import EventsList from "./EventsList";

function Home(props) {
    return (
        <div>
            <EventsList toggle={props.handleClick} />
        </div>
    );
}

export default Home;
