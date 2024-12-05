import React from 'react';
import '../styles.css';
function LandingPage() {
    return (
        <div>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1 style ={{fontFamily: 'Arial, sans-serif' }}> "An Absolute Spectacle"</h1>
                <p style={{ fontStyle: 'italic' }}>
                The New York Times </p>
            </header>

            <div className="dish-gallery">
                <h2>Featured Dishes</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    <div className="dish-item">
                        <img src="https://www.camelliabrand.com/static/wp-content/uploads/2018/03/frijoles_de_la_olla.2-scaled.jpg" alt="Dish 1" className="dish-image" />
                        <p>Foti Frijoles</p>
                    </div>
                    <div className="dish-item">
                        <img src="https://images.axios.com/z1twjIDbVWC2afhvJdzrrN-ULyY=/0x541:4032x2809/1920x1080/2024/01/11/1704999864676.jpg?w=1920" alt="Dish 2" className="dish-image" />
                        <p>Bartholomew's Double Chunk Chocolate Cookies</p>
                    </div>
                    <div className="dish-item">
                        <img src="https://www.eatwell101.com/wp-content/uploads/2017/11/appetizers-for-thanksgiving.jpg" alt="Dish 3" className="dish-image" />
                        <p>Karen's Cranberry Fritter</p>
                    </div>
                    <div className="dish-item">
                        <img src="http://4.bp.blogspot.com/_1-RL5laVxJ8/TMcH_V1jMfI/AAAAAAAAEJ0/H98aZR_gPnE/s1600/Pumpkin+Pie+Slice.jpg" alt="Megan's Famous Pumpkin Pie" className="dish-image" />
                        <p>Bridge's Famous Pumpkin Pie</p>
                    </div>
                </div>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>91 Fairview Avenue, Poughkeepsie NY 12601</p>
            </footer>
        </div>
    );
}

export default LandingPage;