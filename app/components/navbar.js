"use client";
import { useState } from "react";
import { FaBars, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="hidden md:flex items-center justify-between">
        <div className="text-2xl font-bold">Ceejay Xiong</div>
        {/* Normal Menu */}
        <div className="flex space-x-5 text-lg   ">
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            About
          </a>
          <div className="relative group hover:text-blue-600 dark:hover:text-teal-300">
            <a
              href="#portfolio"
              className=" transition ease-in-out duration-500"
            >
              Portfolio
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg dark:bg-slate-950 rounded-xl text-sm md:text-base text-black dark:text-white ">
              <a
                href="/portfolio/ohayo-labs"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap rounded-t-xl"
              >
                Ohayo Labs
              </a>
              <a
                href="/portfolio/chimkens"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap rounded-t-xl"
              >
                Chimkens
              </a>
              <a
                href="/portfolio/hoomans"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap rounded-t-xl"
              >
                Hoomans
              </a>
              <a
                href="/portfolio/openask"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
              >
                OpenAsk
              </a>
              <a
                href="/portfolio/icebreakers"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
              >
                Icebreakers
              </a>
              <a
                href="/portfolio/forgotten-apes"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
              >
                Forgotten Apes
              </a>
              <a
                href="/portfolio/opensea-refund"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap rounded-b-xl"
              >
                Opensea Refund
              </a>
            </div>
          </div>

          <a
            href="#crypto"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            Crypto
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            Skills
          </a>
          <div className="flex space-x-2">
            <a
              href="https://twitter.com/RiceFarmerNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
            >
              <FaTwitter size={24} />{" "}
            </a>
            <a
              href="https://github.com/RiceFarmerNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
            >
              <FaGithub size={24} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/ceejayxiong/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
            >
              <FaLinkedin size={24} />{" "}
            </a>
          </div>
        </div>
      </nav>

      {/* Burger Menu */}
      <nav className="md:hidden flex justify-between ">
        <div className="text-2xl font-bold">Ceejay Xiong</div>
        <div className="flex gap-3 items-center">
          <a
            href="https://twitter.com/RiceFarmerNFT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/RiceFarmerNFT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ceejayxiong/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          >
            <FaLinkedin size={24} />{" "}
          </a>
          <button
            className="md:hidden hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
            onClick={toggleMenu}
          >
            <FaBars size={24} />
          </button>
          {isMenuOpen && (
            <div className="z-20 absolute top-0 right-0 mt-14 mr-4 p-3 bg-slate-300 dark:bg-slate-950 shadow-md flex flex-col items-start md:hidden rounded-lg gap-1">
              {/* Mobile menu items */}
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
              >
                About
              </a>
              <div className="relative group">
                <a
                  href="#portfolio"
                  className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
                >
                  Portfolio
                </a>
                <div className=" group-hover:block">
                  <a
                    href="/portfolio/ohayo-labs"
                    className="block px-2 py-1  hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    Ohayo Labs
                  </a>
                  <a
                    href="/portfolio/chimkens"
                    className="block px-2 py-1  hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    Chimkens
                  </a>
                  <a
                    href="/portfolio/hoomans"
                    className="block px-2 py-1  hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    Hoomans
                  </a>
                  <a
                    href="/portfolio/openask"
                    className="block px-2 py-1 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    OpenAsk
                  </a>
                  <a
                    href="/portfolio/icebreakers"
                    className="block px-2 py-1 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    Icebreakers
                  </a>
                  <a
                    href="/portfolio/forgotten-apes"
                    className="block px-2 py-1 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap"
                  >
                    Forgotten Apes
                  </a>
                  <a
                    href="/portfolio/opensea-refund"
                    className="block px-2 py-1 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap "
                  >
                    Opensea Refund
                  </a>
                </div>
              </div>
              <a
                href="#crypto"
                className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
              >
                Crypto
              </a>
              <a
                href="#skills"
                className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
              >
                Skills
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
