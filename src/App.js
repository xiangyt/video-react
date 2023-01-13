import "./App.css";
import "antd/dist/reset.css";
// import { Button } from "antd";
// import { get } from "./model/axios";
import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { get } from "./model/axios";
import { Route, Routes, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

class MyButton extends Component {
  handleClick() {
    get("ping").then(function (res) {
      console.log(res);
    });
  }

  state = {};
  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        Primary
      </Button>
    );
  }
}

const Home = () => {
  return <div>hello world</div>;
};

const About = () => {
  return <MyButton></MyButton>;
};

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>;
};

function App() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[3]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            if (index === 1) {
              return getItem("User", "sub1", <UserOutlined />, [
                getItem("Tom", "3"),
                getItem("Bill", "4"),
                getItem("Alex", "5"),
              ]);
            }
            return {
              key,
              label: <Link to="/about">nav {key}</Link>,
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <a href="http://www.baidu.com">baidu</a>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
