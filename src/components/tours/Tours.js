import './Tours.css'
import Tour from './tour/Tour';
import { Row, Col} from 'react-bootstrap';

const toursData = require('../../data/db.json');

function Tours() {
  return (
    <div className="tours-container"> 
      <Row xs={1} md={3} className="g-4">
        {toursData.map((element) => (
          <Col key={element.id}> {/* Use key prop for efficient rendering */}
            <Tour
              tour_id={element.id}
              tour_name={element.name}
              tour_image={element.image}
              tour_price={element.price}
              tour_des={element.info}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Tours;
