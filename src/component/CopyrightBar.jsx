import React from 'react';

function CopyrightBar() {
  return (
    <footer className="bg-white py-3 sm:py-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          {/* Copyright text with dynamic year */}
          <p className="text-xs sm:text-sm text-gray-600 order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} aarogyaglobal.com. All rights reserved.
          </p>

          {/* Links with better mobile spacing */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 order-1 md:order-2">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <span className="text-blue-500 hidden sm:inline" aria-hidden="true">•</span>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              aria-label="Terms and Conditions"
            >
              Terms & Conditions
            </a>
            <span className="text-blue-500 hidden sm:inline" aria-hidden="true">•</span>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              aria-label="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CopyrightBar;