import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Slider from "react-slick";
import { ProductType } from "@/type/type";

interface Props {
  items: ProductType;
  images: Array<{ [key: string]: string }>;
  pic1: string;
}

const ItemDetailPage: NextPage<Props> = ({ items, images, pic1 }) => {
  const [visibleTips, setVisibleTips] = useState(3);

  const handleLoadMore = () => {
    setVisibleTips(items.caretips.length || 0);
  };

  if (!items) {
    return <div>Item doesn't exist...</div>;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <Slider {...carouselSettings}>
            {items.images.map((imageObj, index) => (
              <div key={index}>
                <img
                  src={Object.values(imageObj)[0]}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Slider> */}
        </div>

        <div className="col-12">
          <h2>{items.title}</h2>
          <p>Price: {items.price}</p>
          <p>{items.description}</p>
          <p>Material: {items.material}</p>
          <p>Dimensions: {items.dimensions}</p>
          <p>Weight: {items.weight}</p>
        </div>

        {items.stock === 0 && (
          <div className="col-12">
            <p>- Out of Stock -</p>
            <p>
              Unfortunately, this item has been sold. But all is not lost! Write
              to us and we'll do our best to replicate it for you!
            </p>
            <button>Request Custom order</button>
          </div>
        )}

        <div className="col-12">
          <h4>Care & Maintenance Tips:</h4>
          <ul>
            {items.caretips.slice(0, visibleTips).map((tip, index) => (
              <li key={index}>
                <strong>{Object.keys(tip)[0]}:</strong> {Object.values(tip)[0]}
              </li>
            ))}
          </ul>
          {visibleTips < items.caretips.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
        {/* 
        <div className="col-12">
          <h3>You Might Also Like:</h3>
          {items.images.map((image, index) => (
            <div key={index}>
              <img src={Object.values(image)[0]} alt={`Image ${index + 1}`} />
            </div>
          ))}
          <p>{items.title}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ItemDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/marinovhome");
  const data: ProductType[] = await res.json();

  const paths = data.map((items) => {
    return {
      params: {
        id: items.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const res = await fetch(`http://localhost:5000/marinovhome/${params.id}`);
    const data: ProductType = await res.json();

    return {
      props: {
        items: data,
      },
    };
  }

  return {
    props: {
      items: null,
    },
  };
};
