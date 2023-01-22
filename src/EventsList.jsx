import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import VerCard from "./components/VerCard";
import HorCard from "./components/HorCard";

function EventsList(props) {
    const { category } = useParams();

    console.warn(category);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `https://allevents.s3.amazonaws.com/tests/${category}.json`
                        : "https://allevents.s3.amazonaws.com/tests/all.json"
                );
                setData(res.data.item);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [category]);
    console.warn(props);

    console.log("data is here", data);

    return (
        <div className="w-full mt-16">
            <div className="w-full md:flex lg:flex items-center justify-center">
                <h2 className="text-lg lg:text-3xl font-semibold text-center">
                    Upcoming {category} Events in Ahmedabad
                </h2>
            </div>
            <div
                className={
                    !props.toggle
                        ? "w-screen flex md:justify-evenly lg:justify-center mt-16 text-black " +
                          "flex-wrap justify-center"
                        : "w-screen flex md:justify-evenly lg:justify-start mt-16 text-black " +
                          "flex-col items-center"
                }
            >
                {data.map((res, key) => {
                    return props.toggle ? (
                        <HorCard
                            name={res.eventname.replace("&amp;", "&")}
                            thumb={res.thumb_url}
                            location={res.location}
                            price={
                                res.tickets.max_ticket_price === 0 || !res.tickets.has_tickets
                                    ? "Free"
                                    : res.tickets.max_ticket_price
                            }
                            date={res.label.slice(0, -4)}
                            key={res.event_id}
                        />
                    ) : (
                        <VerCard
                            name={res.eventname.replace("&amp;", "&")}
                            thumb={res.thumb_url}
                            location={res.location}
                            price={
                                res.tickets.max_ticket_price === 0 || !res.tickets.has_tickets
                                    ? "Free"
                                    : res.tickets.max_ticket_price
                            }
                            date={res.label.slice(0, -4)}
                            key={res.event_id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EventsList;
