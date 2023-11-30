import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const nav_lists = [
  { label: "home", path: "/home" },
  { label: "about", path: "#about" },
  { label: "services", path: "#services" },
  { label: "contacts", path: "#contacts" },
];

function Navbar() {
  return (
    <div className="w-full h-[70px] lg:h-[120px] bg-[var(--primary)] fixed top-0 left-0 z-[999] flex justify-between shadow-md">
      <div className="w-[100px] md:w-[50%] inline-block h-full pt-2 lg:pt-[20px] pl-4">
        <div className="inline-block">
          <Logo />
        </div>
        <div className="w-[380px] md:inline-block ml-4 hidden">
          <h3 className="text-white font-mono uppercase">
            Panyawadee services and consultants.
          </h3>
        </div>
      </div>
      <div className="font-mono text-[.9rem] lg:text-[1rem] flex self-end pb-3">
        <NavList lists={nav_lists} />
      </div>
    </div>
  );
}

const NavList = ({ lists }) => {
  return (
    <ul className="list-none flex">
      {lists.map((navItem, index) => (
        <li key={`NavList-${index}`} className="inline-block md:mr-10 mr-2 mb-2 md:mb-0">
          <Link
            className="text-white uppercase tracking-widest font-extrabold"
            href={navItem.path}
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
