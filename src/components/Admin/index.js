import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import {
    Layout,
    Menu,
    Breadcrumb,
    Table,
    Modal,
    Button,
    Popconfirm,
    Form,
    Input,
    InputNumber,
    Typography,
} from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
let columns = [
    {
        title: "Name",
        dataIndex: "name",
        editable: true,
    },
    {
        title: "Chinese Score",
        dataIndex: "chinese",
        editable: true,
    },
    {
        title: "Math Score",
        dataIndex: "math",
        editable: true,
    },
    {
        title: "English Score",
        dataIndex: "english",
        editable: true,
    },
];

const datas = [
    {
        key: "1",
        name: "John Brown",
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: "2",
        name: "Jim Green",
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: "3",
        name: "Joe Black",
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: "4",
        name: "Jim Red",
        chinese: 88,
        math: 99,
        english: 89,
    },
];
const Admin = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(datas);
    const [editingKey, setEditingKey] = useState("");
    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }
    const [type, settype] = useState("employee");

    const handleDelete = (key) => {
        setData(data.filter((item) => item.key !== key));
    };
    type === "employee"
        ? (columns = [
              {
                  title: "Name",
                  dataIndex: "name",
                  editable: true,
              },
              {
                  title: "Chinese Score",
                  dataIndex: "chinese",
                  editable: true,
              },
              {
                  title: "Math Score",
                  dataIndex: "math",
                  editable: true,
              },
              {
                  title: "English Score",
                  dataIndex: "english",
                  editable: true,
              },
              {
                  title: "operation",
                  dataIndex: "operation",
                  render: (_, record) => {
                      const editable = isEditing(record);
                      return editable ? (
                          <span>
                              <Typography.Link
                                  onClick={() => save(record.key)}
                                  style={{
                                      marginRight: 8,
                                  }}
                              >
                                  Save
                              </Typography.Link>
                              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                  <a>Cancel</a>
                              </Popconfirm>
                          </span>
                      ) : (
                          <>
                              <Typography.Link
                                  style={{ margin: "10px" }}
                                  disabled={editingKey !== ""}
                                  onClick={() => edit(record)}
                              >
                                  Edit
                              </Typography.Link>
                              <Popconfirm
                                  style={{ margin: "10px" }}
                                  title="Sure to delete?"
                                  onConfirm={() => handleDelete(record.key)}
                              >
                                  <a>Delete</a>
                              </Popconfirm>
                          </>
                      );
                  },
              },
          ])
        : type === "employer"
        ? (columns = [
              {
                  title: "Name",
                  dataIndex: "name",
                  editable: true,
              },
              {
                  title: "Chinese Score",
                  dataIndex: "chinese",
                  editable: true,
              },
              {
                  title: "Math Score",
                  dataIndex: "math",
                  editable: true,
              },
              {
                  title: "English Score",
                  dataIndex: "english",
                  editable: true,
              },
              {
                  title: "operation",
                  dataIndex: "operation",
                  render: (_, record) => {
                      const editable = isEditing(record);
                      return editable ? (
                          <span>
                              <Typography.Link
                                  onClick={() => save(record.key)}
                                  style={{
                                      marginRight: 8,
                                  }}
                              >
                                  Save
                              </Typography.Link>
                              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                  <a>Cancel</a>
                              </Popconfirm>
                          </span>
                      ) : (
                          <>
                              <Typography.Link
                                  style={{ margin: "10px" }}
                                  disabled={editingKey !== ""}
                                  onClick={() => edit(record)}
                              >
                                  Edit
                              </Typography.Link>
                              <Popconfirm
                                  title="Sure to delete?"
                                  style={{ margin: "10px" }}
                                  onConfirm={() => handleDelete(record.key)}
                              >
                                  <a>Delete</a>
                              </Popconfirm>
                          </>
                      );
                  },
              },
          ])
        : (columns = [
              {
                  title: "Name",
                  dataIndex: "name",
                  editable: true,
              },
              {
                  title: "Chinese Score",
                  dataIndex: "chinese",
                  editable: true,
              },
              {
                  title: "Math Score",
                  dataIndex: "math",
                  editable: true,
              },
              {
                  title: "English Score",
                  dataIndex: "english",
                  editable: true,
              },
              {
                  title: "operation",
                  dataIndex: "operation",
                  render: (_, record) => {
                      const editable = isEditing(record);
                      return editable ? (
                          <span>
                              <Typography.Link
                                  onClick={() => save(record.key)}
                                  style={{ margin: "10px" }}
                                  style={{
                                      marginRight: 8,
                                  }}
                              >
                                  Save
                              </Typography.Link>
                              <Popconfirm
                                  title="Sure to cancel?"
                                  onConfirm={cancel}
                                  style={{ margin: "10px" }}
                              >
                                  <a>Cancel</a>
                              </Popconfirm>
                          </span>
                      ) : (
                          <div>
                              <Typography.Link
                                  disabled={editingKey !== ""}
                                  onClick={() => edit(record)}
                                  style={{ margin: "10px" }}
                              >
                                  Edit
                              </Typography.Link>
                              <Popconfirm
                                  title="Sure to delete?"
                                  style={{ margin: "10px" }}
                                  onConfirm={() => handleDelete(record.key)}
                              >
                                  <a>Delete</a>
                              </Popconfirm>
                          </div>
                      );
                  },
              },
          ]);
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item
                        key={1}
                        onClick={() => {
                            settype("employee");
                        }}
                    >
                        Employee
                    </Menu.Item>
                    <Menu.Item
                        key={2}
                        onClick={() => {
                            settype("employer");
                        }}
                    >
                        Employer
                    </Menu.Item>
                    <Menu.Item
                        key={3}
                        onClick={() => {
                            settype("job");
                        }}
                    >
                        Job
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Form form={form} component={false}>
                        {" "}
                        <Table
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                            bordered
                            dataSource={data}
                            columns={mergedColumns}
                            rowClassName="editable-row"
                            pagination={{
                                onChange: cancel,
                            }}
                        />
                    </Form>
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Admin;
