import React from 'react';
import { Row } from 'react-bootstrap';


const Hotels = (props) => {
    const { title, description, bed, capacity, bedType, price, imgUrl, rating } = props.hotel;
    return (
        <Row>
            <div className="col-md-4 d-flex align-items-center" style={{margin:'10px',border: '1px solid gray'}}>
                <img src={imgUrl} alt="" style={{height: '80px', width:'100px'}}></img>
            </div>
            <div className="col-md-8 description">
                <h3 >{title}</h3>
                <p>{capacity} guests {bed} beds {bed} baths.</p>
                <p>{bedType}</p>
                <p>{description}</p>
                <p><small>Rating : {rating}</small> </p>
                <p><b>$</b>{price}</p>
 
            </div>
        </Row>
    );
};

export default Hotels;