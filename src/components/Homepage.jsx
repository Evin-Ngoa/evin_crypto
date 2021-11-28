import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
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
            <Title level={4} className="heading">Global Crypto Statistics in Total</Title>
            <div className="code-box-demo">
                <Row gutter={[8, 8]}>
                    <Col span={8}><Statistic title="Cryptocurrencies" value={dataStats.total}  valueStyle={{ color: '#321fdb' }} /></Col>
                    <Col span={8}><Statistic title="Market Cap:" value={`$${millify(dataStats.totalMarketCap)}`}  valueStyle={{ color: '#321fdb' }} /></Col>
                    <Col span={8}><Statistic title="24h Volume" value={`$${millify(dataStats.total24hVolume)}`} valueStyle={{ color: '#321fdb' }}/></Col>
                </Row>
            </div>
            <div className="code-box-demo">
                <Row gutter={[8, 8]}>
                    <Col span={8}><Statistic title="Exchanges" value={millify(dataStats.totalExchanges)}  valueStyle={{ color: '#321fdb' }}/></Col>
                    <Col span={8}><Statistic title="Markets" value={millify(dataStats.totalMarkets)} valueStyle={{ color: '#321fdb' }} /></Col>
                </Row>
            </div>
            <div className="home-heading-container">
                <Title level={4} className="home-title">Top 10 Cryptos In The World</Title>
                <Title level={5} className="show-more"><Link to="/cryptocurrencies">View All</Link></Title>
            </div>
            <Cryptocurrencies featured />
            <div className="home-heading-container">
                <Title level={4} className="home-title">Latest Crypto News</Title>
                <Title level={5}><Link to="/news">View All</Link></Title>
            </div>
            <News featured />
        </>
    )
}

export default Homepage
