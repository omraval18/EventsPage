import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import EventsList from "./EventsList";
import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./components/Menu";

function App() {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "https://allevents.s3.amazonaws.com/tests/categories.json"
                );
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    console.log("data is here", data);

    function handleToggle() {
        setToggle(!toggle);
    }

    return (
        <>
            <Menu data={data} handleToggle={handleToggle} />
            <Routes>
                <Route path="/" element={<Home handleClick={toggle} />} />
                <Route path="/:category" element={<EventsList toggle={toggle} />} />
            </Routes>
        </>
    );
}

export default App;
