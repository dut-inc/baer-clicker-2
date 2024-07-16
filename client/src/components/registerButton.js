import React, { useState, useRef, useEffect } from 'react';
import Register from '../pages/Login.js';

const RegisterButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const showPopup = () => setIsPopupOpen(true);
  const hidePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        hidePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <>
      <button
        onClick={showPopup}
        className="w-[50%] p-2 mr-8 text-center font-default hover:bg-[#000000]/80 bg-[#000000]/50"
      >
        Register Account
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-[#000000]/60 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div 
            ref={popupRef}
            className="bg-[#554545] p-5 rounded-lg shadow-xl relative w-96 h-96 max-w-md max-h-md"
          >
            <button
              onClick={hidePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <Register></Register>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;