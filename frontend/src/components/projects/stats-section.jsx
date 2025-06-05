import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";

export default function StatsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8 mt-16"
        >
            <Row gutter={[24, 24]} className="text-center">
                {[
                    ["500+", "Tàu đã hoàn thành"],
                    ["98%", "Khách hàng hài lòng"],
                    ["50+", "Loại tàu khác nhau"],
                    ["24/7", "Hỗ trợ khách hàng"],
                ].map(([number, label], i) => (
                    <Col xs={12} sm={6} key={i}>
                        <div>
                            <h4 className="text-2xl font-bold text-blue-800 mb-2">{number}</h4>
                            <p className="text-gray-600">{label}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </motion.div>
    );
}
