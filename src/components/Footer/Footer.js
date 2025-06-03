import React from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import styles from "@/components/Header.module.css";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] text-black py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Giới thiệu công ty */}
          <div>
            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
              Về NuHau&Co.
            </h5>
            <p className="text-xs md:text-sm text-black text-justify">
              Tại NuHau&Co. chúng tôi tin rằng thời trang là cách bạn kể câu
              chuyện riêng của mình. Từ những thiết kế tối giản hàng ngày đến
              các item thể thao năng động, mỗi sản phẩm được chọn lọc kỹ lưỡng
              nhằm mang đến sự thoải mái, phong cách và cá tính. Với cam kết
              chất lượng và dịch vụ tận tâm, NuHau&Co. không chỉ là nơi mua sắm
              – mà là nơi bạn tìm thấy phiên bản tốt nhất của chính mình.
            </p>
          </div>

          {/* Dịch vụ khách hàng */}
          <div className="md:mx-auto">
            <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4">
              Dịch vụ khách hàng
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link
                  href="#faq"
                  className="text-black hover:text-gray-400"
                  aria-label="Câu hỏi thường gặp"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  href="#support"
                  className="text-black hover:text-gray-400"
                  aria-label="Hỗ trợ khách hàng"
                >
                  Hỗ trợ khách hàng
                </Link>
              </li>
              <li>
                <Link
                  href="#returns"
                  className="text-black hover:text-gray-400"
                  aria-label="Chính sách đổi trả"
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-black hover:text-gray-400"
                  aria-label="Điều khoản sử dụng"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Chăm sóc khách hàng */}
          <div>
            <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4">
              Chăm sóc khách hàng
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li className="text-black">
                <strong>Số điện thoại:</strong> 0833115510 - 0878845757
              </li>
              <li className="text-black">
                <strong>Email:</strong> hausu999@gmail.com
              </li>
              <li className="text-black">
                <strong>Địa chỉ:</strong> 748/33 Thống Nhất, phường 15, Gò Vấp,
                TP Hồ Chí Minh
              </li>
              <SocialIcons />
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="text-xs md:text-sm">
            © 2025 NuHau&Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
