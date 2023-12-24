import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CareTip {
  tip: string;
  tiptext: string;
}

interface Image {
  pic: string;
}
interface ProductType {
  id: string;
  title: string;
  price: number;
  stock: number;
  description: string;
  material: string;
  dimensions: string;
  weight: string;
  caretips: CareTip[];
  images: Image[];
}
interface Props {
  items: ProductType;
}

const ItemDetailPage: NextPage<Props> = ({ items }) => {
  const [visibleTips, setVisibleTips] = useState(3);

  const handleLoadMore = () => {
    setVisibleTips(items?.caretips.length || 0);
  };
  if (!items) {
    return <div> item doesnt exist...</div>;
  }
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="detail-page">
      <div>
        <Slider {...carouselSettings}>
          {items.images.map((image, index) => (
            <div key={index}>
              <img
                src={image.pic}
                alt={image.pic}
                className="detail-image-carousel"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-3">
        <h2 className="mt-3 px-3">{items.title}</h2>
        <h3 className="px-3">£ {items.price}.00</h3>
        <div className="d-flex justify-content-between m-3">
          <div>
            <button>-</button>
            <button>1 </button>
            <button> + </button>
          </div>
          <span> Save for later</span>
        </div>
        <button className="add-btn"> Add to Cart </button>
      </div>

      <div>
        {items.stock === 0 && (
          <div>
            <p> - Out of Stock -</p>
            <p>
              Unfortunately, this item has been sold. But all is not lost! Write
              to us and we'll do our best to replicate it for you!
            </p>
            <button>Request Custom order</button>
          </div>
        )}
      </div>

      <div className="px-3 py-5 desc-inner">
        <p className="pt-5">{items.description}</p>
        <p>
          <strong>Material:</strong> {items.material}
        </p>
        <p>
          <strong>Dimensions:</strong> {items.dimensions}
        </p>
        <p>
          <strong>Weight:</strong> {items.weight}
        </p>
      </div>

      <div className="px-3 py-3">
        <h4>Care & Maintenance Tips:</h4>
        <ul className="tips">
          {items.caretips.slice(0, visibleTips).map((tip, index) => {
            console.log(tip);
            return (
              <li key={index}>
                <strong>- {tip.tip}</strong> {tip.tiptext}
              </li>
            );
          })}
        </ul>
        <div className="text-center">
          {visibleTips < items.caretips.length && (
            <button onClick={handleLoadMore} className="show-more-btn">
              + Show more
            </button>
          )}
        </div>

        <p>Follow these tips for enduring beauty.</p>
      </div>
      <div>
        <h3>You Might Also Like:</h3>
        <div className="d-flex">
          {items.images.map((image, index) => (
            <div key={index}>
              <img src={image.pic} alt={image.pic} className="detail-image" />
              <p className="mb-0">
                <strong>{items.title}</strong>
              </p>
              <p>£ {items.price}.00</p>
            </div>
          ))}
        </div>
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
