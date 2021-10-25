import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
          alt="Amazon Banner"
        />
        <div className="home__row">
          <Product
            id="1235"
            title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
            price={9499.0}
            image="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5646"
            title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)"
            price={14999.0}
            image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1455"
            title="ASUS ROG Strix G17 (2021) 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Windows 10/Gray/2.4 Kg), G713IH-HX020T"
            price={79990.0}
            image="https://m.media-amazon.com/images/I/81Vr3jzftaL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1453"
            title="
            Vudy Engineered Wood Wall Shelves ,Glossy Finish ,Set Of 5,Black"
            price={1237.0}
            image="https://m.media-amazon.com/images/I/81xH6f+l88L._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4569"
            title="
            DecorDen Zigzag Floating Wall Mount Wooden Display Storage Organizer Shelf for Wall Decoration (Brown)"
            price={600.0}
            image="https://m.media-amazon.com/images/I/51Ey7WCBV8S._SL1400_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home;
