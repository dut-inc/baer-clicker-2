import React, { useState } from 'react';

const RegisterButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const showPopup = () => setIsPopupOpen(true);
  const hidePopup = () => setIsPopupOpen(false);

  return (
    <>
      <button
        onClick={showPopup}
        className="w-[50%] p-2 text-center mr-8 font-default hover:bg-[#000000]/80 bg-[#000000]/50"
      >
        Sign Up
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 overflow-y-auto h-screen w-screen rounded-xl m-auto flex items-center justify-center">
            <div className="bg-[#000000]/80">

            </div>
          <div className="bg-white p-5 rounded-lg shadow-xl relative">
            <button
              onClick={hidePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Register Account</h2>
            <p>This is where you'd put your registration form.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;