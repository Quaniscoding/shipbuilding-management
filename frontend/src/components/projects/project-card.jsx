import React from "react";
import { Card, Button, Tag, Rate } from "antd";
import { EyeOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const getStatusColor = (status) => {
    switch (status) {
        case "Đã hoàn thành": return "green";
        case "Đang sản xuất": return "orange";
        case "Lên kế hoạch": return "blue";
        default: return "default";
    }
};

export default function ProjectCard({ project, onViewDetail }) {
    const [favorite, setFavorite] = React.useState(false);
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card
                hoverable
                cover={
                    <div className="relative overflow-hidden h-48">
                        <img
                            alt={project.name}
                            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCPBuaNk52jSD0dFW1TqFgFFSItsDzm5Bkg&s`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-3 right-3">
                            <Tag color={getStatusColor(project.status)}>{project.status}</Tag>
                        </div>
                    </div>
                }
                actions={[
                    <Button
                        type="text"
                        icon={<EyeOutlined />}
                        onClick={() => onViewDetail(project)}
                    >
                        Xem chi tiết
                    </Button>,
                    <Button
                        type="text"
                        icon={
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    background: favorite ? '#fee2e2' : 'transparent', // đỏ nhạt khi chọn
                                    padding: 4,
                                    transition: 'background 0.2s',
                                }}
                            >
                                <HeartOutlined style={{ color: favorite ? 'red' : undefined, fontSize: 18 }} />
                            </span>
                        }
                        onClick={() => setFavorite(fav => !fav)}
                    >
                        <span style={{ color: favorite ? 'blue' : undefined }}>Yêu thích</span>
                    </Button>,
                    <Button type="primary" icon={<ShoppingCartOutlined />}>Liên hệ</Button>
                ]}
                className="shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
                <Card.Meta
                    title={
                        <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                {project.name}
                            </h4>
                        </div>
                    }
                    description={
                        <div>
                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Rate disabled defaultValue={project.rating} size="small" />
                                    <span className="text-sm text-gray-500">
                                        {project.rating} ({project.reviews})
                                    </span>
                                </div>
                            </div>

                        </div>
                    }
                />
            </Card>
        </motion.div>
    );
}
