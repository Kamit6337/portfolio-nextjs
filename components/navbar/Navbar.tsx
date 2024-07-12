"use client";

import { navLinkList } from "@/constants";
import { ModeToggle } from "../darkToggle/ModeToggle";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href) => (e) => {
    e.preventDefault();
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop - 0, // Adjust this value as needed
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        toggleNav &&
        "border border-slate-500 rounded-full  bg-background px-5  md:px-10 md:py-1 "
      }  w-full flex justify-between items-center transition-all duration-700`}
    >
      {navLinkList.map((obj, i) => {
        return (
          <div key={i}>
            <p
              className="navbar_link cursor-pointer"
              onClick={handleClick(`#${obj.href}`)}
            >
              {obj.name}
            </p>
          </div>
        );
      })}

      <ModeToggle />
    </div>
  );
};

export default Navbar;
