import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p className="mb-4">© 2024 Vishal Prajapati. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaInstagram className="text-2xl" />
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
