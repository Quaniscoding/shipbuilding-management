import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Select, Input } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

export default function FilterAndSearch({
    categories,
    selectedCategory,
    handleCategoryChange,
    handleSearch,
    filteredProjects
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
            <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={12} md={8}>
                    <div className="flex items-center gap-2">
                        <FilterOutlined className="text-gray-500" />
                        <Select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full"
                            size="large"
                        >
                            {categories.map(cat => (
                                <Option key={cat.value} value={cat.value}>
                                    {cat.label}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={10}>
                    <Search
                        placeholder="Tìm kiếm dự án..."
                        allowClear
                        enterButton={<SearchOutlined />}
                        size="large"
                        onSearch={handleSearch}
                        onChange={(e) => !e.target.value && handleSearch("")}
                    />
                </Col>
                <Col xs={24} md={6}>
                    <div className="text-right">
                        <span className="text-gray-600">
                            Tìm thấy <strong>{filteredProjects.length}</strong> dự án
                        </span>
                    </div>
                </Col>
            </Row>
        </motion.div>
    );
}