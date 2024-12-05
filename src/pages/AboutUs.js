import React from 'react';
import '../styles.css';

function AboutUs() {
    return (
        <div>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1>About Us</h1>
                <p></p>
            </header>

            <div className="about-section">
                <h2>Our Story</h2>
                <p>
                    Some say it’s the love put into every munch, or maybe the warm smile that greets you when you take that first step through the front door. Cinnamon and peppermint wafts into your nostrils, and you relax. You’re home. Let Crazy Earl find you a seat at one of our tables, and while you enjoy a nice glass of chardanet we’ll get to work on a meal that we hope you won’t ever forget. Because here at Cultural Eats, we don’t just make food. We make champions. Cultural Eats. For the discerning diner.
                </p>
            </div>

            <div className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-members" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    <div className="team-member" style={{ textAlign: 'center', width: '200px' }}>
                        <img 
                        src="IMG_9536 (1).PNG" 
                        alt="Team Member 1" 
                        className="team-image" 
                        style={{ width: '100%', height: 'auto', maxHeight: '150px' }}
                        /><p>Name: Sous Chef Mirkovic</p>
                        <p>Experience: M.B.A Culinary Science</p>
                    </div>
                    <div className="team-member" style={{ textAlign: 'center', width: '200px' }}>
                        <img 
                        src="IMG_1933 (1).jpg" 
                        alt="teammember2" 
                        className="team-image" 
                        style={{ width: '100%', height: 'auto', maxHeight: '150px' }}
                        />
                        <p>Name: Chief Mixologist Budusmith-Otoo</p>
                        <p>Experience: 8-time Somellier World Champion</p>
                    </div>
                    <div className="team-member" style={{ textAlign: 'center', width: '200px' }}>
                        <img 
                            src="IMG_2099 (1).jpg" 
                            alt="teammember2" 
                            className="team-image" 
                            style={{ width: '100%', height: 'auto', maxHeight: '150px' }}
                        />
                        <p>Name: [Head Matredee Pena]</p>
                        <p>Role: [P.H.D. In Hospitality]</p>
                    </div>
                    <div className="team-member" style={{ textAlign: 'center', width: '200px' }}>
                        <img 
                            src="https://people.com/thmb/BzutsySzyXX6cHzmffeUTpQX8aI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/sizzling-snaps-of-the-bears-jeremy-allen-white-062123-01-e55e18a8681d43edb9e3c6e5e3121d0a.jpg" 
                            alt="teammember4" 
                            className="team-image" 
                            style={{ width: '100%', height: 'auto', maxHeight: '150px' }}
                        />
                        <p>Name: [Head Chef O'Brien]</p>
                        <p>Role: [Experience: All]</p>
                    </div>
                </div>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>Visit us today!</p>
            </footer>
        </div>
    );
}

export default AboutUs;