import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <footer className="bg-white rounded-lg w-5/6  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex items-center justify-between py-3">
            <a className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png"
                className="h-8 mr-3"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600">
                Fetching Data
              </span>
            </a>
            <ul className="flex flex-wrap items-center ml-16 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 font-bold hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 font-bold hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
