import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="w-full h-[50px] shadow-lg flex justify-between items-center px-[30px]">
        <div>
          <Link to="/" className="text-2xl text-orange-600 font-bold">
            LOGO
          </Link>
        </div>

        <div className="">
          <ul className="flex gap-[25px] items-center">
            <li>
              <Link
                to="/"
                className="block px-[1rem] py-[0.5rem] bg-blue-600 text-white hover:bg-orange-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/alumini"
                className="block px-[1rem] py-[0.5rem] bg-blue-600 text-white hover:bg-orange-600"
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-[1rem] py-[0.5rem] bg-blue-600 text-white hover:bg-orange-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-[1rem] py-[0.5rem] bg-blue-600 text-white hover:bg-orange-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
