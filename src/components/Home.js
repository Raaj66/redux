import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-81688.jpg?size=626&ext=jpg"
            alt=""
            height="120px"
            width="150px"
          />
        </div>
        <div className="text-wrapper item">
          <span>Realme</span>
          <span>Price : 1000rs</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>

      {/* cart */}
      <div className="cart">
        <img
          src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg"
          alt=""
          height="50px"
          width="50px"
        />
      </div>
    </div>
  );
}
