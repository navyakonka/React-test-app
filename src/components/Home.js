import { Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import BreadCrumbs from "./BreadCrumbs";
import UserDetailsCard from "./UserDetailsCard";

const Home = () => {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <Grid container spacing={3}>
      <Grid item md={8} sm={12}>
        <Typography variant="h3" gutterBottom>
          Home
        </Typography>
        <BreadCrumbs />
        <Typography variant="body1" gutterBottom>
          Welcome Home!
        </Typography>
      </Grid>
      <Grid item md={4} sm={12}>
        <UserDetailsCard firstName={firstName} lastName={lastName} />
      </Grid>
    </Grid>
  );
};

export default Home;
