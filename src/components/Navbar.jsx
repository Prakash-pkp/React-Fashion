import React from "react";
import { FaMagnifyingGlass, FaBagShopping, FaRegHeart } from "react-icons/fa6";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Men", url: "/men" },
  { label: "Women", url: "/women" },
  { label: "Sale", url: "/sale" },
  { label: "New Arrivals", url: "/new" },
];

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between align-items-center pr-5 pl-5 px-2 py-2 content-center bg-zinc-200 text-white align-items-center">
        <h1 className="text-xl font-bold p-1 border-4 border-zinc-950 text-black rounded">
          ReactFashion
        </h1>
        <ul className="flex gap-5 font-semibold justify-around justify-items-center items-center content-center uppercase text-black">
          {navLinks.map((links) => {
            return <li key={links.label}>{links.label}</li>;
          })}
        </ul>

        <div className="flex gap-2 ">
          <div className="flex justify-items-center items-center content-center bg-zinc-50 rounded border-2 border-black w-96">
            <span className="text-black pl-3 pr-3">
              <FaMagnifyingGlass />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="p-1 bg-zinc-50 w-full text-black"
              placeholder="Search"
            />
          </div>

          <div className="flex justify-items-center items-center content-center uppercase text-black font-semibold">
            <span className="p-2">Login</span>
            <span className="p-2 text-2xl">
              <FaRegHeart />
            </span>
            <span className="p-2 text-2xl relative">
              <FaBagShopping />
              <span className="absolute w-[17px] h-[17px] top-0 right-0 text-xs text-white bg-red-600 rounded-full text-center">0</span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
