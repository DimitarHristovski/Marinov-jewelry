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
        </form>
      </div>
    </div>
  );
};
export default Custom;
