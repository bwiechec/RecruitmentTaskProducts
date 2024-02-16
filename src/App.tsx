import "./App.css";
import useProductList from "./hooks/useProductList";
import { Box, CircularProgress, Input, Pagination, Stack } from "@mui/material";
import { useQueryParams } from "./hooks/useQueryParams";
import { debounce } from "lodash";
import ProductList from "./components/ProductList/ProductList";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import { useEffect, useState } from "react";

function App() {
  const { queryParams, handleSetQueryParams } = useQueryParams();
  const { data, isLoading, isPreviousData } = useProductList(queryParams);
  const [shouldSnackbarOpen, setShouldSnackbarOpen] = useState(false);

  const handlePageChange = (_event: any, value: number) => {
    handleSetQueryParams([{ key: "page", value: value }]);
  };

  const handleIdChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSetQueryParams([{ key: "id", value: event.target.value }]);
    },
    250
  );

  const handleSnackbarClose = () => {
    setShouldSnackbarOpen(false);
  };

  //Error 404 is thrown where no products are found
  const noData = data?.response?.status === 404 || !data?.data;

  useEffect(() => {
    if (data?.response?.status && data?.response?.status !== 404) {
      setShouldSnackbarOpen(true);
    }

    setTimeout(() => {
      handleSnackbarClose();
    }, 3000);
  }, [data?.response?.status]);

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
      <ErrorSnackbar
        onClose={handleSnackbarClose}
        open={shouldSnackbarOpen}
        message={data?.message}
      />
      <Input
        placeholder="Product Identifier"
        type="number"
        sx={{ width: "20rem" }}
        onChange={handleIdChange}
        defaultValue={queryParams.find((param) => param.key === "id")?.value}
      />
      {data.data && (
        <ProductList data={data.data} isPreviousData={isPreviousData} />
      )}
      {noData && <Box>No products found</Box>}
      <Pagination
        count={data.total_pages ?? 1}
        page={data.page ?? 1}
        onChange={handlePageChange}
      />
    </Stack>
  );
}

export default App;
