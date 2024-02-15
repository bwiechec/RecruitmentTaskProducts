import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingOverlayProps {
  open: boolean;
}

const LoadingOverlay = ({ open }: LoadingOverlayProps) => {
  return (
    <Backdrop open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingOverlay;
