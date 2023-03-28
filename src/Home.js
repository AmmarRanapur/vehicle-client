import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, IconAdd, IconDelete, IconEdit } from "cdk-radial";
import styled from "styled-components";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import classNames from "classnames";
import {
  TableContainer,
  TableHeader,
  TableFooter,
  TableColumnDndContainer,
  IconRenderer,
  TextRenderer,
  RatingRenderer,
  CELL_CLASSES,
  CELL_ICON_TYPE,
  CELL_RENDERERS,
  COLUMN_TYPES,
  DEFAULT_ROWS_PER_PAGE_OPTIONS,
} from "cdk-radial";
import {useSelector,useDispatch} from 'react-redux';
import {updateList} from './features/vehicles';

function Home(props) {
  const history = useHistory();
  const [vehicleList, setVehicleList] = useState([]);
  const globalVehicleList = useSelector((state)=>state.vehicles.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getFromApi();
  }, []);

  const getFromApi = () => {
    axios
      .get("https://localhost:7288/vehicle")
      .then((response) => {
        setVehicleList(response.data.filter((ele) => ele.IsActive));
        // dispatch(updateList(response.data.filter((ele) => ele.IsActive)));
        console.log(vehicleList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const StyledIconDelete = styled(IconDelete)`
    fill: ${({ theme }) => theme.color.secondary.cherryBombRed[500].value};
    cursor: pointer;
  `;

  const StyledIconEdit = styled(IconEdit)`
    fill: ${({ theme }) => theme.color.secondary.cookieMonsterBlue[500].value};
    margin-right: 7px;
    cursor: pointer;
  `;

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
  function editVehicle(vehicle) {
    history.push("/Add", { vehicle });
  }
  const columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ];
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];
  return (
    <div className="main-div">
      <div className="btnDiv">
        <Button
          icon={<IconAdd />}
          className="addBtn"
          text="Add"
          onClick={() => history.push("/Add")}
        />
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
                  <StyledIconEdit
                    onClick={() => {
                      editVehicle(item);
                    }}
                  />
                  <StyledIconDelete
                    onClick={(event) => {
                      removeVehicle(item.Id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
