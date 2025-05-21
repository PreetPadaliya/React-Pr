import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="px-4 py-0 shadow-lg bg-slate-100">
        <div className="container flex items-center justify-between mx-auto">
          <Link className="text-xl font-bold" to="#">
            ADMINO
          </Link>

          <div
            className={`"block md:flex md:items-center md:w-auto w-full md:flex-grow md:justify-center`}
          >
            <ul className="mt-4 md:flex md:space-x-8 md:mt-0">
              <li>
                <Link
                  className="block py-2 font-medium text-gray-900 md:py-0 hover:text-blue-600"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-600"
                  to="about"
                >
                  About
                </Link>
              </li>




              <li>
                <Link
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-600"
                  to="products"
                >
                  Products
                </Link>
              </li>



              <li>
                <Link
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-600"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-3 md:flex md:items-center">
            <Link to="/signup">
              <Button title="Signup" />
            </Link>
            <Link to="/login">
              <Button title="Login" />
            </Link>

          </div>
        </div>


        <div className="flex flex-col pb-4 mt-4 space-y-2 md:hidden">
          <Link to="/login">
            <Button title="Login" />
          </Link>
          <Link to="/signup">
            <Button title="Signup" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
