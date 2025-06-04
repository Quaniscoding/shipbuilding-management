import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function PageFooter() {
  return (
    <footer className="relative bg-[#0a3576] text-white mt-40 pb-0">
      {/* Mailing list absolute over footer */}
      <div className="absolute left-1/2 -top-20 w-full max-w-5xl -translate-x-1/2 z-20 px-4">
        <div className="bg-[url('/images/footer-bg.png')] bg-cover bg-center rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg border border-blue-100 backdrop-blur-sm">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
              Đăng ký nhận thông tin mới nhất
            </h3>
            <p className="text-black">
              Hãy để lại email để nhận thông báo về các dự án và tin tức đóng
              tàu mới nhất.
            </p>
          </div>
          <form className="flex w-full md:w-auto max-w-md md:ml-8 bg-white p-2">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="rounded-lg px-4 py-2 w-full md:w-64 outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Logo & social */}
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-14 mb-4" />
          <p className="mb-4 text-white/80">
            Chúng tôi đam mê phát triển giải pháp quản lý đóng tàu hiện đại,
            chất lượng cao cho khách hàng.
          </p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaPinterestP />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Liên kết nhanh</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/products" className="hover:text-white">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Tin tức
              </a>
            </li>
            <li>
              <a href="/photos" className="hover:text-white">
                Hình ảnh
              </a>
            </li>
            <li>
              <a href="/videos" className="hover:text-white">
                Video
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-white">
                Tuyển dụng
              </a>
            </li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h4 className="font-bold text-lg mb-3">Khám phá</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/about-us" className="hover:text-white">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white">
                Sự kiện
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog & Tin tức
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white">
                Khóa học
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-3">Liên hệ</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                44A, Tầng 1, Đường Sông Hàn, Quận Hải Châu, Đà Nẵng, Việt Nam
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>0901 234 567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@dongtau.com</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-[#092a5c] text-center text-white/70 text-xs py-4 px-2 rounded-b-lg">
        ©Copyright 2025 - Hệ thống quản lý đóng tàu. Thiết kế & phát triển bởi
        Đội ngũ Dev.
      </div>
    </footer>
  );
}
