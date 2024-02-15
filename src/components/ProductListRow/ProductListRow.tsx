import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";

const ProductListRow = ({ product }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ProductModal
        product={product}
        isOpen={isOpen}
        onClose={handleModalClose}
      />
      <TableRow
        key={product.id}
        sx={{ backgroundColor: `${product.color}`, cursor: "pointer" }}
        onClick={handleModalOpen}
      >
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.year}</TableCell>
      </TableRow>
    </>
  );
};

export default ProductListRow;
