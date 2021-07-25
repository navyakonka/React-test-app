import { DashboardRounded, Home, Settings } from "@material-ui/icons";

export const DRAWER_ITEMS = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Products", icon: <DashboardRounded />, path: "/products" },
  { name: "Settings", icon: <Settings />, path: "/settings" },
];

export const INITIAL_STATE = {
  firstName: "James",
  lastName: "Bond",
};

function createData(name, price) {
  return { name, price };
}

export const TABLE_ROWS = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];
