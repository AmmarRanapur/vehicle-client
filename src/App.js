import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateVehicle from "./CreateVehicle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Add",
      element: <CreateVehicle />,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="Logo"
          src="https://www.cdkglobal.com/sites/cdk4/themes/custom/cdk/logo.svg"
          height={"30px"}
        />
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
