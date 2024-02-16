import { render, fireEvent, screen } from "@testing-library/react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ProductListRow from "./ProductListRow";
import { Product } from "../../utils/types";

describe("ProductListRow", () => {
  const mockProduct: Product = {
    id: 1,
    name: "Test Product",
    year: 2022,
    color: "#000000",
    pantone_value: "000000",
  };

  test("renders ProductListRow without crashing", () => {
    render(
      <ProductContext.Provider value={mockProduct}>
        <table>
          <tbody>
            <ProductListRow />
          </tbody>
        </table>
      </ProductContext.Provider>
    );
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });

  test("opens the modal when the row is clicked", () => {
    render(
      <ProductContext.Provider value={mockProduct}>
        <table>
          <tbody>
            <ProductListRow />
          </tbody>
        </table>
      </ProductContext.Provider>
    );
    fireEvent.click(screen.getByText(mockProduct.name));
    expect(screen.getByTestId("product-modal")).toBeInTheDocument();
  });

  test("closes the modal when the close button is clicked", () => {
    render(
      <ProductContext.Provider value={mockProduct}>
        <table>
          <tbody>
            <ProductListRow />
          </tbody>
        </table>
      </ProductContext.Provider>
    );
    fireEvent.click(screen.getByText(mockProduct.name));
    fireEvent.click(screen.getByTestId("close-modal-button"));
    expect(screen.queryByTestId("product-modal")).toBeNull();
  });
});
