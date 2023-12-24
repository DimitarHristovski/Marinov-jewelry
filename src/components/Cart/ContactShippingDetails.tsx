import React from "react";
import style from "./style.module.css";

const ContactShippingDetails: React.FC = () => {
  return (
    <div className={style.main}>
      <h2>Contact and Shipping Details</h2>

      <p>
        Already have an account? <a href="#">Log in</a>
      </p>

      <form action="/submit_form" method="post" className={style.form}>
        <div className={style.part}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Your full name here..."
          />
        </div>

        <div className={style.part}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your full name here..."
          />
        </div>
        <div className={style.part}>
          <label htmlFor="country">Country</label>
          <select id="country" name="country" required>
            <option value="denmark">🇩🇰 Denmark</option>
            <option value="canada">🇨🇦 Canada</option>
            <option value="uk">🇬🇧 United Kingdom</option>
            <option value="australia">🇦🇺 Australia</option>
            <option value="germany">🇩🇪 Germany</option>
          </select>
        </div>

        <div className={style.part}>
          <label htmlFor="zipCode">Postal/ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            required
            placeholder="1050"
          />
        </div>
        <div className={style.part}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            placeholder="Copenhagen"
          />
        </div>
        <div className={style.part}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Your street address here..."
          />
        </div>
        <h2 className={style.order}>Review Order</h2>
        <div className="col-12 d-flex justify-content-between ">
          <p>Product</p>
          <p>Price</p>
        </div>
        <button type="submit" className={style.button}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default ContactShippingDetails;
