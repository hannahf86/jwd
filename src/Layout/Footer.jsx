// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import logo from "../Assets/navLogo.webp";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bottom-0 mt-12">
      <div className="mx-16 lg:mx-40">
        <div className="flex items-center mb-8">
          <img src={logo} alt="jorvik web dev viking helment logo" />
          <small className="text-grey text-md ml-3">JORVIK WEB DEV</small>
        </div>

        <div>
          <p className="text-black text-base font-bold">
            Follow us on the socials for updates and offers
          </p>
          <div className="mt-2 mb-16 flex">
            <Link
              to="https://www.facebook.com/profile.php?id=61562515362932"
              target="_blank"
              className="cursor-pointer mr-4">
              <FaFacebookSquare size={40} className="text-green" />
            </Link>
            <Link
              to="https://www.instagram.com/jorvikwebdev/"
              target="_blank"
              className="cursor-pointer">
              <FaInstagramSquare size={40} className="text-green" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-green h-32 w-screen px-40 py-8 flex">
        <a href="/sitemap.xml" target="_blank">
          <small className="text-white text-sm tracking-widest">SITEMAP</small>
        </a>

        <a href="/CookiePolicy.html" target="_blank">
          <small className="text-white text-sm tracking-widest ml-8">
            COOKIE POLICY
          </small>
        </a>

        <a href="/TermsOfUse.html" target="_blank">
          <small className="text-white text-sm tracking-widest ml-8">
            TERMS OF USE
          </small>
        </a>

        <a href="/PrivacyPolicy.html" target="_blank">
          <small className="text-white text-sm tracking-widest ml-8">
            PRIVACY POLICY
          </small>
        </a>
      </div>
    </div>
  );
};

export default Footer;
