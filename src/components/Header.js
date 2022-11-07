import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h1 id="mainHeadline">P<sup>2</sup></h1>
        <h3>Saturday, November 11th, 2023</h3>
        <h4>Countdown component will go here</h4>
      <header>
          <NavLink className="headerLinks" to="/">Home</NavLink>
          <NavLink className="headerLinks" to="/Photos">Photos</NavLink>
          <NavLink className="headerLinks" to="/Squad">Squad</NavLink>
          <NavLink className="headerLinks" to="/Schedule">Schedule</NavLink>
          <NavLink className="headerLinks" to="/Travel">Travel</NavLink>
          <NavLink className="headerLinks" to="/Faq">FAQ</NavLink>
          <NavLink className="headerLinks" to="/Gifting">Gifting</NavLink>
          <NavLink className="headerLinks" to="/RSVP">RSVP</NavLink>
        {/* Links go here: Home, Photos, Wedding Party, Schedule, Travel, FAQ,
        Registry, RSVP */}
      </header>
    </div>
  );
};

export default Header;
