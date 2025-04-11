import React from "react"
import catImage from '../assets/download.jpeg';
import { Link } from "react-router";

function Navbar() {
    return (
        <div style={{ fontSize: '30px', backgroundColor: 'yellow' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '30px' }}>
                <Link to='/'><li>Home</li></Link>
                <Link to='sales'> <li>Sale</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <li>Contact_US</li>
                <li>About_Us</li>
            </ul>
            {/* <img src={catImage} alt="Cat Image" /> */}
        </div>
    )

}
export default Navbar