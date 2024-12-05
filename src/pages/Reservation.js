import React from 'react';
import '../styles.css'; 
import LandingPage from './LandingPage';
import Menus from './Menus';
import AboutUs from './AboutUs';
import Contact from './Contact';

function Reservation() {
    return (
        <div>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1>Online Reservations</h1>
                <p>Come munch today!</p>
            </header>

            <div className="reservation-info">
                <h2>Reserve Through Google Forms</h2>
                <p>
                Click <a href="https://forms.gle/kh3r8wNza1CJrgPDA" target="_blank" rel="noopener noreferrer">here</a> to reserve a table via Google Forms.
                </p>
            </div>
        </div>
    );
}

export default Reservation;