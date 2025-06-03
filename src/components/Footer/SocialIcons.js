import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io5";

function SocialIcons() {
  return (
    <nav className="w-full flex items-center">
      <div className="flex flex-nowrap gap-4 sm:gap-2 items-center justify-center">
        <a
          href="https://www.facebook.com/hnhuwhaauu.2002/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaFacebookSquare className="socialIcon facebook" />
          </span>
        </a>
        <a
          href="https://m.me/hnhuwhaauu.2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaFacebookMessenger className="socialIcon messenger" />
          </span>
        </a>
        <a
          href="https://www.instagram.com/hnhuwhaauu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <FaInstagram className="socialIcon instagram" />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@hnhuwhaauu2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <AiFillTikTok className="socialIcon tiktok" />
          </span>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hnhuhau1702@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <SiGmail className="socialIcon email" />
          </span>
        </a>
        <a href="tel:+84833115510" aria-label="Phone">
          <span className="w-6 h-6 flex items-center justify-center">
            <MdLocalPhone className="socialIcon phone" />
          </span>
        </a>
        <a
          href="https://www.youtube.com/@nhuhau1702"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <IoLogoYoutube className="socialIcon youtube" />
          </span>
        </a>
      </div>
    </nav>
  );
}

export default SocialIcons;
