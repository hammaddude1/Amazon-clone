import React from "react";
import "../assests/css/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src={require("../assests/pictures/banner.jpg")}
        alt=""
      />
      <div className="home__row">
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          price={15}
          title="Lenov Latest Tablet Generation 5 with 4 gb Ram"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VbjDGQRwL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
