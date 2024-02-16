import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductListRow from "../ProductListRow/ProductListRow";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { ProductContextProvider } from "../../context/ProductContext/ProductContext";
import { Product } from "../../utils/types";

interface ProductListProps {
  data: any;
  isPreviousData?: boolean;
}

const ProductList = ({ data, isPreviousData }: ProductListProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "1280px", position: "relative" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" width={"33%"}>
              Id
            </TableCell>
            <TableCell align="center" width={"33%"}>
              Name
            </TableCell>
            <TableCell align="center" width={"33%"}>
              Year
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length !== undefined ? (
            data.map((product: Product) => {
              return (
                <ProductContextProvider value={product} key={product.id}>
                  <ProductListRow />
                </ProductContextProvider>
              );
            })
          ) : (
            <ProductContextProvider value={data} key={data.id}>
              <ProductListRow />
            </ProductContextProvider>
          )}
        </TableBody>
      </Table>
      <LoadingOverlay open={isPreviousData ?? false} />
    </TableContainer>
  );
};

export default ProductList;
