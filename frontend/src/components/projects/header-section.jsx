import React from 'react'
import { motion } from 'framer-motion'

export default function HeaderSection() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-sm"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Danh mục <span className="text-blue-800">dự án</span>{" "}
                            <span className="text-teal-600 italic font-semibold">đóng tàu</span>
                        </h1>
                        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                            Khám phá bộ sưu tập tàu thuyền đa dạng với công nghệ hiện đại và chất lượng vượt trội
                        </p>
                    </div>
                </div>
            </motion.div></div>
    )
}
