import React from "react";
import { Footer } from "flowbite-react";
import {
  FaBuilding,
  FaUserTie,
  FaFileAlt,
  FaNewspaper,
  FaDiscord,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaDownload,
  FaApple,
  FaAndroid,
  FaWindows,
  FaApplePay,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  function FooterComponent() {
    return (
      <Footer className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold relative overflow-hidden">
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Society" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaBuilding /> <p>About Us</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaUserTie /> <p>Leadership</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaFileAlt /> <p>Projects</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaNewspaper /> <p>Blog</p>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Community" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaDiscord /> <p>Discord</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaTwitter /> <p>Twitter</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaFacebook /> <p>Facebook</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaInstagram /> <p>Instagram</p>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <p>Privacy Policy</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <p>Licensing</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <p>Terms &amp; Conditions</p>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaApple size={22} /> <p>iOS</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaAndroid size={22} /> <p>Android</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaWindows size={22} /> <p>Windows</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#">
                  <div className="flex items-center gap-x-2 text-lg">
                    <FaApplePay size={33} /> <p>MacOS</p>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between footer-bottom relative z-10">
            <Footer.Copyright
              href="#"
              by="UiPath"
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={FaFacebook} />
              <Footer.Icon href="#" icon={FaInstagram} />
              <Footer.Icon href="#" icon={FaTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }

  return (
    <div className="relative">
      <FooterComponent />
    </div>
  );
};

export default FooterSection;
