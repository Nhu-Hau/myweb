import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import styles from "@/components/Header.module.css";

const UserActions = () => {
  return (
    <div className="flex flex-row gap-4 items-center flex-shrink-0">
      <a href="#abc" aria-label="Tìm kiếm">
        <FiSearch className="userAction search text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 shrink-0" />
      </a>
      <a href="#abc" aria-label="Trang cá nhân">
        <FaRegUser className="userAction user text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 shrink-0" />
      </a>
      <a href="#abc" aria-label="Giỏ hàng">
        <FiShoppingCart className="userAction cart text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 shrink-0" />
      </a>
      <button aria-label="Chế độ sáng/tối">
        <FiSun className="userAction sun text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 shrink-0" />
      </button>
    </div>
  );
};

export default UserActions;
