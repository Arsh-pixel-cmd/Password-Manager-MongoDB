import React from "react";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-purple-200 text-gray-800 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-xl text-purple-700 hover:underline hover:[text-shadow:1px_1px_4px_#a855f7] transition">
            &lt; Password Manager /&gt;
          </h2>
          <p className="text-sm mt-2">
            Securely store and manage your passwords with ease.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-purple-700 hover:underline hover:[text-shadow:1px_1px_5px_#d8b4fe] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-700 hover:underline hover:[text-shadow:1px_1px_5px_#d8b4fe] transition"
              >
                Contact me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-700 hover:underline hover:[text-shadow:1px_1px_5px_#d8b4fe] transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center sm:items-start"
        >
          <h3 className="font-semibold text-lg mb-2">Connect with me</h3>
          <div className="flex gap-6 items-center">
        
            <a
              href="https://github.com/Arsh-pixel-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:underline hover:[text-shadow:1px_1px_6px_#d8b4fe] transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                className="text-gray-900 hover:text-purple-700"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.865 10.948c.575.106.785-.25.785-.556 
                0-.274-.01-1.002-.015-1.966-3.2.695-3.878-1.543-3.878-1.543-.523-1.33-1.278-1.685-1.278-1.685-1.044-.714.079-.699.079-.699 
                1.154.081 1.76 1.184 1.76 1.184 1.027 1.76 2.695 1.252 3.353.958.104-.744.402-1.253.73-1.541-2.554-.291-5.238-1.278-5.238-5.683 
                0-1.255.45-2.282 1.184-3.087-.119-.29-.513-1.46.112-3.042 0 0 .967-.31 3.17 1.18a11.04 11.04 0 0 1 2.885-.388 
                c.978.005 1.964.132 2.885.388 2.203-1.49 3.17-1.18 3.17-1.18.625 1.582.231 2.752.112 3.042.737.805 
                1.184 1.832 1.184 3.087 0 4.415-2.688 5.388-5.252 5.673.414.357.781 1.07.781 2.157 
                0 1.556-.014 2.812-.014 3.193 0 .308.208.668.79.554A11.503 11.503 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/arsh-mishra-030093325/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-purple-700 hover:underline hover:[text-shadow:1px_1px_6px_#d8b4fe] transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>
          </div>
        </Motion.div>
      </div>

      <div className="bg-purple-300 text-center py-3 text-sm text-gray-700">
        © {new Date().getFullYear()} Password Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
