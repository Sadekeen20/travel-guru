import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Map from '../Map/Map'; 
import Hotel from '../Hotels/Hotels'
const Book = () => {
    const {placeName} = useParams();
    console.log(placeName);


    const hotel = [
        {
            title: `Hotel Aahad`,
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed: 1,
            capacity: 1,
            placeName: 'CoxsBazar',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Hotel Asmani',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            capacity: 2,
            placeName: 'Sreemangal',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Hotel Abul Khayer',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 2,
            capacity: 4,
            placeName: 'Sundarbans',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div style={{textAlign: 'center'}}>
            <Row style={{height:'800px', borderRadius: '15px'}}>
                <Col><h2>Let's book a hotel at{placeName} </h2>
           

                {      
                        hotel.map(hotel => <Hotel hotel={hotel}></Hotel>)                 
                }
            </Col>
            
            <Col>
            <Map></Map>
            </Col>
            
            </Row>
            

        </div>
    );
};

export default Book;
