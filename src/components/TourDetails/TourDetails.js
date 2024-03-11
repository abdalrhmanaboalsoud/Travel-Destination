import React from "react";
import { useParams } from "react-router-dom";
import toursData from "../../data/db.json";
import "./TourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const city = toursData.find((city) => city.id === id);

  return (
    <div className="tour-details">  
      {city ? (
        <div>
          <hr></hr>
          <h1>{city.name}</h1>
          <hr></hr>
          <img id="imgID" src={city.image} alt="TourImage" />
          <p>{city.info}</p>
        </div>
      ) : (
        <div className="city-not-found">
          <h3>City not found</h3>
        </div>
      )}
    </div>
  );
}

export default TourDetails;
