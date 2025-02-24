"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #C1E0E4 37.5%, #9CCDD4 60%, #6B9BA3 100%)",
        minHeight: "300px",
      }}
      className=" flex justify-around items-center  text-[#022A49]"
    >
      {/* Left Section: Logo & Download Links */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
        <p className="text-md my-3 font-semibold">Learn, Play & Grow!</p>
        <div className="flex gap-2  justify-center md:justify-start">
          <a>
            <Image
              src="/images/stores.svg"
              alt="Google Play"
              width={200}
              height={50}
            />
          </a>
        </div>
      </div>

      {/* Middle Section: Resources */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="font-semibold text-green-700">Resources</h3>
        <ul className=" space-y-2 font-semibold">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section: Contact & Social Links */}
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-green-700">Stay Connected</h3>
        <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-3">
          📧 phonics@info.com
        </p>
        <p className="mt-3 text-green-700 font-semibold">Follow us on</p>
        <div className="flex justify-center md:justify-start gap-4 mt-2 text-gray-900">
          <FaYoutube className="text-lg cursor-pointer hover:text-red-600" />
          <FaFacebook className="text-lg cursor-pointer hover:text-blue-600" />
          <FaInstagram className="text-lg cursor-pointer hover:text-pink-500" />
          <FaLinkedin className="text-lg cursor-pointer hover:text-blue-700" />
        </div>
      </div>
    </footer>
  );
}
