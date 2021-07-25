import {
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { TABLE_ROWS } from "../constants";
import UserContext from "../context/UserContext";
import BreadCrumbs from "./BreadCrumbs";
import UserDetailsCard from "./UserDetailsCard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    fontWeight: "bolder",
  },
});

function ProductTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Item</TableCell>
            <TableCell className={classes.head} align="right">
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE_ROWS.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Products = () => {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <Grid container spacing={3}>
      <Grid item md={8} sm={12}>
        <Typography variant="h3" gutterBottom>
          Products
        </Typography>
        <BreadCrumbs />
        <ProductTable />
      </Grid>
      <Grid item md={4} sm={12}>
        <UserDetailsCard firstName={firstName} lastName={lastName} />
      </Grid>
    </Grid>
  );
};

export default Products;
