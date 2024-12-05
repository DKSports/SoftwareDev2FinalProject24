import React from 'react';
import '../styles.css';
function Menus() {
    return (
        <div>
        <header style={{ backgroundColor: 'orange', padding: '10px' }}>
            <h1>Our Menu</h1>
            </header>
            <div className="menu-section">
                <h2>Breakfast</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="https://images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2-large-landscape-150.jpg" alt="Breakfast Dish 1" className="menu-image" />
                        <p>Jean's Eggcado Toast</p>
                    </div>
                    <div className="menu-item">
                        <img src="https://dinnerthendessert.com/wp-content/uploads/2021/05/Berry-Stuffed-French-Toast-1-1-1.jpg" alt="Breakfast Dish 2" className="menu-image" />
                        <p>Stuff em' up French Toast</p>
                    </div>
                </div>
            </div>
            <div className="menu-section">
                <h2>Lunch</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="https://www.greekboston.com/wp-content/uploads/2018/07/Traditional-Gyro-900x600.jpg" alt="Lunch Dish 1" className="menu-image" />
                        <p>I Knead A Gyro Gyros</p>
                    </div>
                    <div className="menu-item">
                        <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Simple-Italian-Salad_EXPS_FT20_25957_F_0624_1-1.jpg" alt="Lunch Dish 2" className="menu-image" />
                        <p>Crazy Earl's Italian Salad</p>
                    </div>
                </div>
            </div>
            <div className="menu-section">
                <h2>Dinner</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="https://thethrivinghomesecrets.com/wp-content/uploads/2020/02/low-carb-dinner-recipes-5.jpg" alt="Dinner Dish 1" className="menu-image" />
                        <p>Holy Salmon</p>
                    </div>
                    <div className="menu-item">
                        <img src="https://img.freepik.com/premium-photo/close-up-delicious-asian-food_148840-2639.jpg" alt="Dinner Dish 2" className="menu-image" />
                        <p>The Bowl</p>
                    </div>
                </div>
            </div>
            <div className="menu-section">
                <h2>Special Desserts</h2>
                <div className="menu-item">
                    <img src="http://media1.popsugar-assets.com/files/2015/12/21/853/n/1922195/6869b691_edit_img_image_1090627_1450722839_Molten_Chocolate_Cake_SQUARE/i/Chocolate-Molten-Lava-Cake.jpg" alt="quadfudge" className="menu-image" />
                    <p>Quadruple Fudge Monster</p>
                </div>
            </div>
        </div>
    );
}

export default Menus;