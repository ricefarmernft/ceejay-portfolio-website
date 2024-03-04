import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <a
          className="text-base md:text-xl flex gap-1  items-center  hover:text-blue-600 transition ease-in-out duration-500"
          href="mailto:ceejayxiong@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact
          <IoIosMail size={24} />
        </a>
        {/* Normal Menu */}
        <div className="flex space-x-5 text-lg">
          <div className="flex space-x-2">
            <a
              href="https://twitter.com/RiceFarmerNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition ease-in-out duration-500"
            >
              <FaTwitter size={24} />{" "}
            </a>
            <a
              href="https://github.com/RiceFarmerNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition ease-in-out duration-500 "
            >
              <FaGithub size={24} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/ceejayxiong/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition ease-in-out duration-500"
            >
              <FaLinkedin size={24} />{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
