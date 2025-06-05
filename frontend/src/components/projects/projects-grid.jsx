import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";

export default function ProjectsGrid({ currentProjects, handleViewDetail }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
        >
            <Row gutter={[24, 24]}>
                {currentProjects.map((project, index) => (
                    <Col xs={24} sm={12} lg={8} key={project.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                project={project}
                                onViewDetail={handleViewDetail}
                            />
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </motion.div>
    );
}
