import { render, fireEvent, screen } from "@testing-library/react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ProductModal from "./ProductModal";

describe("ProductModal", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    year: 2022,
    color: "#000000",
    pantone_value: "19-1664",
  };

  test("doesn't render ProductModal when isOpen is false", () => {
    render(
      <ProductContext.Provider value={mockProduct}>
        <ProductModal isOpen={false} onClose={() => {}} />
      </ProductContext.Provider>
    );
    expect(screen.queryByText(/Test Product/i)).toBeNull();
  });

  test("displays the product details when open", () => {
    render(
      <ProductContext.Provider value={mockProduct}>
        <ProductModal isOpen={true} onClose={() => {}} />
      </ProductContext.Provider>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/#000000/i)).toBeInTheDocument();
    expect(screen.getByText(/19-1664/i)).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <ProductContext.Provider value={mockProduct}>
        <ProductModal isOpen={true} onClose={handleClose} />
      </ProductContext.Provider>
    );
    fireEvent.click(screen.getByTestId("close-modal-button"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
