import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import { useProductsContext } from "@/context/ProductContext";
import { NextPage } from "next/types";
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

const Cart: NextPage<Props> = ({ items }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { products, jewelryProducts, cartProductIds, toggleCartProduct } =
    useProductsContext();

  const allProducts = [...products, ...jewelryProducts];

  const cartProducts = allProducts.filter((item) =>
    cartProductIds.includes(Number(item.id))
  );

  useEffect(() => {
    const productTotal = cartProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);

    setTotalPrice(productTotal);
  }, [cartProducts]);

  return (
    <div className="container-fluid">
      <div className="row brown-color">
        <div className="col-12">
          <h1>Your Cart</h1>
          <button className="btn btn-main">Continue Shopping</button>
        </div>
        <div className="col-12 d-flex justify-content-between ">
          <p>Product</p>
          <p>Price</p>
        </div>

        <div className="col-12">
          {cartProducts.length > 0 ? (
            cartProducts.map((item) => (
              <div key={item.id} className="col-6">
                <Link href={`/items/${item.id}`}>
                  <Card
                    images={item.images}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div className="content-display w-75 position-absolute">
              <h1>Your Cart is Empty</h1>
              <img src="/images/bg_spiral_butterfly_home_mobile.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      {cartProducts.length > 0 && (
        <div className="row">
          <div className="col-12">
            <p>Total Price: {totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
