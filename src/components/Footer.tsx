import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid text-darkgreen">
      <div className="row">
        <div className="col-12 position-relative  ">
          <div className="position-absolute d-flex flex-column content-display align-content-around ">
            <img src="/images/Logo.png" alt="Logo" />
            <p className="text-light underline text-center  mt-5 mb-0 font-weight-bold">
              See Our Story
            </p>
          </div>

          <div>
            <img src="/images/footer-image.png" alt="Footer Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="text-uppercase my-2">Marinov</h1>
          <div className="d-flex justify-content-between">
            <h3 className="text-uppercase">Jewelry</h3>
            <div className="d-flex">
              <button className="btn  p-0 m-1">EN </button>
              <span className=" my-1">|</span>
              <button className="btn  p-0 m-1">MK</button>
            </div>
          </div>

          <div>
            <p>Earrings</p>
            <p>Rings</p>
            <p>Necklaces</p>
            <p>Bracelets</p>
            <p>Sets</p>
            <p>Other</p>
          </div>
        </div>
        <div className="col-12">
          <h1 className="text-uppercase">Home Decor</h1>

          <p>Helmets</p>
          <p>Other</p>
        </div>
        <div className="col-12 d-flex flex-column text-uppercase">
          <h3>Custom Orders</h3>
          <h3>Our story</h3>
          <h3>FAQ</h3>
          <h3>Contact</h3>
          <h3>Profile</h3>
        </div>
        <div className=" col-12 d-flex justify-content-start">
          <i className="fab fa-instagram fa-3x  m-2"></i>
          <i className="fab fa-facebook fa-3x m-2"></i>
          <i className="fab fa-whatsapp fa-3x m-2"></i>
        </div>

        <div className="col-12">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Shipping and Returns Policy</p>
        </div>
        <div className="col-12 my-5">
          <p>© Marinov Design 2023 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
