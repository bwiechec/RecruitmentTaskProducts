import { Box, Stack, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useProduct } from "../../context/ProductContext/ProductContext";
import CloseIcon from "@mui/icons-material/Close";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ isOpen, onClose }: ProductModalProps) => {
  const product = useProduct();
  return (
    <Modal open={isOpen} onClose={onClose} data-testid="product-modal">
      <Stack
        spacing={4}
        sx={{ transform: "translate(-50%, -50%)" }}
        bgcolor={`${product.color}`}
        p={4}
        top={"50%"}
        left={"50%"}
        boxShadow={24}
        borderRadius={"0.5rem"}
        position={"absolute"}
        minWidth={{
          xs: "200px",
          sm: "300px",
          md: "400px",
          lg: "500px",
        }}
      >
        <Box
          position={"absolute"}
          right={"1.75rem"}
          top={"1.25rem"}
          sx={{ cursor: "pointer" }}
          onClick={onClose}
          data-testid="close-modal-button"
        >
          <CloseIcon />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product identifier:</Typography>
          <Typography>{product.id}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product name:</Typography>
          <Typography>{product.name}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product year:</Typography>
          <Typography>{product.year}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product color:</Typography>
          <Typography>{product.color}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Product pantone value:</Typography>
          <Typography>{product.pantone_value}</Typography>
        </Box>
      </Stack>
    </Modal>
  );
};

export default ProductModal;
