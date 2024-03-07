import React from "react";
import { Link } from "react-router-dom";
import { BsFillCarFrontFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="p-5">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center gap-8 uppercase">
          <div className="flex justify-around items-center gap-2">
            <div className="bg-blue-500 rounded-full p-2">
              <BsFillCarFrontFill className="text-xl text-white" />
            </div>
            <Link to='/'>
              <h1 className="text-xl">
                Car<span className="font-bold">buy</span>
              </h1>
            </Link>
          </div>
          <div>
            <ul className="lg:flex justify-around items-center gap-3 font-semibold hidden">
              {/* <li className="hover:text-blue-400 cursor-pointer"> */}
              
              
                <Link to='/search-cars'>
                <li className="hover:text-blue-400 cursor-pointer">Search Cars</li>
              </Link>
              
              <Link to='/sell-my-car'>
                <li className="hover:text-blue-400 cursor-pointer">Sell/Trade</li>
              </Link>
              
              <Link to='/financing'>
                <li className="hover:text-blue-400 cursor-pointer">Financing</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <button className="uppercase text-sm font-semibold text-blue-400 hover:text-blue-800">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
