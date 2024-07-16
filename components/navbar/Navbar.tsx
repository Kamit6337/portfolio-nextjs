"use client";

import { navLinkList } from "@/constants";
import { ModeToggle } from "../darkToggle/ModeToggle";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    navLinkList.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) {
        console.log(`Observing section: ${link.href}`);
        observer.observe(section);
      } else {
        console.log(`Non Observing section: ${link.href}`);
      }
    });

    return () => {
      navLinkList.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleClick = (href: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const selectedDiv = document.querySelector(href) as HTMLElement;
    const offsetTop = selectedDiv.offsetTop;

    window.scrollTo({
      top: offsetTop, // Adjust this value as needed
      behavior: "smooth",
    });
  };

  if (!toggleNav) {
    return (
      <div
        className={`w-full flex justify-between items-center transition-all duration-700`}
      >
        {navLinkList.map((obj, i) => {
          const isActive = activeLink === obj.href;
          return (
            <div key={i}>
              <p
                className={`navbar_link cursor-pointer hover:border-b hover:border-foreground
                  ${isActive ? "border-b border-foreground" : ""}
                  `}
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
  }

  return (
    <div className="w-full">
      <HoverBorderGradient
        containerClassName="rounded-full w-full bg-background  border border-slate-500"
        className="bg-background  text-foreground w-full flex justify-between items-center px-5 md:px-10 lg:py-1"
      >
        {navLinkList.map((obj, i) => {
          const isActive = activeLink === obj.href;

          return (
            <div key={i}>
              <p
                className={`navbar_link cursor-pointer hover:border-b hover:border-foreground
                ${isActive ? "border-b border-foreground" : ""}
                `}
                onClick={handleClick(`#${obj.href}`)}
              >
                {obj.name}
              </p>
            </div>
          );
        })}

        <ModeToggle />
      </HoverBorderGradient>
    </div>
  );
};

export default Navbar;
