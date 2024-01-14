import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-screen h-72 md:h-40">
      <div className="w-full h-[90%] md:h-5/6 bg-[#1e212c]">
        <div className="h-full w-5/6 md:w-2/3 pt-4 m-auto">
          <div className="flex px-24 md:px-36 mb-4 h-1/2 w-fit items-center gap-4 m-auto">
            <Link to="" target="_blank">
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
          <div className="flex flex-wrap h-1/2 gap-4 w-fit md:gap-6 m-auto">
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
      <div className="h-[10%] md:h-1/6 w-full bg-[#292c37]"></div>
    </div>
  );
};
export default Footer;
