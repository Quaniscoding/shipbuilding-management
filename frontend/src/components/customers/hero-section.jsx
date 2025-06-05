import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 px-4 sm:px-6 lg:px-8"
        >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Khách hàng là <span className="text-blue-800">trung tâm</span>{" "}
                <span className="text-teal-600 italic font-semibold">của chúng tôi</span>
            </h1>
            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                Hơn 500+ khách hàng tin tưởng và hài lòng với dịch vụ đóng tàu chuyên nghiệp của chúng tôi
            </p>
        </motion.div>
    );
}
