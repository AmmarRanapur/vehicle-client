import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    getFromApi();
  }, []);

  const getFromApi = () => {
    axios
      .get("https://localhost:7288/vehicle")
      .then((response) => {
        setVehicleList(response.data.filter((ele) => ele.IsActive));
        console.log(vehicleList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function removeVehicle(id) {
    axios
      .delete("https://localhost:7288/vehicle/" + id)
      .then((response) => {
        console.log(response);
        getFromApi();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function editVehicle(vehicle){
    navigate('/Add',{state:vehicle});
  }
  return (
    <div className="main-div">
      <div className="btnDiv">
        <button class="btn addBtn" onClick={() => navigate("/Add")}>
          ADD
        </button>
      </div>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">VIN</th>
            <th scope="col">Year</th>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Info</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.length > 0 &&
            vehicleList?.map((item, ind) => (
              <tr>
                <th scope="row">{ind + 1}</th>
                <td>{item.VIN}</td>
                <td>{item.Year}</td>
                <td>{item.Make}</td>
                <td>{item.Model}</td>
                <td>{item.Description}</td>
                <td>
                  <button class="btn btn-primary" onClick={()=>{
                    editVehicle(item);
                  }}>
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={(event) => {
                      removeVehicle(item.Id);
                    }}
                  >
                    {" "}
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
