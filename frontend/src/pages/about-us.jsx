import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/about-us/Banner";
import Services from "../components/about-us/Services";
import TeamSection from "../components/about-us/TeamSection";
import SuccessStorySection from "../components/about-us/SuccessStorySection";

export default function AboutUs() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Banner */}
      <Banner />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="/images/about-us-2.png"
              alt="ship"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="text-blue-700 font-semibold mb-2 flex items-center gap-2">
              <span>Giới thiệu</span>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
              Giải pháp quản lý đóng tàu hiện đại, chuyên nghiệp
            </h2>
            <p className="text-gray-700 mb-4">
              Hệ thống quản lý đóng tàu giúp tối ưu hóa quy trình thiết kế, sản
              xuất, bảo trì và vận hành tàu biển. Chúng tôi cam kết mang lại sự
              minh bạch, hiệu quả và an toàn cho mọi dự án, đáp ứng nhu cầu đa
              dạng của khách hàng trong và ngoài nước.
            </p>
            <p className="text-gray-700 mb-6">
              Đội ngũ kỹ sư và chuyên gia nhiều năm kinh nghiệm luôn đồng hành
              cùng khách hàng, đảm bảo chất lượng và tiến độ từng công trình.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition"
            >
              Xem chi tiết
            </motion.button>
          </motion.div>
        </div>
        {/* Services */}
        <Services />
        {/* Team Section */}
        <TeamSection />
        {/* Success Story Section */}
        <SuccessStorySection />
      </div>
    </div>
  );
}
