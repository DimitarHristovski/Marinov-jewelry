import React from "react";

const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src="/images/animation_bracelet.png" alt="" />
          <div className="content-display-top-right d-flex flex-column position-absolute  p-3 w-50 text-brown text-right">
            <h3>Unique Handcrafted Jewelry</h3>
            <button className="btn btn-main">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src="/images/animation_bee.png" alt="" />
          <div className="content-display-top-left d-flex flex-column position-absolute  p-3 w-50  text-brown">
            <h3>Custom Made</h3>
            <button className="btn btn-main">Order Now</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {" "}
          <img src="/images/animation_helmet.png" alt="" />
          <div className="content-display-top-right d-flex flex-column position-absolute  p-3 w-50  text-right text-brown">
            <h3>Exceptional Home Decor</h3>
            <button className="btn btn-main">Discover</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {" "}
          <img src="/images/bg_spiral_butterfly_home_mobile.svg" alt="" />
          <div className="content-display-bottom w-75 position-absolute">
            {" "}
            <h1>Always unique, never exactly the same!</h1>
            <p>
              Each piece is handcrafted with meticulous attention to detail in
              our workshop in Ohrid.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 my-2">
          {" "}
          <img src="/images/Ohrid_razglednica_1913.png" alt="" />
          <h1>Over a century old tradition</h1>
          <p>
            As time unfolds, our family business has been growing and evolving,
            adapting to the changing tides while remaining rooted in our
            heritage.
          </p>
          <button className="btn btn-brown text-light w-50">
            Contact Details
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 position-relative my-2 ">
          {" "}
          <img src="/images/ohrid_old_town.png" alt="" />
          <div className="d-flex flex-column position-absolute content-display-bottom p-3 w-75 ">
            {" "}
            <h1>Visit Our Shop</h1>{" "}
            <p>
              Come meet us at the heart of Ohrid’s old town and experience the
              art of craftsmanship firsthand!
            </p>
            <button className="btn btn-brown text-light w-75 ">
              Contact Details
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {" "}
          <h1>What Our Clients Say</h1>
          <div>
            {" "}
            <img src="\images\“.png" alt="" />{" "}
            <p>
              “I stumbled upon Marinov during my trip to Ohrid, and I'm so glad
              I did. Their shop is a hidden gem filled with beautifully
              handcrafted copper pieces. I bought a pair of earrings, and every
              time I wear them, I receive compliments. The unique designs and
              the warmth of the staff make Marinov an unforgettable experience.
              Highly recommended!”
            </p>
            <small>- Elsa Johansson, Sweden</small>
            <img src="\images\”.png" alt="" />
          </div>
          <div>
            <img src="\images\“.png" alt="" />{" "}
            <p>
              I recently purchased a copper necklace from Marinov, and I
              couldn't be happier with my choice. The craftsmanship is
              impeccable, and the attention to detail is evident in every link.
              The necklace not only complements my style perfectly but also
              garners admiration wherever I go. Marinov's jewelry isn't just an
              accessory; it's a work of art that adds elegance to any outfit.
              I'm genuinely impressed and will definitely be returning for more
              pieces!
            </p>
            <small>- Sofia Oliveira, Portugal</small>
            <img src="\images\”.png" alt="" />
          </div>
          <div>
            <img src="\images\“.png" alt="" />{" "}
            <p>
              Marinov's copper products reflect the essence of Ohrid's rich
              heritage. I ordered a custom-made copper lamp for my home, and it
              exceeded my expectations. The team at Marinov went above and
              beyond to ensure every detail was perfect. Their dedication to
              preserving tradition while creating modern masterpieces is truly
              commendable. I am immensely satisfied with my purchase!
            </p>
            <small>- Matthias Schneider, Austria</small>
            <img src="\images\”.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
