import { Layout, Menu, Button } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [user, setUser] = useState(true); // Replace with your actual user authentication logic

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
  };

  return (
    <AntHeader className="bg-white shadow-md">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          className="flex-1 ml-8"
          items={[
            { key: '1', label: <Link href="/">Home</Link> },
            { key: '2', label: <Link href="/about">About</Link> },
            { key: '3', label: <Link href="/contact">Contact</Link> },
            user && { key: '4', label: <Link href="/profile">Profile</Link> },
            user && {
              key: '5',
              label: (
                <Button type="link" onClick={handleLogout}>
                  Logout
                </Button>
              ),
            },
          ].filter(Boolean)}
        />
      </div>
    </AntHeader>
  );
};

export default Header;
