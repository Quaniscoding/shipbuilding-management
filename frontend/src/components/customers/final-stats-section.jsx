import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";

export default function FinalStatsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 mb-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto text-center">
                <Row gutter={[24, 24]}>
                    {[
                        { number: "15+", label: "Năm kinh nghiệm" },
                        { number: "99.5%", label: "Tỷ lệ giao hàng đúng hẹn" },
                        { number: "50+", label: "Đối tác quốc tế" },
                        { number: "24/7", label: "Hỗ trợ khách hàng" }
                    ].map((stat, index) => (
                        <Col xs={12} sm={6} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="text-2xl font-bold text-blue-800 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </motion.div>
    );
}
