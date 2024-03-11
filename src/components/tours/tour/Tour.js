import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./Tour.css";

function Tour(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderDescription = () => {
    const maxCharacters = 300;
    const description = props.tour_des;

    return showMore ? description : `${description.substring(0, maxCharacters)}...`;
  };

  return (
    <div className="tour-container">
      <Card className="tour-card">
        <Link to={`/city/${props.tour_id}`}>
          <Card.Img variant="top" className="tour-img" src={props.tour_image} alt="TourImage" />
        </Link>
        <Card.Body>
          <Card.Title className="tour-title">{props.tour_name}</Card.Title>
          <Card.Text className={`tour-description ${showMore ? "show-more" : ""}`}>
            {renderDescription()}
          </Card.Text>
          <Button className="see-more-btn" onClick={toggleShowMore}>
            {showMore ? "See less" : "See more"}
          </Button>
          <Card.Text className="tour-price">
            <h4>${props.tour_price}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tour;
