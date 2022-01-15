import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb, Table, Modal, Button } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const columns = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Chinese Score",
        dataIndex: "chinese",
    },
    {
        title: "Math Score",
        dataIndex: "math",
    },
    {
        title: "English Score",
        dataIndex: "english",
    },
];

const data = [
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

const Employee = () => {
    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key={1}>Job view</Menu.Item>
                    <Menu.Item key={2}>Job has accepted</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Employee;
