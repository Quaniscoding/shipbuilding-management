import React from "react";
import { motion } from "framer-motion";

export default function SuccessStorySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-16 bg-[#f4f7fb] rounded-xl shadow p-6 md:p-12"
    >
      <div className="text-center mb-8">
        <div className="text-blue-700 font-semibold flex items-center justify-center gap-2 mb-2">
          <span>Thành tựu nổi bật</span>
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
          Thành công của chúng tôi
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Chúng tôi tự hào với những con số ấn tượng, là minh chứng cho sự tin
          tưởng của khách hàng và đối tác trong lĩnh vực đóng tàu.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-blue-700">
            30k+
          </span>
          <span className="text-gray-600 mt-2 text-sm text-center">
            Nhân sự
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-blue-700">
            500k+
          </span>
          <span className="text-gray-600 mt-2 text-sm text-center">
            Dự án hoàn thành
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-blue-700">
            20+
          </span>
          <span className="text-gray-600 mt-2 text-sm text-center">
            Năm kinh nghiệm
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-blue-700">
            98%
          </span>
          <span className="text-gray-600 mt-2 text-sm text-center">
            Khách hàng hài lòng
          </span>
        </div>
      </div>
    </motion.div>
  );
}
