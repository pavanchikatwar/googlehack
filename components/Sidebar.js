import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './Sidebar.module.css'; // Assuming you have CSS module for styling

const { Sider } = Layout;

const items = [
  { key: '1', label: <Link href="/dashboard">Dashboard</Link> },
  { key: '2', label: <Link href="/profile">Profile</Link> },
  { key: '3', label: <Link href="/store">Store</Link> },
  { key: '4', label: <Link href="/products">Products</Link> },
  { key: '5', label: <Link href="/investors">Investors</Link> },
  { key: '6', label: <Link href="/bulk-orders">Bulk Orders</Link> },
  { key: '7', label: <Link href="/loans">Loans</Link> },
  { key: '8', label: <Link href="/schemes">Schemes</Link> },
  { key: '9', label: <Link href="/cart">Cart</Link> },
  { key: '10', label: <Link href="/checkout">Checkout</Link> },
  { key: '11', label: <Link href="/gigs">Gigs</Link> },
  { key: '12', label: <Link href="/quotations">Quotations</Link> },
  { key: '13', label: <Link href="/orders">Orders</Link> },
  // Add more items as needed
];

const Sidebar = () => {
  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
