import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, SlidersOutlined, ProfileOutlined , FundOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Evin Crypto</Link>
                </Typography.Title>
                <Button className="menu-control-container">

                </Button>
            </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptos</Link>
                    </Menu.Item>
                    <Menu.Item icon={<SlidersOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<ProfileOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            
        </div>
    )
}

export default Navbar
