import './Tours.css'
import Tour from './tour/Tour';
// import Navbar from '../header/Navbar/Navbar.js';
const toursData = require('../../data/db.json');
function Tours() {
    return (

        toursData.map(element => {
            return (
                <div>
                    <div key={element.id} className='mapTours'>
                        <Tour tour_name={element.name} tour_image={element.image} tour_price={element.price} tour_des = {element.info} />
                        <div style={{ textAlign: 'center' }}>
                            {/* <hr style={{ width: '200px', borderRadius: '5px', margin: 'auto' }} /> */}
                        </div>
                    </div>
                </div>
            )
        })

    );
}

export default Tours;