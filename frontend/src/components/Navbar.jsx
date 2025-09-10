import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-200 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-14">
        {/* Logo */}
        <div className="logo font-bold text-xl sm:text-2xl">
          <span className="text-purple-600"> &lt;</span>
          Password
          <span className="text-purple-600"> Manager/ &gt;</span>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/Arsh-pixel-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="hover"
              stroke="bold"
              state="hover-roll"
              colors="primary:#fff,secondary:#d0a2f7"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            My GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="md:hidden flex flex-col gap-4 px-6 py-4 bg-purple-100 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://github.com/Arsh-pixel-cmd"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jjxzcivr.json"
                trigger="hover"
                stroke="bold"
                state="hover-roll"
                colors="primary:#fff,secondary:#d0a2f7"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              My GitHub
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
