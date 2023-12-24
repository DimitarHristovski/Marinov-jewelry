import React from "react";
import { GetServerSideProps } from "next";
import { ProductType } from "@/type/type";
import Card from "@/components/Card";
import Link from "next/link";

interface JewelryProps {
  items: ProductType[];
}

const Jewelry: React.FC<JewelryProps> = ({ items }) => {
  const [visibleItemCount, setVisibleItemCount] = React.useState(6); // Number of items to show initially

  const loadMoreItems = () => {
    setVisibleItemCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="container-fluid">
      {/* Your existing JSX */}
      <div className="row">
        {items.slice(0, visibleItemCount).map((item) => (
          <Link
            href={`/Jewelry/${item.id}`}
            key={item.id}
            passHref
            className="col-6"
          >
            <Card
              key={item.id}
              id={item.id}
              images={item.images}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </div>
      {visibleItemCount < items.length && (
        <button onClick={loadMoreItems} className="btn btn-primary">
          Load More
        </button>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  JewelryProps
> = async () => {
  try {
    const response = await fetch("http://localhost:5000/marinovjewelry");
    const data: ProductType[] = await response.json();
    return {
      props: {
        items: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        items: [],
      },
    };
  }
};

export default Jewelry;
