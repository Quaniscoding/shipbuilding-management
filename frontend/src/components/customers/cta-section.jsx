import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import { PhoneOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function CtaSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-24 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-center text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                        Sẵn sàng trở thành khách hàng tiếp theo?
                    </h3>
                    <p className="text-blue-100 mb-6 text-lg">
                        Hãy liên hệ với chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            type="default"
                            size="large"
                            className="bg-white text-blue-600 border-0 hover:bg-gray-100"
                            icon={<PhoneOutlined />}
                        >
                            Liên hệ ngay
                        </Button>
                        <Button
                            type="default"
                            size="large"
                            className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                            icon={<PlayCircleOutlined />}
                        >
                            Xem video giới thiệu
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
