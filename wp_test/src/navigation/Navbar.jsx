import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Car(props) {
  return (
    <div className="transform  hover:-skew-x-6 bg-green-700/20 py-2 px-5">
      <li className="flex justify-between transform -skew-x-6">{props.item}</li>
    </div>
  );
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cars = ['OUR TRACKS', 'FIND EVENTS', 'TRP MAPS', 'SHOP', 'ABOUT US'];

  return (
    <nav className="container mx-auto">
      {/* Notification Bar */}
      <div className=" w-full bg-white text-black text-center py-2 text-sm">
        LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / <span className="font-bold text-green-500">WATCH NOW</span>
      </div>

      {/* Main Navbar */}
      <section className="flex mx-auto justify-between px-5 sm:px-14 py-3 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white mt-1">adidass</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <div className="transform skew-x-6 bg-green-600/20 px-4 py-2">
            <button className="transform -skew-x-6 text-white font-bold">MEMBERSHIP</button>
          </div>
          <div className="transform skew-x-6 bg-green-700/20 px-4 py-2">
            <button className="transform -skew-x-6 text-white font-bold">Account</button>
          </div>
        </div>

        {/* Search Bar */}
        
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </section>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700/80 text-white text-center py-3 space-y-2">
          <ul>
            {cars.map((car, index) => (
              <Car key={index} item={car} />
            ))}
          </ul>
          <div className="py-2">
            <button className="block w-full py-2 bg-green-600/20 font-bold">MEMBERSHIP</button>
            <button className="block w-full py-2 bg-green-700/20 font-bold">Account</button>
          </div>
          {/* Search Bar in Mobile Menu */}
          <div className="flex relative max-w-xs mx-auto items-center rounded-md bg-green-950">
            <input
              type="search"
              placeholder="SEARCH"
              className="p-2 bg-transparent text-white border border-gray-50 rounded-md outline-none w-full placeholder-gray-300"
            />
            <FaSearch className="absolute text-white right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <section className="hidden md:flex  bg-green-400/60 justify-between py-4 px-30 drop-shadow-md">
        <ul className="flex gap-10 text-lg font-bold text-white">
          {cars.map((car, index) => (
            <Car key={index} item={car} />
          ))}
        </ul>
        <div className="flex relative max-w-xs items-center rounded-md bg-green-950">
          <input
            type="search"
            placeholder="SEARCH"
            className="p-2 bg-transparent text-white border border-gray-50 rounded-md outline-none w-full placeholder-gray-300"
          />
          <FaSearch className="absolute text-white right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="md:flex w-full h-20 hidden ">
  {/* Left (Green) Half */}
  <div className="w-1/2 bg-green-400/60 flex items-center justify-center">
    <h1 className="text-2xl text-white font-bold transform -skew-x-12">
      HOME PAGE
    </h1>
  </div>

  {/* Right (White) Half */}
  <div className="w-1/2 bg-white flex flex-col items-center justify-center">
    <p className="text-green-500 transform -skew-x-6 mb-1">
      Partnered by
    </p>
    <img src="/reebok-logo.png" alt="Reebok Logo" />
  </div>
</section>

    </nav>
  );
};

export default Navbar;
