import React from 'react';
import Contectmeimage from "./assets/Contectmeimage.png"

const ContactMe = () => {
  return (
    <section id="contact" className="p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Me</h2>
      <form className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Message:</label>
              <textarea
                name="message"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={Contectmeimage}
              alt="Placeholder"
              className="w-full h-auto rounded-lg  "
            />
          </div>
        </div>
      </form>

      
    </section>
  );
};

export default ContactMe;
