import React, { useEffect } from "react";
import "./css/Menu.css";
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaCertificate,
  FaSearch,
  FaInfo,
  FaCog,
  FaSignOutAlt,
  FaPlus
} from "react-icons/fa";

function Sidebar() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu className="fixed top-0 mt-20 left-2">
      <ul id="mainMenu" className="items-center text-center">
        <li className="">
          <Link to="/">
            <FaHome className="mx-auto" /> 
          </Link>
        </li>
        <li className="">
          <Link to="../certificate">
            <FaCertificate className="mx-auto" /> 
          </Link>
        </li>
        <li className="">
          <Link to="/search">
            <FaSearch className="mx-auto" /> 
          </Link>
        </li>
        <li className="">
          <Link to="/about">
            <FaInfo className="mx-auto" /> 
          </Link>
        </li>
        <li className="">
          <Link to="/generate">
            <FaPlus className="mx-auto" /> 
          </Link>
        </li>
      </ul>

      <ul className="lastMenu pb-8">
        <li>
          <Link to="/settings">
            <FaCog className="mx-auto" /> 
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt className="mx-auto" />
          </Link>
        </li>
      </ul>
    </menu>
  );
}

// const Icon = ({ icon }) => (
//   <li>
//     <a href="#">{icon}</a>
//   </li>
// );

export default Sidebar;
