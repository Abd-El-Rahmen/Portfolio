import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <div className="p-1 bg-white size-12 rounded-full flex items-center justify-center transition-all duration-200 hover:size-14">
              <img src="/bng.png" alt="Abdou" />
            </div>
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? <X/> : <Menu />}
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;
