import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingOverlayProps {
  open: boolean;
}

const LoadingOverlay = ({ open }: LoadingOverlayProps) => {
  return (
    <Backdrop
      open={open}
      sx={{ position: "absolute" }}
      data-testid="spinner-backdrop"
    >
      <CircularProgress color="inherit" data-testid="spinner" />
    </Backdrop>
  );
};

export default LoadingOverlay;
