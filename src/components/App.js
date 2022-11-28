import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
    Header,
    Faq,
    Gifting,
    Home,
    Photos, 
    Schedule,
    Squad,
    Travel,
    Rsvp
} from './'


const App = () => {

return (
    <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Squad" element={<Squad />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Gifting" element={<Gifting />} />
        <Route path="/RSVP" element={<Rsvp />} />
        </Routes>
    </div>
    )
}

export default App;