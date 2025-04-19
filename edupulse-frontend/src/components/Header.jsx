import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/IIT_Patna_Logo.svg/1200px-IIT_Patna_Logo.svg.png"
            alt="IIT Patna Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-semibold">EduPulse</h1>
            <p className="text-sm">Developed by Shubham Yadav - IIT Patna</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
