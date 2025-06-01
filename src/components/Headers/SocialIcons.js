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
import styles from "./Header.module.css";

function SocialIcons() {
  return (
    <nav className="w-full flex items-center justify-center sm:justify-between">
      <div className="flex flex-nowrap gap-4 sm:gap-2 items-center justify-center">
        <a
          href="https://www.facebook.com/hnhuwhaauu.2002/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="socialIcon facebook" />
        </a>
        <a
          href="https://m.me/hnhuwhaauu.2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
        >
          <FaFacebookMessenger className="socialIcon messenger" />
        </a>
        <a
          href="https://www.instagram.com/hnhuwhaauu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="socialIcon instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@hnhuwhaauu2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <AiFillTikTok className="socialIcon tiktok" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hnhuhau1702@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <SiGmail className="socialIcon email" />
        </a>
        <a href="tel:+84833115510" aria-label="Phone">
          <MdLocalPhone className="socialIcon phone" />
        </a>
        <a
          href="https://www.youtube.com/@nhuhau1702"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <IoLogoYoutube className="socialIcon youtube" />
        </a>
      </div>
    </nav>
  );
}

export default SocialIcons;
