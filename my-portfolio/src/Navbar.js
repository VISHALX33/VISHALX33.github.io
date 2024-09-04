// import React, { useState } from 'react';
// import ProfileImage from './assets/Profileimage.jpg'; // Import the image
// import Popup from './Popup'; // Import the Popup component

// const Navbar = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const handleImageClick = () => {
//     setPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           <a href="#introduction" className="hover:text-blue-400 transition-colors duration-300">Vishal Prajapati</a>
//         </div>
//         <div className="space-x-6 hidden md:flex">
//           <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Me</a>
//           <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
//           <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
//           <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
//           <a href="#certificates" className="hover:text-blue-400 transition-colors duration-300">Certificates</a>
//           <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact Me</a>
//         </div>
//         <img
//           src={ProfileImage}
//           alt="Profile"
//           className="w-14 h-14 rounded-full cursor-pointer border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
//           onClick={handleImageClick}
//         />
//       </div>
//       {isPopupOpen && <Popup onClose={handleClosePopup} />}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import ProfileImage from './assets/Profileimage.jpg'; // Import the image
import Popup from './Popup'; // Import the Popup component

const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="#introduction" className="hover:text-blue-400 transition-colors duration-300">Vishal Prajapati</a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Me</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
          <a href="#certificates" className="hover:text-blue-400 transition-colors duration-300">Certificates</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact Me</a>
        </div>
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full cursor-pointer border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
          onClick={() => setPopupOpen(true)}
        />
      </div>
      {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />}
    </nav>
  );
};

export default Navbar;
