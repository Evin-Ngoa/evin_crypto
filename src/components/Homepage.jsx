import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic, Button } from 'antd';
import { Link } from 'react-router-dom';

import Spinner from './Spinner';
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';
import { useGetCryptosQuery } from '../services/cryptoRapidApi';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const dataStats = data?.data?.stats;

    console.log(data)

    if (isFetching) return <Spinner />;

    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics in Total</Title>
            <div className="code-box-demo">
                <Row gutter={[32, 32]}>
                    <Col span={12}><Statistic title="Cryptocurrencies" value={dataStats.total} /></Col>
                    <Col span={12}><Statistic title="Market Cap:" value={`$${millify(dataStats.totalMarketCap)}`} /></Col>
                    <Col span={12}><Statistic title="24h Volume" value={`$${millify(dataStats.total24hVolume)}`} /></Col>
                    <Col span={12}><Statistic title="Exchanges" value={millify(dataStats.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title="Markets" value={millify(dataStats.totalMarkets)} /></Col>
                </Row>
            </div>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies summary />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3}><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
