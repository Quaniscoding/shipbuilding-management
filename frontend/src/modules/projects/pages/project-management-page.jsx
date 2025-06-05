import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Modal,
  Form,
  Table,
  Select,
  Space,
  Popconfirm,
  DatePicker,
} from "antd";

import { initialData } from "../mocks/projects";
import { toast } from "react-toastify";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
export default function ProjectManagementPage() {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editing, setEditing] = useState(null);
  const [data, setData] = useState(initialData);
  const handleDelete = (_id) => {
    setData((prev) => prev.filter((u) => u._id !== _id));
    toast.success("Đã xoá người dùng!");
  };
  // Filter dữ liệu theo tên
  const filteredData = data.filter((item) =>
    item.project_name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (record = null) => {
    setEditing(record);
    if (record) {
      form.setFieldsValue(record);
    }
    setModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editing) {
          // Cập nhật
          const updatedData = data.map((item) =>
            item._id === editing._id ? { ...item, ...values } : item
          );
          setData(updatedData);
        } else {
          // Tạo mới
          const newUser = { ...values, _id: Date.now().toString() };
          setData([...data, newUser]);
        }
        setModalOpen(false);
        form.resetFields();
        setEditing(null);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const columns = [
    { title: "ID dự án", dataIndex: "_id", key: "_id" },
    { title: "ID khách hàng", dataIndex: "customer_id", key: "customer_id" },
    { title: "Tên dự án", dataIndex: "project_name", key: "project_name" },
    { title: "Kiểu tàu", dataIndex: "ship_type", key: "ship_type" },
    { title: "Trạng thái", dataIndex: "status", key: "status" },
    { title: "Ngày bắt đầu", dataIndex: "start_date", key: "start_date" },
    {
      title: "Ngày kết thúc dự án",
      dataIndex: "estimated_end_date",
      key: "estimated_end_date",
    },
    {
      title: "Giai đoạn hiện tại",
      dataIndex: "current_phase",
      key: "current_phase",
    },
    {
      title: "Ghi chú",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => openModal(record)}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn chắc chắn muốn xoá?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <Button icon={<DeleteOutlined />} size="small" danger>
              Xoá
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow container mx-auto mt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Tìm kiếm theo dự án"
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
            allowClear
          />
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Tạo dự án
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        bordered
        scroll={{ x: "max-content" }}
      />

      <Modal
        title={editing ? "Cập nhật dự án" : "Tạo dự án"}
        open={modalOpen}
        onOk={handleOk}
        onCancel={() => {
          setModalOpen(false);
          setEditing(null);
          form.resetFields();
        }}
        okText={editing ? "Cập nhật" : "Tạo mới"}
        cancelText="Huỷ"
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ role: "customer" }}
        >
          <Form.Item
            label="Tên dự án"
            name="project_name"
            rules={[{ required: true, message: "Vui lòng nhập tên dự án!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Loại tàu"
            name="ship_type"
            rules={[{ required: true, message: "Vui lòng nhập loại tàu!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: "Vui lòng nhập trạng thái" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Ngày bắt đầu">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Ngày kết thúc dự kiến">
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Giai đoạn hiện tại"
            name="current_phase"
            rules={[
              { required: true, message: "Vui lòng nhập giai đoạn hiện tại!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Được tạo vào ngày">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
