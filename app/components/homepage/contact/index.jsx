// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import './contactsection.css'; // Import the CSS file for animations

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative text-white">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Contact Information */}
        <div className="flex-1 lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <a href={`mailto:${personalData.email}`} className="hover:underline text-white">
                {personalData.email}
              </a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>

        {/* Right Side: Heading and Call-to-Action */}
        <div className="flex-1 lg:w-1/4 flex flex-col items-end text-right">
          <h2 className="text-4xl font-semibold text-white lg:text-pink-500 lg:font-bold animate-fadeInUp">
            Contact
          </h2>
          <h3 className="mt-6 text-2xl font-medium text-[#16f2b3] lg:text-3xl lg:font-semibold animate-fadeInUp">
            Feel free to contact me
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
