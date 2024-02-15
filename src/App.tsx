import "./App.css";
import useProductList from "./hooks/useProductList";
import { Box, CircularProgress, Input, Pagination, Stack } from "@mui/material";
import { useQueryParams } from "./hooks/useQueryParams";
import { debounce } from "lodash";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { queryParams, handleSetQueryParams } = useQueryParams();
  const { data, isLoading, isPreviousData } = useProductList(queryParams);

  const handlePageChange = (_event: any, value: number) => {
    handleSetQueryParams([{ key: "page", value: value }]);
  };

  const handleIdChange = debounce((event: any) => {
    handleSetQueryParams([{ key: "id", value: event.target.value }]);
  }, 250);

  if (isLoading && !data) {
    return (
      <Stack
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
        boxSizing={"border-box"}
      >
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  return (
    <Stack
      spacing={4}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
      boxSizing={"border-box"}
    >
      <LoadingOverlay open={isPreviousData} />
      <Input
        placeholder="Product Identifier"
        type="number"
        sx={{ width: "20rem" }}
        onChange={handleIdChange}
        defaultValue={queryParams.find((param) => param.key === "id")?.value}
      />
      {data.data && <ProductList data={data.data} />}
      {data?.response?.status === 404 && <Box>No products found</Box>}
      <Pagination
        count={data.total_pages ?? 1}
        page={data.page ?? 1}
        onChange={handlePageChange}
      />
    </Stack>
  );
}

export default App;
