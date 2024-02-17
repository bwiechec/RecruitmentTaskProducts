import Box from "@mui/material/Box";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import Typography from "@mui/material/Typography";

interface NoProductsFoundProps {
  isPreviousData: boolean;
}

const NoProductsFound = ({ isPreviousData }: NoProductsFoundProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        width: "100%",
        textAlign: "center",
        position: "relative",
        py: 2,
      }}
    >
      {!isPreviousData && <Typography>No products found</Typography>}
      <LoadingOverlay open={isPreviousData} withoutBackground={true} />
    </Box>
  );
};

export default NoProductsFound;
