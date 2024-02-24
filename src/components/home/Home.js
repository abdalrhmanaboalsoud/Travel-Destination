import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import TourDetails from '../TourDetails/TourDetails.js';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (
        <div className="home">
            <Header />
            <Routes>
                <Route path="/" element={<Tours />} />
                <Route path="/city/:id" element={<TourDetails />} />
            </Routes>
            {/* <Tours /> */}
            <Footer />
        </div>
    )
};

export default Home;
