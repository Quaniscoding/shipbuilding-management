import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "Trang chủ", path: "/" },
  { label: "Giới thiệu", path: "/about-us" },
  { label: "Sản phẩm", path: "/projects" },
  { label: "Khách hàng", path: "/customers" },
  { label: "Media", path: "/media" },
];

export default function PageHeading() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top bar */}
      <div className="bg-black text-white text-xs sm:text-sm flex justify-between items-center px-3 sm:px-4 md:px-12 py-2">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1">
            <FaEnvelope className="mr-1" /> info@dongtau.com
          </span>
          <span className="flex items-center gap-1">
            <FaPhone className="mr-1" /> 0901 234 567
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-1">
            <img
              src="https://flagcdn.com/vn.svg"
              alt="VN"
              className="w-5 h-5 rounded-full"
            />
            <span>Việt</span>
            <FaChevronDown className="ml-1 text-xs" />
          </span>
          <FaUserCircle className="text-lg" />
        </div>
      </div>
      {/* Main nav */}
      <nav className="relative bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-12 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto"
              style={{ minWidth: 40 }}
            />
            <span className="font-bold text-blue-700 text-base sm:text-lg hidden sm:inline">
              HỆ THỐNG QUẢN LÝ ĐÓNG TÀU
            </span>
          </div>
          {/* Desktop nav */}
          <ul className="hidden lg:flex gap-4 xl:gap-8 items-center text-base font-medium text-gray-800">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`hover:text-blue-700 transition ${isActive(item.path)
                    ? "text-blue-700 font-bold underline underline-offset-8"
                    : ""
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className="hidden lg:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Liên hệ
          </a>
          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-2 text-blue-700"
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
          >
            <FaBars size={24} />
          </button>
        </div>
        {/* Mobile nav */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-8 w-auto"
                    style={{ minWidth: 32 }}
                  />
                  <span className="font-bold text-blue-700 text-base">
                    ĐÓNG TÀU
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-700"
                  aria-label="Đóng menu"
                >
                  <FaTimes size={22} />
                </button>
              </div>
              <ul className="flex flex-col gap-1 px-4 py-4 text-base font-medium text-gray-800">
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className={`block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition ${isActive(item.path)
                        ? "text-blue-700 font-bold bg-blue-50"
                        : ""
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="/contact"
                    className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition text-center"
                    onClick={() => setOpen(false)}
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            {/* Click outside to close */}
            <div
              className="flex-1"
              onClick={() => setOpen(false)}
              aria-label="Đóng menu"
            />
          </div>
        )}
      </nav>
    </header>
  );
}
