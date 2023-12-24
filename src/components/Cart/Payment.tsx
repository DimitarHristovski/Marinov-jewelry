import React from "react";
import style from "./style.module.css";

const PaymentComponent: React.FC = () => {
  return (
    <div className={style.paymentContainer}>
      <img src="/images/logo_scroll.png" alt="" />
      <img src="/images/logo_stay.png" alt="" />
      <img src="/images/Frame_2341.png" alt="" />

      <div className={style.info}>
        <h2>Payment Information</h2>
        <p>Merchant</p>
        <h3>Marinov Design</h3>
        <p>Website</p>
        <h3>www.marinovdesign.com</h3>
        <p>Amount</p>
        <h3>€ 76.00</h3>
      </div>
      <div className={style.details}>
        <h2>Card Details</h2>
        <form>
          <div>
            <div className={style.part}>
              <label htmlFor="">Card Holder</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="Card holder name here..."
              />
            </div>
            <div className={style.part}>
              <label htmlFor="">Card Number</label>
              <input
                type="number"
                id="number"
                name="name"
                className="input"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className={style.two}>
              <div className={style.part}>
                <label htmlFor="">Expiration Date</label>
                <input type="date" id="start" placeholder="MM/YY" />
              </div>
              <div className={style.part}>
                <label htmlFor="">Security Code</label>
                <input
                  type="number"
                  id="number"
                  name="name"
                  className="input"
                  placeholder="000"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button type="submit" className={style.button}>
        Pay Now
      </button>
      <button type="submit" className={style.close}>
        Close
      </button>
      <div className={style.visa}>
        <img src="/images/Frame_2344.png" alt="" />
      </div>
    </div>
  );
};

export default PaymentComponent;
