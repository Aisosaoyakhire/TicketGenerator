import React, { useState } from "react";
import logo from "../assets/navlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="text-white border-2 border-[#24A0B5] justify-center rounded-2xl shadow-md px-6 fixed w-9/10 z-50"
      style={{ backgroundColor: "#031E23" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-8 md:items-center absolute md:static bg-white w-full left-0 md:w-auto md:bg-transparent top-16 shadow-md md:shadow-none transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#"
              className="block px-6 py-3 md:py-0 hover:text-blue-500 transition"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-6 py-3 md:py-0 hover:text-blue-500 transition"
            >
              My Tickets
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-6 py-3 md:py-0 hover:text-blue-500 transition"
            >
              About Project
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          MY TICKETS →
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
