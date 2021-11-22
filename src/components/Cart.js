import React from "react";
import { connect } from "react-redux";
import "./Home.css";

function Cart(props) {
  console.log("props from cart", props.cartData);
  return (
    <div>
      {/* cart */}
      <div className="cart">
        <img
          src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg"
          alt=""
          height="50px"
          width="50px"
        />
        <span>{props.cartData.length}</span>
      </div>

      <div
        style={{
          border: "1px solid",
          height: 500,
          width: 350,
          overflow: "auto",
        }}
      >
        {props.cartData?.map((item) => {
          return (
            <div>
              <h2>{item?.cartData?.name}</h2>
              <h4>{item?.cartData?.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  cartData: state.cartReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
