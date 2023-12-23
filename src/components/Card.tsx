import React from "react";

const Card: React.FC<any> = ({ image, name, price }) => {
  return (
    <div className="col-12">
      <img src={image} alt={name} className="d-block w-100 img-fluid m-1" />
      <div className="text-left">
        <p>{name}</p>
        <p>{price} </p>
      </div>
    </div>
  );
};

export default Card;
