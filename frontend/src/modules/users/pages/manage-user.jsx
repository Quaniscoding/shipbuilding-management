import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  Popconfirm,
  Select,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";

const initialData = [
  {
    _id: "user_001",
    username: "nguyenvana",
    email: "a@dongtau.com",
    password: "******",
    role: "admin",
    full_name: "Nguyễn Văn A",
    phone: "0901000001",
    createdAt: "2024-06-01",
  },
  {
    _id: "user_002",
    username: "tranthib",
    email: "b@dongtau.com",
    password: "******",
    role: "customer",
    full_name: "Trần Thị B",
    phone: "0901000002",
    createdAt: "2024-06-02",
  },
  {
    _id: "user_003",
    username: "levanc",
    email: "c@dongtau.com",
    password: "******",
    role: "customer",
    full_name: "Lê Văn C",
    phone: "0901000003",
    createdAt: "2024-06-03",
  },
];

export default function ManageUser() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  // Filtered data
  const filteredData = data.filter((u) =>
    u.full_name.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal for create or edit
  const openModal = (record = null) => {
    setEditing(record);
    setModalOpen(true);
    if (record) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  };

  // Handle create/update
  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editing) {
        setData((prev) =>
          prev.map((u) => (u._id === editing._id ? { ...u, ...values } : u))
        );
        toast.success("Cập nhật thành công!");
      } else {
        setData((prev) => [
          ...prev,
          {
            ...values,
            _id: Date.now(),
            createdAt: new Date().toISOString().slice(0, 10),
          },
        ]);
        toast.success("Tạo mới thành công!");
      }
      setModalOpen(false);
      setEditing(null);
      form.resetFields();
    });
  };

  // Handle delete
  const handleDelete = (_id) => {
    setData((prev) => prev.filter((u) => u._id !== _id));
    toast.success("Đã xoá người dùng!");
  };

  // Inline role update
  const handleRoleChange = (value, record) => {
    setData((prev) =>
      prev.map((u) => (u._id === record._id ? { ...u, role: value } : u))
    );
    toast.success("Cập nhật vai trò thành công!");
  };

  const columns = [
    { title: "Tên đăng nhập", dataIndex: "username", key: "username" },
    { title: "Họ tên", dataIndex: "full_name", key: "full_name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
      render: () => "******",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role, record) => (
        <Select
          value={role}
          style={{ minWidth: 110 }}
          onChange={(value) => handleRoleChange(value, record)}
          options={[
            { value: "admin", label: "Quản trị viên" },
            { value: "customer", label: "Khách hàng" },
          ]}
        />
      ),
    },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
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
            placeholder="Tìm kiếm theo họ tên"
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
          Thêm người dùng
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
        title={editing ? "Cập nhật người dùng" : "Thêm người dùng"}
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
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Họ tên"
            name="full_name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Vai trò"
            name="role"
            rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]}
          >
            <Select
              options={[
                { value: "admin", label: "Quản trị viên" },
                { value: "customer", label: "Khách hàng" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
