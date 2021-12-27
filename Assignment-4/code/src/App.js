import React from 'react'
import  LandingPage  from "./LandingPage";
import  Postview  from "./Postview";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/Postview" element={<Postview />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
