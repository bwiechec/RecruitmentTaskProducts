import { createContext, useContext } from "react";
import { Product } from "../../utils/types";

export const ProductContext = createContext<Product | undefined>(undefined);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export const ProductContextProvider = ({
  value,
  children,
}: {
  value: Product;
  children: React.ReactNode;
}) => {
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
