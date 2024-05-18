import React from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "../ScreenComponent/Component";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Component />} />
            </Routes>
        </>
    )
}
export { Routing }