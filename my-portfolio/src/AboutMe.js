// import React from 'react';
// import aboutMeImage from "./assets/Aboutmeimage.png";

// const AboutMe = () => {
//   return (
//     <section id="about" className="p-10 bg-gray-100">
//       <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={aboutMeImage}
//             alt="Profile Image"
//             className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg transition-transform duration-500 transform hover:scale-110"
//           />
//         </div>
//         {/* Text Content */}
//         <div className="w-full md:w-1/2 md:pl-8 space-y-4">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
//           <p className="text-lg text-gray-800 leading-relaxed">
//             As a Frontend Developer, I specialize in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js. I have a strong grasp of layout techniques like Flexbox, Grid, and Tailwind CSS, ensuring designs are both visually appealing and performant across all devices.
//           </p>
//           <p className="text-lg text-gray-800 leading-relaxed">
//             I’m a Web Frontend Intern at Dooper, where I collaborate with designers and backend developers to bring innovative ideas to life. I’m passionate about continuously learning and applying new technologies to deliver top-notch web experiences.
//           </p>
//           <p className="text-lg text-gray-800 leading-relaxed">
//             Looking ahead, I’m aiming to expand my expertise into Full Stack Development.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React from 'react';
import aboutMeImage from "./assets/Aboutmeimage.png";

const AboutMe = () => {
  return (
    <section id="about" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutMeImage}
            alt="About Me"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg transition-transform duration-500 transform hover:scale-110"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            As a Frontend Developer, I specialize in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js. I have a strong grasp of layout techniques like Flexbox, Grid, and Tailwind CSS, ensuring designs are both visually appealing and performant across all devices.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            I’m a Web Frontend Intern at Dooper, where I collaborate with designers and backend developers to bring innovative ideas to life. I’m passionate about continuously learning and applying new technologies to deliver top-notch web experiences.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Looking ahead, I’m aiming to expand my expertise into Full Stack Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
