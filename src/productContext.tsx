import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";
import rawData from "./mockData.json";

import type { ProductData } from "./type";

export interface MyContextType {
  products: ProductData[];
}

const ProductContext = createContext<MyContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactElement }) {
  const [productLists, setProductLists] = useState<ProductData[]>([]);

  useEffect(() => {
    const productsData: ProductData[] = rawData.products as ProductData[];
    setProductLists(productsData);
  }, []);

  return (
    <ProductContext.Provider value={{ products: productLists }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
