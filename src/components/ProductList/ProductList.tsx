import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductListRow from "../ProductListRow/ProductListRow";

interface ProductListProps {
  data: any;
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "1280px" }}>
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
            data.map((product: any) => {
              return <ProductListRow product={product} />;
            })
          ) : (
            <ProductListRow product={data} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
