import React from 'react';
import { useParams } from 'react-router-dom';
import toursData from "../../data/db.json";
// import Dropdown from 'react-bootstrap/Dropdown';

function TourDetails() {
    let { id } = useParams();
    const city = toursData.find(city => city.id === parseInt(id));

    return (
        <div>
            <h2>City Details</h2>
            {city ? (
                <div>
                    <h3>Name: {city.name}</h3>
                    <img id="imgID" src={city.image} alt="TourImage" />
                    <p>Info: {city.info}</p>
                </div>
            ) : (
                <div>
                    <h3>City not found</h3>
                </div>
            )}
            
        </div>
    );
}

export default TourDetails;
