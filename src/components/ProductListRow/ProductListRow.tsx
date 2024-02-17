import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { parseTextColor } from "../../utils/helper";

const ProductListRow = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const product = useProduct();

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  if (!product) {
    return null;
  }

  const color = parseTextColor(product?.color);

  return (
    <>
      <ProductModal isOpen={isOpen} onClose={handleModalClose} />
      <TableRow
        key={product?.id}
        sx={{
          backgroundColor: `${product?.color}`,
          cursor: "pointer",
        }}
        onClick={handleModalOpen}
      >
        <TableCell
          sx={{
            color: `${color}`,
          }}
          align="center"
        >
          {product?.id}
        </TableCell>
        <TableCell
          sx={{
            color: `${color}`,
          }}
          align="center"
        >
          {product?.name}
        </TableCell>
        <TableCell
          sx={{
            color: `${color}`,
          }}
          align="center"
        >
          {product?.year}
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductListRow;
