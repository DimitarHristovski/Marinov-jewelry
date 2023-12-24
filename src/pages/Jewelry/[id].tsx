import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface CareTip {
  tip1: string;
  tip1text: string;
}

interface Image {
  pic1: string;
  pic2: string;
  pic3: string;
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
                src={image.pic1}
                alt={image.pic1}
                className="detail-image-carousel"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-3">
        <h2 className="mt-3 px-3">{items.title}</h2>
        <p className="px-3">£ {items.price}</p>
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

      <div className="px-3 desc-inner">
        <p className="pt-5">{items.description}</p>
        <p>
          <span>Material:</span> {items.material}
        </p>
        <p>
          <span>Dimensions:</span> {items.dimensions}
        </p>
        <p>
          <span>Weight:</span> {items.weight}
        </p>
      </div>

      <div className="px-3">
        <h4>Care & Maintenance Tips:</h4>
        <ul>
          {items.caretips.slice(0, visibleTips).map((tip, index) => {
            console.log(tip);
            return (
              <li key={index}>
                <strong>{tip.tip1}:</strong> {tip.tip1text}
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
        {items.images.map((image, index) => (
          <div key={index}>
            <img src={image.pic1} alt={image.pic1} className="detail-image" />
          </div>
        ))}
        <p>{items.title}</p>
      </div>
    </div>
  );
};

export default ItemDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/marinovjewelry");
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
    const res = await fetch(
      `http://localhost:5000/marinovjewelry/${params.id}`
    );
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
