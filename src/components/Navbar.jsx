import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <div className="mx-auto w-full bg-transparent font-primary">
      <nav className="w-full mx-auto flex justify-between items-center py-4 px-2 max-w-[1120px]">
        {/* left side */}
        <div className="flex md:w-auto w-full  items-center space-x-12">
          {/* logo */}
          <div
            className="w-full md:w-auto  mx-auto px-4 flex items-center justify-between"
          >
            <img src={Logo} alt="Logo" />
            {/* open & close */}
            <div onClick={() => handleClick()} className="md:hidden z-40">
              {!open ? (
                <FaBars size={25} className="text-black cursor-pointer" />
              ) : (
                <FaTimes size={25} className="text-black cursor-pointer" />
              )}
            </div>
          </div>

          {/* navigation */}
          <div className="hidden md:flex gap-12">
            <ul className="flex justify-between space-x-10 text-[16px] items-center text-gray-500">
              <li>
                <a href="#" className="font-semibold ">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold ">
                  Contact
                </a>
              </li>
            </ul>
           
          </div>

          {/* mobile menu */}
          <div
            className={`fixed top-[80px] w-[350px] rounded-md z-40 duration-500 bg-blue-800 ease-in p-[40px] flex items-center justify-center ${
              open ? "flex items-center justify-center left-[-5%]" : "left-[-200%]"
            }`}
          >
            <div className="flex flex-col gap-4 my-6 w-full px-6">
              <ul className="flex flex-col justify-center text-[14px] items-center gap-8 text-white w-full my-4">
                <li className=" w-full flex items-center text-center justify-center py-2">
                  <a
                    href="#"
                    className="text-xl py-2"
                  >
                    Features
                  </a>
                </li>
                <li className=" w-full flex items-center text-center justify-center py-2">
                  <a href="#" className=" text-xl">
                    Pricing
                  </a>
                </li>
                <li className=" w-full flex items-center text-center justify-center">
                  <a
                    href="#"
                    className=" text-xl py-2"
                  >
                    Resources
                  </a>
                </li>
              </ul>
              <div className="flex flex-col gap-4 border-t-[2px] border-t-white p-3">
                <button className="py-3 px-5  cursor-pointer text-white font-semibold text-xl">
                  Login
                </button>
                <button className="py-3 px-5  rounded-full cursor-pointer text-white font-semibold bg-cyan-400 text-xl">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <div className="md:flex items-center gap-4 hidden">
            <button className="py-3 px-5 text-gray-400">
              Login
            </button>

            <button className="py-2 px-5 rounded-full cursor-pointer text-white bg-cyan-500 font-semibold text-[15px]">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
