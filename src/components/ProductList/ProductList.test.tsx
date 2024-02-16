import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

describe("ProductList", () => {
  const mockData = [
    {
      id: "1",
      name: "Test Product 1",
      year: "2022",
      color: "#000000",
      pantone_value: "19-1664",
    },
    {
      id: "2",
      name: "Test Product 2",
      year: "2021",
      color: "#FFFFFF",
      pantone_value: "17-5104",
    },
  ];

  test("renders ProductList without crashing", () => {
    render(<ProductList data={mockData} />);
    expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();
  });

  test("renders LoadingOverlay when isPreviousData is true", () => {
    render(<ProductList data={mockData} isPreviousData={true} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("does not render LoadingOverlay when isPreviousData is false", () => {
    render(<ProductList data={mockData} isPreviousData={false} />);
    expect(
      screen.getByTestId("spinner-backdrop").getAttribute("aria-hidden")
    ).toEqual("true");
  });
});
