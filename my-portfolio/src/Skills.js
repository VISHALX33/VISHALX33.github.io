// import React from 'react';
// import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt, FaGithub } from 'react-icons/fa';

// const Skills = () => {
//   return (
//     <section id="skills" className="p-10 bg-gray-50">
//       <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
//       <ul className="flex justify-around flex-wrap ">
//         <li className="flex items-center space-x-2 text-lg">
//           <FaReact className="text-blue-500" /> <span>React.js</span>
//         </li>
//         {/* <li className="flex items-center space-x-2 text-lg">
//           <FaNodeJs className="text-green-500" /> <span>Node.js</span>
//         </li> */}
//         <li className="flex items-center space-x-2 text-lg">
//           <FaCss3Alt className="text-blue-700" /> <span>CSS3</span>
//         </li>
//         <li className="flex items-center space-x-2 text-lg">
//           <FaHtml5 className="text-orange-500" /> <span>HTML5</span>
//         </li>
//         <li className="flex items-center space-x-2 text-lg">
//           <FaJsSquare className="text-yellow-500" /> <span>JavaScript</span>
//         </li>
//         <li className="flex items-center space-x-2 text-lg">
//           <FaGitAlt className="text-red-500" /> <span>Git</span>
//         </li>
//         <li className="flex items-center space-x-2 text-lg">
//           <FaGithub className="text-gray-900" /> <span>GitHub</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaHtml5 className="text-orange-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">HTML5</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaCss3Alt className="text-blue-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">CSS3</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaJsSquare className="text-yellow-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaReact className="text-blue-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">React</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaNodeJs className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaGitAlt className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Git</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
          <FaGithub className="text-gray-800 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">GitHub</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
