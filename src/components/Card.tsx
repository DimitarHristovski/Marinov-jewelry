import React from "react";
interface CardProps {
  id: string;
  title: string;
  price: number;

  images: Array<{ [key: string]: string }>;
}
const Card: React.FC<CardProps> = ({ id, images, title, price }) => {
  return (
    <div className="col-12">
      {images.length > 0 && (
        <img
          src={images[0].pic1}
          alt={title}
          className="d-block w-100 img-fluid m-1"
        />
      )}
      <div className="text-left">
        <p>{title}</p>
        <p>€ {price}</p>
      </div>
    </div>
  );
};

export default Card;
