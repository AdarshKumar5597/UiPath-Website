import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-screen h-40 bg-[#1e212c]">
      <div className="h-5/6 w-full">
        <div className="h-full w-1/3 pt-4 m-auto">
          <div className="flex px-36 mb-4 h-1/2 w-full items-center gap-4">
            <Link to="https://google.com" target="_blank">
              <FaFacebookF style={{ color: "white" }} size={18} />
            </Link>
            <Link to="" target="_blank">
              <BsTwitterX style={{ color: "white" }} size={18} />
            </Link>
            <Link to="" target="_blank">
              <FaYoutube style={{ color: "white" }} size={22} />
            </Link>
            <Link to="" target="_blank">
              <FaTelegramPlane style={{ color: "white" }} size={22} />
            </Link>
            <Link to="" target="_blank">
              <IoLogoInstagram style={{ color: "white" }} size={18} />
            </Link>
            <Link to="" target="_blank">
              <FaLinkedinIn style={{ color: "white" }} size={18} />
            </Link>
          </div>
          <div className="flex h-1/2 w-full gap-6">
            <Link to="/" className="text-white">
              SITE MAP
            </Link>
            <Link to="/" className="text-white">
              About Us
            </Link>
            <Link to="/" className="text-white">
              Courses
            </Link>
            <Link to="/" className="text-white">
              Events
            </Link>
            <Link to="/" className="text-white">
              Blogs
            </Link>
            <Link to="/" className="text-white">
              Contacts
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full bg-[#292c37]"></div>
    </div>
  );
};
export default Footer;
