import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";
import "./menu.css";
//import MenuIcon from "@material-ui/icons-material/Menu";

function DenseAppBar() {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <a onClick={() => history.push("/")}>Sair</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default DenseAppBar;
