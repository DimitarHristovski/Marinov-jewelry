import { ProductType } from "@/type/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface CareTip {
  title: string;
  description: string;
}

interface Image {
  pic1: string;
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
    <div className="container">
      <div>
        <Slider {...carouselSettings}>
          {items.images.map((image, index) => (
            <div key={index}>
              <img src={image.pic1} alt={image.pic1} />
            </div>
          ))}
        </Slider>
      </div>
      <h2>{items.title}</h2>
      <p>{items.price}</p>
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
      <p>{items.description}</p>
      <div>
        <p>Material: {items.material}</p>
        <p>Dimensions: {items.dimensions}</p>
        <p>Weight: {items.weight}</p>
      </div>

      <div>
        <h4>Care & Maintenance Tips:</h4>
        <ul>
          {items.caretips.slice(0, visibleTips).map((tip, index) => (
            <li key={index}>
              <strong>{tip.title}:</strong> {tip.description}
            </li>
          ))}
        </ul>
        {visibleTips < items.caretips.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
        <p>Follow these tips for enduring beauty.</p>
      </div>
      <div>
        <h3>You Might Also Like:</h3>
        {items.images.map((image, index) => (
          <div key={index}>
            <img src={image.pic1} alt={image.pic1} />
          </div>
        ))}
        <p>{items.title}</p>
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
