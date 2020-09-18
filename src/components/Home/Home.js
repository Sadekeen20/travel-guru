import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImg from '../../Image/mainbg.png'
import './Home.css';
import Places from '../Places/Places';
// import PlaceDetails from '../PlaceDetails/PlaceDetails';
const Home = () => {

    // const style = {
    //     display: 'flex',
    //     margin: '40px',
    //     justifyContent: 'space-between'
    // }
    const places = [
        {
            title: `Cox's Bazar`,
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed: 1,
            capacity: 1,
            placeName: 'CoxsBazar',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Sreemangal',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            capacity: 2,
            placeName: 'Sreemangal',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Sundarbans',
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
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg})`, height: '800px', backgroundSize: 'cover' ,display:'block'}}>
            <Container >
               
                    
                    
                        {
                            places.map(place => <Places key={place.placeName} place={place} style={{margin:'0px'}}></Places>)
                            
                        }
                        
                    
               

            </Container>
        </div>
    );
};

export default Home;