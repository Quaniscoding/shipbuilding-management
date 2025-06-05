import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Badge, Rate, Avatar, Tag } from "antd";
import { StarFilled } from "@ant-design/icons";

export default function ReviewSection({ testimonials }) {
    const TestimonialCard = ({ testimonial }) => (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-full flex flex-col"
        >
            <div className="relative w-full h-48">
                <img
                    alt={testimonial.project}
                    src={testimonial.image}
                    className="h-full w-full object-cover rounded-t-xl"
                />
                <div className="absolute top-3 right-3">
                    <Badge count={<StarFilled className="text-yellow-500" />} />
                </div>
            </div>

            <div className="flex justify-center items-center py-2 bg-gray-50">
                <Rate disabled defaultValue={testimonial.rating} allowHalf className="text-lg" />
                <span className="ml-2 text-blue-700 font-semibold">{testimonial.rating}</span>
            </div>

            <div className="flex items-center gap-3 px-4 mt-2">
                <Avatar size={48} src={testimonial.avatar} />
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 leading-tight">{testimonial.name}</h4>
                    <p className="text-xs text-blue-600 leading-tight">{testimonial.company}</p>
                    <p className="text-xs text-gray-500 leading-tight">{testimonial.position}</p>
                </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed px-4 mt-3 flex-1">
                "{testimonial.content}"
            </p>

            <div className="flex justify-between items-center pt-3 border-t px-4 pb-4 mt-auto">
                <Tag color="blue">{testimonial.project}</Tag>
                <span className="text-xs text-gray-500">{testimonial.date}</span>
            </div>
        </motion.div>
    );
    return (
        <div className="mt-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Khách hàng nói gì về chúng tôi
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Những phản hồi chân thực từ khách hàng về chất lượng dịch vụ và sản phẩm
                </p>
            </motion.div>
            <div className="max-w-7xl mx-auto">
                <Row gutter={[24, 24]} justify="center" align="stretch">
                    {testimonials.map((testimonial) => (
                        <Col xs={24} sm={12} lg={6} key={testimonial.id} className="flex">
                            <div className="flex flex-col w-full h-full">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
