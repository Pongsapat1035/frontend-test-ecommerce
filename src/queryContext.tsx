import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";

import type { QueryData, ProductData } from "./type";
import { useProduct } from "./productContext";

export interface MyContextType {
  queryData: QueryData;
  productLists: ProductData[];
  maxProductPrice: number;
  updateQuery: Function;
  resetQuery: Function;
}

const QueryContext = createContext<MyContextType | undefined>(undefined);

export function QueryProvider({ children }: { children: ReactElement }) {
  const { products } = useProduct();
  const [productLists, setProductLists] = useState<ProductData[]>([]);
  const [maxProductPrice, setMaxProductPrice] = useState(100);
  const [query, setQuery] = useState<QueryData>({
    search: "",
    material: [],
    maxPrice: maxProductPrice,
    minPrice: 0,
    collection: [],
    sortby: "new",
  });

  const updateQuery = (data: QueryData) => {
    for (const field in data) {
      setQuery((prev) => ({
        ...prev,
        [field as keyof QueryData]: data[field as keyof QueryData],
      }));
    }
  };

  const resetQuery = () => {
    setQuery({
      search: "",
      material: [],
      maxPrice: maxProductPrice,
      minPrice: 0,
      collection: [],
      sortby: "new",
    });
  };

  const getMaxPrice = (product: ProductData[]) => {
    const maxPriceProduct = product.sort((a, b) => b.price - a.price);
    return maxPriceProduct[0].price;
  };

  const sortProduct = (sortBy: string, products: ProductData[]) => {
    switch (sortBy) {
      case "name-a-z":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "name-z-a":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products.sort((a, b) => a.createAt.localeCompare(b.createAt));
    }
  };

  const queryProduct = () => {
    const { search, material, maxPrice, minPrice, sortby, collection } = query;

    let result = [];
    result = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (material.length) {
      result = result.filter((product) =>
        material.some((material) => product.material.includes(material))
      );
    }

    if (collection.length) {
      result = result.filter((product) =>
        collection.some((item) => product.collection.includes(item))
      );
    }

    result = result.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    const sortedResult = sortProduct(sortby, result);

    setProductLists(sortedResult);
  };

  useEffect(() => {
    if (products.length > 0) {
      const max = getMaxPrice(products);

      setQuery((prev) => ({
        ...prev,
        maxPrice: max,
      }));
      setMaxProductPrice(max);
      setProductLists(products);
    }
  }, [products]);

  useEffect(() => {
    queryProduct();
  }, [query]);

  return (
    <QueryContext.Provider
      value={{
        queryData: query,
        updateQuery,
        resetQuery,
        productLists,
        maxProductPrice,
      }}>
      {children}
    </QueryContext.Provider>
  );
}

export const useQueryProduct = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryProduct must be used within a QueryProvider");
  }
  return context;
};
