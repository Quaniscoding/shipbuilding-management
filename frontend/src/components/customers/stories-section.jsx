import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Card, Statistic, Tag } from "antd";
import { TrophyOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function StoriesSection({ successStories }) {
    const SuccessStoryCard = ({ story, index }) => (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
        >
            <Card
                className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                cover={
                    <div className="relative">
                        <img
                            alt={story.title}
                            src={story.image}
                            className="h-56 w-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <Tag color="gold" className="text-sm font-medium">
                                <TrophyOutlined className="mr-1" />
                                Thành công
                            </Tag>
                        </div>
                    </div>
                }
                bodyStyle={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}
            >
                <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                        <p className="text-blue-600 font-medium">{story.customer}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                    <Row gutter={16} className="text-center">

                        <Col span={12}>
                            <Statistic
                                title="Thời gian"
                                value={story.duration}
                                valueStyle={{ fontSize: '16px', color: '#52c41a' }}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="text-center">
                                <div className="text-16px font-semibold text-orange-500">5★</div>
                                <div className="text-xs text-gray-500">Đánh giá</div>
                            </div>
                        </Col>
                    </Row>
                    <div className="space-y-2 mt-2">
                        <h4 className="font-semibold text-gray-800">Thành tựu đạt được:</h4>
                        {story.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <CheckCircleOutlined className="text-green-500" />
                                <span className="text-sm text-gray-700">{achievement}</span>
                            </div>
                        ))}
                    </div>
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
                    Câu chuyện thành công
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Những dự án tiêu biểu và thành công mà chúng tôi đã thực hiện cùng khách hàng
                </p>
            </motion.div>
            <div className="max-w-7xl mx-auto">
                <Row gutter={[24, 24]} justify="center" align="stretch">
                    {successStories.map((story, index) => (
                        <Col xs={24} lg={8} key={story.id} className="flex">
                            <div className="flex flex-col w-full h-full">
                                <SuccessStoryCard story={story} index={index} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
