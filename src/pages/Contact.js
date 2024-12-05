import React from 'react';
import '../styles.css';

function Contact() {
    return (
        <div>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
            </header>
            <div className="contact-info center-div">
                <h2>Our Details</h2>
                <p>847-624-2149</p>
                <p>culturaleats@aol.com</p>
                <p>91 Fairview Avenue, Poughkeepsie NY</p>
                <p>We’ll get back to you as soon as possible!</p>
            </div>
        </div>
    );
}
export default Contact;
