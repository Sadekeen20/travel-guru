import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import bgImg from '../../Image/mainbg.png';
import './PlaceDetails.css'
const PlaceDetails = () => {
    const { placeDetail } = useParams();
    console.log(placeDetail);

    const history = useHistory();
    const handlePlaceDetails = (placeDetail) => {
        history.push(`/book/${placeDetail}`);
    }
    return (
        <div style={{ textAlign: 'center', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg})`, height: '800px', backgroundSize: 'cover', color: 'white' }}>

            <Container fluid style={{ paddingTop: '180px' }}>
                <Row style={{}}>
                    <Col>
                        <h1>{placeDetail}</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem laudantium exercitationem maiores quo! Corporis et excepturi distinctio odit obcaecati quae amet, aut sed! Cum quis aspernatur magni consequuntur fuga.</p>
                        {/* <Button onClick={() => handlePlaceDetails(placeDetail)} variant="contained" color="primary">
            Place Details
        </Button> */}
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <Button variant="outline-light">
                                Go Back
            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <div className="input-control-x">
                            <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px' }}>

                                <div className="item">

                                    <div className="name-item">

                                        <input type="text" name="Origin" placeholder="Origin" value='Dhaka' />
                                        <br />

                                        <input type="text" name="Destination" placeholder="Destination" value={placeDetail} />
                                        <br />
                                        <p style={{ color: 'gray' }}>When are you planning to visit?</p>

                                        <input type="date" name="bdate" required />
                                        <i className="fas fa-calendar-alt"></i>

                                        <input type="date" name="bdate" required />
                                        <i className="fas fa-calendar-alt"></i>



                                        <br />
                                        <button onClick={() => handlePlaceDetails(placeDetail)} type="submit" href="/" style={{ background: '#ffbf00', borderRadius: '5px', padding: '10px', border: 'none' }}><b> Start Booking</b></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </Col>
                </Row>

            </Container>


        </div>
    );

};
//  AIzaSyCB5cb2Bn2fEnvsXhksmQEA3PeKvW8bBL8
export default PlaceDetails;
