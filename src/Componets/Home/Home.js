import React from "react";
import "./home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/610KhjiibCL._SX3000_.jpg"
        />
        <div className="home_row">
          <Product
            id="49538094"
            title="Gildan Adult Fleece Hooded Sweatshirt, Style G18500, Multipack"
            price={17.86}
            rating={3}
            image="https://m.media-amazon.com/images/I/61FGWqnjQkL._AC_SX679._SX._UX._SY._UY_.jpg"
          />
          <Product
            id="12321341"
            title="LOGEEYAR Mens Slim Fitted Casual Short/Long-Sleeve Button T-Shirts Contrast Color Stitching Tee"
            price={22.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81HKTWnkJnL._AC_UX569_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="5903851"
            title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Silver (9th Generation)"
            price={589.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
            price={61.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL640_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
            price={173.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="8293851"
            title="Madewell Women's Short Sleeve Harley Tee"
            price={18.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/81CfJU8O+HL._AC_SX466._SX._UX._SY._UY_.jpg"
          />
          <Product
            id="23443850"
            title="Posture Corrector for Men&Women,Bodywellness Fix Upper Back Brace for Clavicle Support,Adjustable Back Straightener&Providing Pain Relief from Neck..."
            price={25}
            rating={4}
            image="https://m.media-amazon.com/images/I/71RVDqHH7LL._AC_SL1500_.jpg"
          />
          <Product
            id="4353254345"
            title="MEROKEETY Women's Long Sleeve Cable Knit Cardigan Sweaters Open Front Fall Outwear Coat"
            price={39}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DG35k3deL._AC_UY550_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
