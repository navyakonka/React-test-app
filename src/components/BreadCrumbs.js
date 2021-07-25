import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useBreadcrumbs from "../hooks/useBreadcrumbs";

const useStyles = makeStyles((theme) => ({
  breadCrumb: {
    marginBottom: theme.spacing(2),
  },
  crumb: {
    textTransform: "capitalize",
  },
}));

const BreadCrumbs = () => {
  const classes = useStyles();
  const links = useBreadcrumbs();
  return (
    <Breadcrumbs className={classes.breadCrumb}>
      {links.map((link, index) => (
        <div key={link}>
          {link === "" && (
            <Link component={RouterLink} color="inherit" to="/">
              Home
            </Link>
          )}
          {index + 1 === links.length && (
            <Typography color="textPrimary" className={classes.crumb}>
              {link}
            </Typography>
          )}
        </div>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
