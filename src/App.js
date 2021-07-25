import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { DRAWER_ITEMS, INITIAL_STATE } from "./constants";
import UserContext from "./context/UserContext";
import Routes from "./routes";

const theme = createTheme();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const [user, updateUser] = useState(INITIAL_STATE);
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ ...user, updateUser }}>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar}>
              <Toolbar>
                <Typography variant="h5" className={classes.title}>
                  App
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              className={classes.drawer}
              classes={{ paper: classes.drawerPaper }}
            >
              <Toolbar />
              <List>
                {DRAWER_ITEMS.map(({ name, icon, path }) => (
                  <ListItem button component={Link} to={path} key={name}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <main className={classes.content}>
              <Toolbar />
              <Routes />
            </main>
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
