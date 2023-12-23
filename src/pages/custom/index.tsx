import { NextPage } from "next";

const Custom: NextPage = () => {
  return (
    <div className="custom-page">
      <div className="custom-title-inner">
        <img
          src="/images/custom/custom orders title.jpg"
          alt="custom-image"
          className="custom-image"
        />
        <p className="custom-title">Custom Made</p>
      </div>
      <div className="custom-text">
        <h4>You dream it, we’ll make it! </h4>
        <p>
          Whether it’s a piece of jewelry, an ornament or something entirely
          your own, share your idea with us and we’ll do our best to bring it to
          life.
        </p>
        <p>
          Don't forget to attach photos or provide a link from the internet to
          help us better understand your vision.
        </p>
        <p>
          Once we receive your request, we'll reach out to discuss all the
          details with you.
        </p>
      </div>
      <div className="vector-inner d-flex justify-content-center pb-3">
        <img src="/images/custom/Group 23.png" alt="" className="vector" />
      </div>

      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Name here ..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Email address
            </label>

            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Your email address here ..."
            />
          </div>
          <div className="form-group d-flex flex-column">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Message
            </label>

            <textarea
              name=""
              id="exampleFormControlInput3"
              cols="30"
              rows="10"
              placeholder="Your message here ..."
            ></textarea>
          </div>

          <div className="upload-image d-flex flex-column">
            <label htmlFor="attach-btn">Upload Image</label>
            <button className="attach-btn" id="attach-btn">
              {" "}
              + Attach images
            </button>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Send Link
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="https://www.example.com"
            />
          </div>
          <div className="form-group mt-3 d-flex flex-column">
            <p className="py-3 ">
              *Due to the nature of handcrafted products, keep in mind that the
              replicated piece may not appear exactly as shown on the photos.
              However, we will try our best to ensure it closely resembles the
              original!
            </p>
            <button className="send-request">Send request</button>
          </div>
        </form>
      </div>
      <div className="gallery py-5">
        <h2 className="p-3">Gallery</h2>
        <div className="gallery-inner">
          <img
            src="/images/custom/custom gallery 1.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom orders title.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 3.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 4.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 5.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 6.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 7.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="/images/custom/custom gallery 8.jpg"
            alt=""
            className="gallery-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Custom;
