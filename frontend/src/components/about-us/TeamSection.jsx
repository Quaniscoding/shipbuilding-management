import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <div className="text-blue-700 font-semibold flex items-center justify-center gap-2 mb-2">
          <span>Đội ngũ của chúng tôi</span>
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
          Đội ngũ tận tâm & chuyên nghiệp
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Đội ngũ kỹ sư, quản lý và chuyên gia giàu kinh nghiệm, luôn đồng hành
          cùng khách hàng trong mọi dự án đóng tàu.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card thành viên */}
        {[
          {
            name: "Nguyễn Văn Hải",
            role: "Kỹ sư trưởng",
            img: "/images/team-1.png",
            social: [
              { icon: "fab fa-facebook-f", link: "#" },
              { icon: "fab fa-linkedin-in", link: "#" },
            ],
          },
          {
            name: "Trần Minh Quân",
            role: "Quản lý dự án",
            img: "/images/team-2.png",
            social: [
              { icon: "fab fa-facebook-f", link: "#" },
              { icon: "fab fa-linkedin-in", link: "#" },
            ],
          },
          {
            name: "Lê Thị Hồng",
            role: "Chuyên gia thiết kế",
            img: "/images/team-3.png",
            social: [
              { icon: "fab fa-facebook-f", link: "#" },
              { icon: "fab fa-linkedin-in", link: "#" },
            ],
          },
          {
            name: "Phạm Quốc Duy",
            role: "Chuyên viên bảo trì",
            img: "/images/team-4.png",
            social: [
              { icon: "fab fa-facebook-f", link: "#" },
              { icon: "fab fa-linkedin-in", link: "#" },
            ],
          },
        ].map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow p-5 flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <h4 className="font-semibold text-lg text-gray-900">
              {member.name}
            </h4>
            <p className="text-blue-700 text-sm mb-3">{member.role}</p>
            <div className="flex gap-3">
              {member.social.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  className="text-blue-600 hover:text-blue-800 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
