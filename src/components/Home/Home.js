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
            imgUrl: 'https://i.ibb.co/fqt8zKS/Rectangle-28.png',
            bed: 1,
            capacity: 1,
            placeName: 'CoxsBazar',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Sreemangal',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/MkNxjzX/Sajek.png',
            bed: 1,
            capacity: 2,
            placeName: 'Sreemangal',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Sundarbans',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/V3bB59D/Sreemangal.png',
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