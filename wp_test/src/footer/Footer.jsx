import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className=" text-white py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col  items-center justify-between">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center  space-x-6 mb-10 ">
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">Our Tracks</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">Find Events</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">Track Map</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">Shop</a>
        </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-5">
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <div className="">@copyright 2020  Adidas</div>
      </div>
    </footer>
  )
}

export default Footer
