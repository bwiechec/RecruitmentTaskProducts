import { Box, Stack, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Product } from "../../utils/types";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  color: "white",
  mixBlendMode: "difference",
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="product-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack spacing={4} sx={style} bgcolor={`${product.color}`}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product identifier:</Typography>{" "}
          <Typography>{product.id}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product name:</Typography>{" "}
          <Typography>{product.name}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product year:</Typography>{" "}
          <Typography>{product.year}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product color:</Typography>{" "}
          <Typography>{product.color}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product pantone value:</Typography>{" "}
          <Typography>{product.pantone_value}</Typography>
        </Box>
      </Stack>
    </Modal>
  );
};

export default ProductModal;
