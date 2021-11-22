import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/CartAction";

function Home(props) {
  const { addToCart, removeFromCart } = props;

  const handleAddTocart = () => {
    addToCart({
      name: "Realme",
      price: "1000rs",
    });
  };

  return (
    <div>
      {/* <h1>Home</h1> */}
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
          <button onClick={handleAddTocart}>Add to Cart</button>
        </div>
        <div className="btn2-wrapper item">
          <button onClick={() => removeFromCart()}>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

const mapStateToProps = (state) => ({
  cartData: state.cartReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
