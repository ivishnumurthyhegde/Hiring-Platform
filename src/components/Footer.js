import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-semibold mb-4"> XYZ Recruitment</h3>
            <p className="text-gray-400">Some street, Some city,</p>
            <p className="text-gray-400">Some State, India. </p>
            <p className="text-gray-400">contact: +91 XXXXXXXXX </p>
          </div>
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex">
              <a href="#facebook" className="mr-4 text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="mr-4 text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#linkedin" className="mr-4 text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-4" />
        <p className="text-center text-gray-400">&copy; {new Date().getFullYear()}  XYZ Recruitment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
