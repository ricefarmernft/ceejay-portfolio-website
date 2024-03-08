import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioNav(props) {
  return (
    <nav className="flex items-center justify-between">
      {props.header ? (
        <>
          <div className="flex gap-2 md:gap-4">
            <a
              className="text-lg md:text-2xl flex gap-1  items-center  hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
              href="/"
              rel="noreferrer"
            >
              Home
            </a>
            <div className="z-20 relative group hover:text-blue-600 dark:hover:text-teal-300">
              <a
                href="/"
                className="text-lg md:text-2xl transition ease-in-out duration-500"
              >
                Portfolio
              </a>
              <div className="absolute hidden group-hover:block bg-white dark:bg-slate-950 shadow-lg rounded-xl text-sm md:text-base text-black dark:text-white">
                <a
                  href="/portfolio/ohayo-labs"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-teal-300 whitespace-nowrap rounded-t-xl"
                >
                  Ohayo Labs
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
          </div>
        </>
      ) : (
        <a
          className="text-lg md:text-2xl flex gap-1  items-center  hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500"
          href="/"
          rel="noreferrer"
        >
          Home
        </a>
      )}
      {/* Normal Menu */}
      <div className="flex space-x-5 text-lg">
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
            className="hover:text-blue-600 dark:hover:text-teal-300 transition ease-in-out duration-500 "
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
  );
}
