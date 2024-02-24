import React from 'react';
import { Link } from 'react-router-dom';
import toursData from "../../../data/db.json";
import { Dropdown } from 'react-bootstrap'; // Import Dropdown component from react-bootstrap

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* {toursData.map(city => (
                <li key={city.id}>
                    <Link to={`/city/${city.id}`}>{city.name}</Link>
                </li>
            ))} */}

            {/* Dropdown Component */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Cities
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {toursData.map(city => (
                        <Dropdown.Item key={city.id} href={`/city/${city.id}`}>
                            {city.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}

export default Navbar;
