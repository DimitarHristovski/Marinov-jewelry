import React, { useEffect, useState } from "react";
import { ProductType } from "@/type/type";
const HomeDecor: React.FC = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  const [visibleItemCount, setVisibleItemCount] = useState(6); // Number of items to show initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/marinovhome");
        const data: ProductType[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const loadMoreItems = () => {
    setVisibleItemCount((prevCount) => prevCount + 6);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {" "}
          <img src="/images/HomeDecor-Helmet.png" alt="" />
          <h1>Home Decor</h1>
          <div className="d-flex ">
            <p className="underline m-1">Helmets</p>
            <p className="underline m-1">Other</p>
          </div>
          <div className="d-flex">
            <input
              type="text"
              className="form-control m-1"
              placeholder="Search"
            />
            <p>Sort:Featured</p>
          </div>
        </div>
      </div>
      <div className="row">
        {items.slice(0, visibleItemCount).map((item) => (
          <div key={item.id} className="col-6">
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
      {visibleItemCount < items.length && (
        <button onClick={loadMoreItems} className="">
          Load More
        </button>
      )}
    </div>
  );
};

export default HomeDecor;
