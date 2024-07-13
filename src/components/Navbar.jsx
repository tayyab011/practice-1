import React from 'react';
import "../App.css";
import logo from "../img/Logo.png";
import search from "../img/Search.svg";
import create from "../img/Create.svg";
import message from "../img/Message.svg";
import notification from "../img/Notification.svg";
import option from "../img/Options.svg";
import profilepic from "../img/Profile Pic.svg";
import humburgur from "../img/Hamburger.svg";

const Navbar = () => {
    return (
      <div class="bg-navbg">
        <nav class="md:mx-40 ">
          <div class="logo">
            <img src={logo} />
          </div>

          <input type="checkbox" id="click" />
          <a href="#" className="ml-16 md:hidden pp">
            <img className="mx-auto" src={profilepic} />
          </a>
          <label for="click" class="manu-btn">
            <img src={humburgur} />
          </label>
          <input id="#click" type="checkbox" className="hidden" />
          <ul>
            <li>
              <img className="mx-auto" src={search} />
            </li>
            <li>
              <img className="mx-auto" src={create} />
            </li>
            <li>
              <img className="mx-auto" src={message} />
            </li>
            <li>
              <img className="mx-auto" src={notification} />
            </li>
            <li>
              <img className="mx-auto" src={option} />
            </li>
            <li className="md:block hidden">
              <img className="mx-auto" src={profilepic} />
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;