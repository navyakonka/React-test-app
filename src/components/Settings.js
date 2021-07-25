import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import BreadCrumbs from "./BreadCrumbs";
import UserDetailsCard from "./UserDetailsCard";

const Settings = () => {
  const { firstName, lastName, updateUser } = useContext(UserContext);

  const [user, setUser] = useState({ firstName, lastName });

  const onChange = (event) =>
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));

  const onSubmit = (event) => {
    event.preventDefault();
    updateUser(user);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Typography variant="h3" gutterBottom>
          Settings
        </Typography>
        <BreadCrumbs />
        <Grid container component="form" onSubmit={onSubmit} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              value={user.firstName}
              name="firstName"
              fullWidth
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              value={user.lastName}
              name="lastName"
              fullWidth
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={12}>
        <UserDetailsCard firstName={firstName} lastName={lastName} />
      </Grid>
    </Grid>
  );
};

export default Settings;
