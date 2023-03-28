import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import CreateVehicle from "./CreateVehicle";
import { BrowserRouter,Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="Logo"
          src="https://www.cdkglobal.com/sites/cdk4/themes/custom/cdk/logo.svg"
          height={"30px"}
        />
      </header>
      <BrowserRouter>
      <Switch>
        <Route path="/Add"><CreateVehicle /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;