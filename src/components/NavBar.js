import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className=" max-w-full bg-green-600">
      <div className="container flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-purple-200 hover:text-black text-4xl font-bold cursive tracking-widest"
          >
            Muszka In The Garden
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 font-bold hover:text-purple-800 "
            activeClassName="text-red-100 bg-red-700"
          >
            Garden Styles
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 font-bold hover:text-purple-800 "
            activeClassName="text-red-100 bg-red-700"
          >
            My Plants
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 font-bold hover:text-purple-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex items-center py-24 md:py-6 px-3 bg-green-600 flex-col md:flex-row">
          <SocialIcon
            url="https://github.com/Anna-14-pol"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/anna-mucha-pol/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
