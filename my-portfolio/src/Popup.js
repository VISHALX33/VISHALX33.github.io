import React from 'react';
import Introduction from './Introduction';
import AboutMe from './AboutMe';

const Popup = ({ onClose }) => {
  // Function to stop click events from propagating to the outer layer
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={onClose} // Close on clicking outside the popup
    >
      <div 
        className="bg-white p-6 rounded-full shadow-lg max-w-lg w-full"
        onClick={handlePopupClick} // Prevent closing on clicking inside the popup
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="space-y-4">
          <Introduction />
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
