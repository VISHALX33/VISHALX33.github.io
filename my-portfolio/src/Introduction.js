import React from 'react';
import ProfileImage from './assets/Profileimage.jpg'; // Import the image

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="p-10 text-center bg-gray-50 flex flex-col items-center"
    >
      {/* Image */}
      <img
        src={ProfileImage}
        alt="Profile Image"
        className="rounded-full w-96 h-96 object-cover mb-4 transition-transform duration-500 transform hover:scale-110"
      />
      {/* Text */}
      <div className="animate-slide-up">
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I'm Vishal Prajapati
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-150">
        Welcome to my portfolio. I'm a frontend developer based in India.
      </p>
    </section>
  );
};

export default Introduction;

// import React from 'react';
// import ProfileImage from './assets/Profileimage.jpg'; // Import the image

// const Introduction = () => {
//   return (
//     <section id="introduction" className="p-10 text-center bg-white shadow-md rounded-lg mb-10">
//       <img
//         src={ProfileImage}
//         alt="Profile Image"
//         className="rounded-full w-48 h-48 object-cover mb-4 transition-transform duration-500 transform hover:scale-110 mx-auto"
//       />
//       <div className="animate-slide-up">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">Hi, I'm Vishal Prajapati</h1>
//         <p className="text-lg text-gray-600 animate-fade-in delay-150">
//           Welcome to my portfolio. I'm a frontend developer based in India.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Introduction;
