import React from "react";
import { NavLink } from "react-router-dom"
import {Countdown} from './'

const Header = () => {
  return (
    <div>
        <div className="mainInfo">
        <h1 id="mainHeadline">Patrick + Prisana</h1>
        <h3 className="mainDate">Saturday, November 11th, 2023</h3>
        <Countdown />
        </div>
      <header>
          <NavLink className="headerLinks" to="/">Home</NavLink>
          <NavLink className="headerLinks" to="/Photos">Photos</NavLink>
          <NavLink className="headerLinks" to="/Squad">Squad</NavLink>
          <NavLink className="headerLinks" to="/Schedule">Schedule</NavLink>
          <NavLink className="headerLinks" to="/Travel">Travel</NavLink>
          <NavLink className="headerLinks" to="/Faq">FAQ</NavLink>
          <NavLink className="headerLinks" to="/Gifting">Gifting</NavLink>
          <NavLink className="headerLinks" to="/RSVP">RSVP</NavLink>
      </header>
    </div>
  );
};

export default Header;
