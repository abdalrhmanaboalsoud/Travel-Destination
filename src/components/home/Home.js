import Navbar from '../Navbar/Navbar.js';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import TourDetails from '../TourDetails/TourDetails.js';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (
        <div className="home">
            <Navbar />
            <Routes>
                <Route path="/" element={<Tours />} />
                <Route path="/city/:id" element={<TourDetails />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default Home;
