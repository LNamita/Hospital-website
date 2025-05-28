// CopyrightBar.js
import React from 'react';

function CopyrightBar() {
  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 shadow-inner border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} aarogyaglobal.com</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
          <span className="text-blue-600">&bull;</span> {/* Blue dot separator */}
          <a href="#" className="hover:text-indigo-600">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}

export default CopyrightBar;