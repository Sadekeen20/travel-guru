import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Map from '../Map/Map'; 
const Book = () => {
    const {placeName} = useParams();
    console.log(placeName);
    return (
        <div style={{textAlign: 'center'}}>
            <Row style={{height:'800px', borderRadius: '15px'}}>
                <Col><h1>Let's book a {placeName} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p></Col>
            
            <Col>
            <Map></Map>
            </Col>
            </Row>
            

        </div>
    );
};

export default Book;
