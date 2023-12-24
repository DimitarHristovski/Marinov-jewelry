import React, { createContext, useEffect, useState } from "react";
import { ProductType } from "@/type/type";

interface ProductsContextType {
  products: ProductType[];
  favoriteProductsIds: number[];
  cartProductIds: number[];
  toggleFavorite: (productId: number) => void;
  toggleCartProduct: (productId: number) => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [favoriteProductsIds, setFavoriteProductsIds] = useState<number[]>(
    getLocalStorageItem("favoriteProductsIds")
  );
  const [cartProductIds, setCartProductIds] = useState<number[]>(
    getLocalStorageItem("cartProductIds")
  );

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("http://localhost:5000/marinovhome");
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProductData();
  }, []);

  useEffect(() => {
    setLocalStorageItem("favoriteProductsIds", favoriteProductsIds);
    setLocalStorageItem("cartProductIds", cartProductIds);
  }, [favoriteProductsIds, cartProductIds]);

  const toggleFavorite = createToggleFunction(setFavoriteProductsIds);
  const toggleCartProduct = createToggleFunction(setCartProductIds);

  const contextValue = {
    products,
    favoriteProductsIds,
    toggleFavorite,
    cartProductIds,
    toggleCartProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

function getLocalStorageItem(key: string): number[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (error) {
    console.error(`Error parsing ${key} from localStorage:`, error);
    return [];
  }
}

function setLocalStorageItem(key: string, value: number[]) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error storing ${key} in localStorage:`, error);
  }
}

function createToggleFunction(
  setState: React.Dispatch<React.SetStateAction<number[]>>
) {
  return (productId: number) => {
    setState((prevIds) => {
      if (prevIds.includes(productId)) {
        return prevIds.filter((id) => id !== productId);
      } else {
        return [...prevIds, productId];
      }
    });
  };
}

export const useProductsContext = () => {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(
      "useProductsContext must be used within a ProductsContextProvider"
    );
  }
  return context;
};
