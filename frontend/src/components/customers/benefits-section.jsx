import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function BenefitsSection({ customerBenefits }) {
    const BenefitCard = ({ benefit, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
        >
            <Card
                className="h-full text-center shadow-sm hover:shadow-lg transition-all duration-300 border-0"
                bodyStyle={{ padding: '32px 24px' }}
            >

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                </p>
                <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                            <CheckCircleOutlined className="text-green-500 text-sm" />
                            <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </motion.div>
    );
    return (
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Quyền lợi của khách hàng
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Chúng tôi cam kết mang đến những giá trị và quyền lợi tốt nhất cho khách hàng
                </p>
            </motion.div>
            <div className="max-w-7xl mx-auto">
                <Row gutter={[24, 24]} justify="center" align="stretch">
                    {customerBenefits.map((benefit, index) => (
                        <Col xs={24} sm={12} lg={6} key={index} className="flex">
                            <div className="flex flex-col w-full h-full">
                                <BenefitCard benefit={benefit} index={index} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
