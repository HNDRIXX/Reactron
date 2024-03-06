import React, { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { FaUser, FaKey } from "react-icons/fa6";
import Assets from "../../utils/Assets";

export default function Sidebar({ onLogout }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <React.Fragment>
            <MagicMotion>
                <aside
                    style={{
                        marginBottom: ".7rem",
                        marginTop: ".7em",
                        backgroundColor: "#EEEEEE",
                        padding: "1rem",
                        paddingInlineEnd: isCollapsed ? "2.5rem" : "1rem",
                        marginLeft: "1rem",
                        borderRadius: "0.5rem",
                        width: isCollapsed ? "3.5rem" : "20rem",
                        fontWeight: "500",
                        display: "flex",
                        flexDirection: "column",
                        gap: "3rem",
                        color: "#878787",
                        overflow: "hidden",
                    }}

                    className="shadow-xl"
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {!isCollapsed && <img src={Assets.IconWord} className="w-20 bg-contain inline-block" alt="logo" />}

                        <button
                            style={{ cursor: "pointer", padding: 0, border: 0 }}
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                        >
                            {isCollapsed ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M20.2877 6V18H22.2877V6H20.2877Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    style={{ minWidth: "24px", minHeight: "24px" }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
                                        fill="currentColor"
                                    />
                                    <path d="M3 18V6H1V18H3Z" fill="currentColor" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                viewBox="0 0 640 512"
                                fill="currentColor"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                style={{ minWidth: "24px", minHeight: "24px" }}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 6C8.68629 6 6 8.68629 6 12H1C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
                                    fill="currentColor"
                                />
                                <path d="M7 18V13H12V18H7Z" fill="currentColor" />
                                <path d="M3 18V22H7V18H3Z" fill="currentColor" />
                                <path d="M3 18H1V16H3V18Z" fill="currentColor" />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                style={{ minWidth: "24px", minHeight: "24px" }}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 21L12 9L6 9L6 15L12 21Z"
                                    fill="currentColor"
                                    fill-opacity="0.5"
                                />
                                <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor" />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                style={{ minWidth: "24px", minHeight: "24px" }}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                        >
                            <svg
                                style={{ minWidth: "24px", minHeight: "24px" }}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15Z"
                                    fill="currentColor"
                                />

                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Text
                        </li>

                        <li
                            style={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "center",
                                width: "fit-content",
                            }}
                            
                            onClick={() => onLogout()}
                        >
                            <svg
                                style={{ minWidth: "24px", minHeight: "24px" }}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Log-out
                        </li>
                    </ul>
                </aside>
            </MagicMotion>
        </React.Fragment>
    );
}