import { Layout, Typography, Menu } from 'antd';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Text>© {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        </div>
        <Menu
          theme=""
          mode="horizontal"
          className="flex space-x-4"
          items={[
            { key: '1', label: <Link href="/about">About Us</Link> },
            { key: '2', label: <Link href="/contact">Contact</Link> },
            { key: '3', label: <Link href="/privacy-policy">Privacy Policy</Link> },
            { key: '4', label: <Link href="/terms">Terms of Service</Link> },
          ]}
        />
      </div>
    </AntFooter>
  );
};

export default Footer;
