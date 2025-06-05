import React from "react";
import { motion } from "framer-motion";
import { FaShip, FaClock, FaGlobe } from "react-icons/fa";

const services = [
  {
    title: "Đóng tàu nhanh",
    icon: <FaShip className="text-2xl mb-3" />,
  },
  {
    title: "Tận nơi – Đúng hẹn",
    icon: <FaClock className="text-2xl mb-3" />,
  },
  {
    title: "Vận chuyển quốc tế",
    icon: <FaGlobe className="text-2xl mb-3" />,
  },
];

function ServiceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`${i === 0 ? "bg-blue-900 text-white" : "bg-white border text-gray-800"
            } rounded-xl p-5 shadow transition-transform`}
        >
          <div className="flex flex-col items-start">
            {service.icon}
            <h4 className="text-base font-semibold mb-2">{service.title}</h4>
            <p className="text-sm mb-3">
              Dịch vụ {service.title.toLowerCase()} với độ tin cậy cao.
            </p>
            <span className="text-lg">↗</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Quản lý <span className="text-blue-800">đóng tàu</span>{" "}
          <span className="text-teal-600 italic font-semibold">thông minh</span>
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Tối ưu tiến độ, chi phí và vận hành toàn bộ quy trình đóng tàu.
        </p>
      </motion.div>

      {/* Banner with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 px-4 sm:px-6 lg:px-20"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/hinhtau.jpg"
            alt="Ship"
            className="w-full h-[250px] sm:h-[320px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-6 py-4 bg-gradient-to-t from-black/40 via-transparent to-transparent">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-full px-4 py-2 shadow text-sm font-medium flex items-center gap-2"
            >
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="user"
                className="w-6 h-6 rounded-full"
              />
              +10M Người dùng
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-full px-4 py-2 shadow text-sm font-medium flex items-center gap-2"
            >
              ⭐ 845K+ (4.5 Đánh giá)
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="text-center mt-20 px-4 sm:px-6">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-2"
        >
          Tối ưu tuyến đóng tàu
        </motion.h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Theo dõi vật tư, nhân lực và thời gian để tiết kiệm chi phí và tối ưu
          hiệu quả.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {["Đăng ký dự án", "Quản lý hồ sơ", "Bàn giao tàu"].map(
            (title, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white border rounded-xl p-5 text-left shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm mb-3">
                  Chi tiết quy trình {title.toLowerCase()}.
                </p>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Xem thêm →
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-24 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-left">
            Dịch vụ đóng tàu toàn diện
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold"
          >
            Xem tất cả dịch vụ
          </motion.button>
        </div>
        <p className="text-gray-600 text-left mb-10 max-w-2xl">
          Từ thi công đến bàn giao, chúng tôi đảm bảo hiệu quả và tiết kiệm.
        </p>

        {/* Call the fixed component */}
        <ServiceCards />
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mt-24 px-4 sm:px-6"
      >
        <img
          src="/hinhtau3.jpg"
          alt="Cảng biển"
          className="w-full h-[250px] sm:h-[320px] lg:h-[360px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center max-w-2xl">
            Tối ưu chuỗi cung ứng, nâng cao hiệu suất và giảm thiểu rủi ro.
          </h3>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-16 mb-20 px-4 sm:px-6"
      >
        {[
          ["10M+", "Người dùng"],
          ["845K+", "Khách hàng hài lòng"],
          ["100", "Chi nhánh toàn cầu"],
          ["600+", "Dự án hoàn thành"],
        ].map(([number, label], i) => (
          <div key={i}>
            <h4 className="text-xl font-bold text-blue-800">{number}</h4>
            <p className="text-gray-500 text-sm">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
