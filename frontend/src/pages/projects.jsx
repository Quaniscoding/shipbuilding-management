import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Card,
    Row,
    Col,
    Input,
    Select,
    Button,
    Tag,
    Rate,
    Pagination,
    Modal,
    Tabs,
    Descriptions,
    Image
} from "antd";
import {
    SearchOutlined,
    FilterOutlined,
    EyeOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    StarFilled
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import HeaderSection from "../components/projects/header-section";
import FilterAndSearch from "../components/projects/filter-and-search";
import ProjectsGrid from "../components/projects/projects-grid";
import StatsSection from "../components/projects/stats-section";
import { mockProjects } from "../modules/auth/mocks/projects";

const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const categories = [
    { value: "all", label: "Tất cả loại tàu" },
    { value: "container", label: "Tàu Container" },
    { value: "tanker", label: "Tàu Chở Dầu" },
    { value: "fishing", label: "Tàu Cá" },
    { value: "cruise", label: "Tàu Du Lịch" },
    { value: "bulk", label: "Tàu Hàng Khô" },
    { value: "rescue", label: "Tàu Cứu Hộ" }
];



const ProjectDetailModal = ({ project, visible, onClose }) => {
    if (!project) return null;

    return (
        <Modal
            title={project.name}
            open={visible}
            onCancel={onClose}
            footer={[
                <Button key="contact" type="primary" size="large" className="bg-blue-600">
                    Liên hệ báo giá
                </Button>,
                <Button key="favorite" size="large" icon={<HeartOutlined />}>
                    Thêm vào yêu thích
                </Button>
            ]}
            width={800}
        >
            <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin chi tiết" key="1">
                    <Row gutter={24}>
                        <Col span={12}>
                            <Image
                                width="100%"
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center"
                                alt={project.name}
                                className="rounded-lg"
                            />
                        </Col>
                        <Col span={12}>
                            <div className="space-y-4">
                                <div>
                                    <Tag color="blue" className="mb-2">{project.status}</Tag>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Rate disabled defaultValue={project.rating} size="small" />
                                        <span className="text-sm text-gray-500">
                                            {project.rating}/5 ({project.reviews} đánh giá)
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Mô tả</h4>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tab="Thông số kỹ thuật" key="2">
                    <Descriptions bordered column={2}>
                        <Descriptions.Item label="Chiều dài">{project.specs.length}</Descriptions.Item>
                        <Descriptions.Item label="Chiều rộng">{project.specs.width}</Descriptions.Item>
                        <Descriptions.Item label="Trọng tải">{project.specs.capacity}</Descriptions.Item>
                        <Descriptions.Item label="Động cơ">{project.specs.engine}</Descriptions.Item>
                    </Descriptions>
                </TabPane>
            </Tabs>
        </Modal>
    );
};

export default function ProjectPage() {
    const [projects, setProjects] = useState(mockProjects);
    const [filteredProjects, setFilteredProjects] = useState(mockProjects);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(6);

    // Filter and search logic
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        filterProjects(value, searchTerm);
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        filterProjects(selectedCategory, value);
    };

    const filterProjects = (category, search) => {
        let filtered = projects;

        if (category !== "all") {
            filtered = filtered.filter(project => project.category === category);
        }

        if (search) {
            filtered = filtered.filter(project =>
                project.name.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredProjects(filtered);
        setCurrentPage(1);
    };

    const handleViewDetail = (project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    // Pagination
    const startIndex = (currentPage - 1) * pageSize;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + pageSize);

    return (
        <div className="bg-gray-50 min-h-0">
            {/* Header Section */}
            <HeaderSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter and Search Section */}
                <FilterAndSearch
                    categories={categories}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    handleSearch={handleSearch}
                    filteredProjects={filteredProjects}
                />

                {/* Projects Grid */}
                <ProjectsGrid
                    currentProjects={currentProjects}
                    handleViewDetail={handleViewDetail}
                />

                {/* Pagination */}
                {filteredProjects.length > pageSize && (
                    <div className="text-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={filteredProjects.length}
                            onChange={setCurrentPage}
                            showSizeChanger={false}
                            showQuickJumper
                            showTotal={(total, range) =>
                                `${range[0]}-${range[1]} của ${total} dự án`
                            }
                        />
                    </div>
                )}

                {/* Stats Section */}
                <StatsSection />
            </div>

            {/* Project Detail Modal */}
            <ProjectDetailModal
                project={selectedProject}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </div>
    );
}