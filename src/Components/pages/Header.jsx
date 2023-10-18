import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>

      <li>
        <NavLink to="/addCoffee">AddCoffee </NavLink>
      </li>
      <li>
        <NavLink to="/updateCoffee">UpdateCoffee </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{navLink}</li>
          </ul>
        </div>
        <a className=" normal-case text-xl">Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1">
          <li tabIndex={0}>
            <li>{navLink}</li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-secondary"> Button </button>
      </div>
    </div>
  );
};

export default Header;
