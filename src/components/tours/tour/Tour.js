import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Home from '../../home/Home';
import Navbars from '../../header/Navbar/Navbar';
function Tour(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.tour_image} alt="TourImage" />
                <Card.Body>
                    <Card.Title>{props.tour_name}</Card.Title>
                    <Card.Text>
                        {props.tour_des}
                    </Card.Text>
                    <Card.Text>
                        <h4>${props.tour_price}</h4>
                    </Card.Text>
                    {/* Link to the city details page */}
                    <Link to={`/city/${props.city.id}`}>
                        <Button variant="primary">See More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tour;
