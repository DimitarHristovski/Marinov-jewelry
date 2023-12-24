import React, { useEffect } from "react";
import { ProductContext } from "./ProductContext";

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
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
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
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
