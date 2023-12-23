import { NextPage } from "next";

const Custom: NextPage = () => {
  return (
    <div className="custom-page">
      <div className="custom-title">
        <img
          src="/images/custom/custom orders title.jpg"
          alt="custom-image"
          className="custom-image"
        />
        <p>Custom Made</p>
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
    </div>
  );
};
export default Custom;
