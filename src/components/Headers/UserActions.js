import React from "react";
import { FaSearch, FaShoppingCart, FaSun, FaUser } from "react-icons/fa";
import styles from "./Header.module.css";

const UserActions = () => {
  return (
    <div className="flex items-center flex-row">
      {/* Tìm kiếm */}
      <div className="flex items-center justify-center h-5 md:h-6 lg:h-7 rounded-lg overflow-hidden border-2 border-gray-300 w-auto focus-within:border-[#4F39F6] duration-75">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          name="search"
          className="searchInput text-gray-700 outline-none flex-grow pl-4 text-[10px] md:text-xs h-full"
          aria-label="Tìm kiếm sản phẩm"
        />
        <button
          className="flex items-center justify-center bg-gray-300 h-full sm:w-9 w-12 border-2 border-gray-300 flex-shrink-0 ml-2"
          aria-label="Tìm kiếm"
        >
          <FaSearch className="text-white text-xs sm:text-base md:text-xl hover:text-black" />
        </button>
      </div>

      {/* Biểu tượng */}
      <div className="flex flex-row gap-4 p-3 items-center flex-shrink-0">
        <a href="#abc" aria-label="Trang cá nhân">
          <FaUser className="socialIcon user text-lg md:text-xl lg:text-2xl text-gray-700 shrink-0" />
        </a>
        <a href="#abc" aria-label="Giỏ hàng">
          <FaShoppingCart className="socialIcon cart text-lg md:text-xl lg:text-2xl text-gray-700 shrink-0" />
        </a>
        <button aria-label="Chế độ sáng/tối">
          <FaSun className="socialIcon sun text-lg md:text-xl lg:text-2xl text-gray-700 shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default UserActions;
