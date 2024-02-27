import {
  FaInstagram,
  FaSquareFacebook,
  FaYoutube,
  FaSquareTwitter,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center p-12 bg-black">
      <div className="flex md:flex-row flex-col items-start justify-between w-full max-w-[1120px] gap-6">
        {/* logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">Shortly</h1>
        </div>
        {/* links */}
        <div className="flex md:flex-row flex-col justify-between items-start md:space-x-24 gap-8">
          {/* link */}
          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-xl font-semibold">Features</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Link Shortening
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Branded Links
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Analytics
              </li>
            </ul>
          </div>
          {/* link */}
          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Blog
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Developers
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Support
              </li>
            </ul>
          </div>
          {/* link */}
          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                About
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Our Team
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Careers
              </li>
              <li className="cursor-pointer hover:scale-110 hover:text-Cyan">
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* icons */}
        <div className="flex gap-5 text-white">
          <FaSquareFacebook
            size={25}
            className="cursor-pointer hover:scale-75 hover:text-Cyan"
          />
          <FaYoutube
            size={25}
            className="cursor-pointer hover:scale-75 hover:text-Cyan"
          />
          <FaSquareTwitter
            size={25}
            className="cursor-pointer hover:scale-75 hover:text-Cyan"
          />
          <FaPinterest
            size={25}
            className="cursor-pointer hover:scale-75 hover:text-Cyan"
          />
          <FaInstagram
            size={25}
            className="cursor-pointer hover:scale-75 hover:text-Cyan"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
