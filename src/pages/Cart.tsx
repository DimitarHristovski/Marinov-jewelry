import ContactShippingDetails from "@/components/Cart/ContactShippingDetails";
import React from "react";

const Cart = () => {
  return (
    <div className="container-fluid">
      <div className="row brown-color">
        <div className="col-12">
          <h1>Your Cart</h1>
          <button className="btn btn-main">Continue Shoping</button>
        </div>
        <div className="col-12 d-flex justify-content-between ">
          <p>Product</p>
          <p>Price</p>
        </div>

        <div className="col-12">
          <img src="/images/bg_spiral_butterfly_home_mobile.svg" alt="" />
          <div className="content-display w-75 position-absolute">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
      <ContactShippingDetails />
    </div>
  );
};

export default Cart;
