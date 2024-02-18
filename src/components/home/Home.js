import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const toursData = require('../../data/db.json');

function Home() {
    return (
        <div className="home">
            <Header />
            {
                toursData.map(element => {
                    return (
                        <div className='mapTours'>
                        <Tours tour_name={element.name} tour_image={element.image} tour_price={element.price}  />
                        <hr style={{ width: '200px', borderRadius: '5px' }}></hr>
                        </div>
                    )
                })
            }

            <Footer />
        </div>
    )
};

export default Home;
