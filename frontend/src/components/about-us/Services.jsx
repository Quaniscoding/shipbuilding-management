import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#2563eb" />
        <path
          d="M8 12l2 2 4-4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc về quản lý, bảo trì và vận hành tàu.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#2563eb" />
        <path
          d="M12 8v4l3 3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Bàn giao nhanh chóng",
    desc: "Quy trình đóng tàu, bảo trì và bàn giao được tối ưu, đảm bảo đúng tiến độ cho khách hàng.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#2563eb" />
        <path
          d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quản lý chuyên nghiệp",
    desc: "Ứng dụng công nghệ hiện đại trong quản lý, giám sát và vận hành toàn bộ quy trình đóng tàu.",
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 bg-white rounded-xl shadow-md p-6 md:p-12"
    >
      <div className="text-center mb-8">
        <div className="text-blue-700 font-semibold flex items-center justify-center gap-2 mb-2">
          <span>Vì sao chọn chúng tôi</span>
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
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Dịch vụ của chúng tôi
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Chúng tôi cung cấp giải pháp toàn diện cho ngành đóng tàu: từ tư vấn,
          thiết kế, thi công đến bảo trì và quản lý vận hành.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition bg-gray-50"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
