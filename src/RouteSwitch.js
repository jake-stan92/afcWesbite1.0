import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Squad from "./Pages/Squad";
import Contact from "./Pages/Contact";
import Reports from "./Pages/Reports";

function RouteSwitch() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/squad" element={<Squad />} />
                <Route path="/find us" element={<Contact />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;