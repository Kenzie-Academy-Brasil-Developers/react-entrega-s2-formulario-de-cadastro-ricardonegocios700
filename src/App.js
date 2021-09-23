import { Menu } from "@material-ui/core";
import "./App.css";
import Routes from "./routes/routes.jsx";
import DenseAppBar from "./components/Menu/menu.jsx";

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <Routes />
    </div>
  );
}

export default App;
