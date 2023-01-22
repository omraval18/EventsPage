import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <div className="flex w-full  items-center justify-around px-8">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                {props.data.map((name, key) => {
                                    console.log(name.categories);
                                    return (
                                        <li className="text-black text-lg">
                                            <Link to={"/" + name.category}>
                                                {name.category.toUpperCase()}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a
                            href="https://omraval.me"
                            className="btn btn-ghost normal-case text-xl"
                            target="_blank"
                        >
                            Om Raval
                        </a>
                    </div>
                    <div className="navbar-end">
                        <input
                            type="checkbox"
                            className="toggle toggle-[#1CDF63] tooltip tooltip-left tooltip-black"
                            data-tip="Click For List View"
                            onClick={props.handleToggle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
