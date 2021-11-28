import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoRapidApi';
import Spinner from './Spinner';

const Cryptocurrencies = ({ featured }) => {
    const count = featured ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      setCryptos(cryptosList?.data?.coins);
  
      const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
  
      setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    console.log("cryptos", cryptos)

    if (isFetching) return <Spinner />;

    return (
        <>
            {!featured && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {/* ? to loop if it's defined */}
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link key={currency.id} to={`/crypto/${currency.id}`}>
                            <Card className="currencies-card" title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" alt={currency.name} src={currency.iconUrl} />} hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
        </Row>
      </>
    )
}

export default Cryptocurrencies
