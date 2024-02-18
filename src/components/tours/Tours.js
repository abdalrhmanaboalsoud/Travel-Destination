function Tours(props) {
    return (
        <div>
            <h3>{props.tour_name}</h3>
            <img src={props.tour_image} alt="TourImage" style={{ width: '200px', height: '150px', borderRadius: '5px' }} />
            <h4> {props.tour_price}</h4>
        </div>
    );
}

export default Tours;