import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const UserDetailsCard = ({ firstName, lastName }) => (
  <Card>
    <CardHeader title="User" />
    <CardContent>
      <Typography variant="body1">First Name: {firstName}</Typography>
      <Typography variant="body1">Last Name: {lastName}</Typography>
    </CardContent>
  </Card>
);

UserDetailsCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserDetailsCard;
