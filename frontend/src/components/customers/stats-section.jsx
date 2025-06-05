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
            className="mt-16 px-4 sm:px-6 lg:px-8 flex justify-center"
        >
            <div className="w-full max-w-6xl">
                <Row gutter={[24, 24]}>
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
                            <div className="text-gray-600">Khách hàng</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                            <div className="text-gray-600">Hài lòng</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-600 mb-2">4.8★</div>
                            <div className="text-gray-600">Đánh giá</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                            <div className="text-gray-600">Dự án</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </motion.div>
    );
}
