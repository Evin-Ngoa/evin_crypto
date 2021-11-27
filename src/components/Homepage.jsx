import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import Spinner from './Spinner';
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';

const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total CryptoCurrencies" value={5} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={6} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={7} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={8} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={9} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={10} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3}><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
