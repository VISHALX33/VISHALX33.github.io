// import React from 'react';

// const projects = [
//   {
//     title: "Project Title 1",
//     description: "Brief description of your project. You can also add a link to the project.",
//     imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
//   },
//   {
//     title: "Project Title 2",
//     description: "Brief description of your project. You can also add a link to the project.",
//     imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
//   },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="p-10 bg-gray-50">
//       <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-6 bg-white">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';

const projects = [
    {
        title: "Project Title 1",
        description: "Brief description of your project. You can also add a link to the project.",
        imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
      },
      {
        title: "Project Title 2",
        description: "Brief description of your project. You can also add a link to the project.",
        imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
      },
      // Add more projects as needed
  // Your projects array
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
