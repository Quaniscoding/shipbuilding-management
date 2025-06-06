import React, { useState } from "react";
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
  Progress,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { initialData } from "../mocks/phases";

const { Option } = Select;

export default function PhasesManagementPage() {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editing, setEditing] = useState(null);

  // Lấy mảng phases ở index 0 làm dữ liệu ban đầu
  const [data, setData] = useState(initialData[0] || []);

  const openModal = (record = null) => {
    setEditing(record);
    if (record) {
      form.setFieldsValue({
        ...record,
        start_date: dayjs(record.start_date),
        end_date: dayjs(record.end_date),
        assigned_employees: record.assigned_employees?.join(", "),
      });
    } else {
      form.resetFields();
    }
    setModalOpen(true);
  };

  const handleDelete = (_id) => {
    setData((prev) => prev.filter((item) => item._id !== _id));
    toast.success("Đã xoá giai đoạn!");
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const formatted = {
        ...values,
        start_date: values.start_date.format("YYYY-MM-DD"),
        end_date: values.end_date.format("YYYY-MM-DD"),
        assigned_employees: values.assigned_employees
          ? values.assigned_employees
              .split(",")
              .map((id) => id.trim())
              .filter((id) => id !== "")
          : [],
        progress_percent: Number(values.progress_percent),
      };

      if (editing) {
        const updated = data.map((item) =>
          item._id === editing._id ? { ...item, ...formatted } : item
        );
        setData(updated);
        toast.success("Đã cập nhật giai đoạn!");
      } else {
        const newPhase = {
          ...formatted,
          _id: Date.now().toString(),
        };
        setData((prev) => [...prev, newPhase]);
        toast.success("Đã tạo giai đoạn mới!");
      }

      setModalOpen(false);
      setEditing(null);
      form.resetFields();
    });
  };

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { title: "Mã giai đoạn", dataIndex: "_id", key: "_id" },
    { title: "Mã dự án", dataIndex: "project_id", key: "project_id" },
    { title: "Tên giai đoạn", dataIndex: "name", key: "name" },
    { title: "Trạng thái", dataIndex: "status", key: "status" },
    { title: "Ngày bắt đầu", dataIndex: "start_date", key: "start_date" },
    { title: "Ngày kết thúc", dataIndex: "end_date", key: "end_date" },
    {
      title: "Nhân viên tham gia",
      dataIndex: "assigned_employees",
      key: "assigned_employees",
      render: (list) => (list?.length > 0 ? list.join(", ") : "Không có"),
    },
    {
      title: "Tiến độ",
      dataIndex: "progress_percent",
      key: "progress_percent",
      render: (percent) => <Progress percent={percent} size="small" />,
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
            title="Bạn có chắc muốn xoá?"
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
        <Input
          placeholder="Tìm kiếm theo tên giai đoạn"
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
          allowClear
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Thêm giai đoạn
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
        title={editing ? "Cập nhật giai đoạn" : "Tạo giai đoạn"}
        open={modalOpen}
        onOk={handleOk}
        onCancel={() => {
          setModalOpen(false);
          setEditing(null);
          form.resetFields();
        }}
        okText={editing ? "Cập nhật" : "Tạo mới"}
        cancelText="Huỷ"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Mã dự án"
            name="project_id"
            rules={[{ required: true, message: "Vui lòng nhập mã dự án!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên giai đoạn"
            name="name"
            rules={[
              { required: true, message: "Vui lòng chọn tên giai đoạn!" },
            ]}
          >
            <Select>
              <Option value="Design">Thiết kế</Option>
              <Option value="Material Prep">Chuẩn bị vật liệu</Option>
              <Option value="Assembly">Lắp ráp</Option>
              <Option value="Testing">Kiểm tra</Option>
              <Option value="Delivery">Giao hàng</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
          >
            <Select>
              <Option value="not_started">Chưa bắt đầu</Option>
              <Option value="in_progress">Đang tiến hành</Option>
              <Option value="done">Hoàn thành</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Ngày bắt đầu"
            name="start_date"
            rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu!" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            label="Ngày kết thúc"
            name="end_date"
            rules={[
              { required: true, message: "Vui lòng chọn ngày kết thúc!" },
            ]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            label="Nhân viên tham gia (IDs, cách nhau bằng dấu phẩy)"
            name="assigned_employees"
          >
            <Input placeholder="emp001, emp002" />
          </Form.Item>
          <Form.Item
            label="Tiến độ (%)"
            name="progress_percent"
            rules={[{ required: true, message: "Vui lòng nhập tiến độ!" }]}
          >
            <Input type="number" min={0} max={100} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
