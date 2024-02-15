import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface ProductListProps {
  data: any;
}

const ProductList = ({ data }: ProductListProps) => {
  console.log(data.length);
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "1280px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length !== undefined ? (
            data.map((product: any) => {
              return (
                <TableRow
                  key={product.id}
                  sx={{ backgroundColor: `${product.color}` }}
                >
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.year}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow key={data.id} sx={{ backgroundColor: `${data.color}` }}>
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center">{data.name}</TableCell>
              <TableCell align="center">{data.year}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
