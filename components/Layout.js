import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const { Content, Sider } = Layout;

const MyLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Layout className="flex">
        <Sider width={200} className="bg-white border-r border-gray-200">
          <Sidebar />
        </Sider>
        <Layout className="flex-1 p-6">
          <Content className="bg-white rounded-lg shadow-md p-4">
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default MyLayout;
