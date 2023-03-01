import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [vehicleList,setVehicleList] = useState([]);
  useEffect(()=>{
    getFromApi()
  },[])
  const getFromApi = () => {
    axios.get('https://localhost:7288/vehicle').then((response)=>{
      setVehicleList(response.data.filter((ele)=>ele.IsActive));
      console.log(vehicleList);
    }).catch((error) => {
      console.log(error);
    });
  }
  function removeVehicle(id) {
    axios.delete('https://localhost:7288/vehicle/'+id).then((response)=>{
        console.log(response);
        getFromApi();
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img alt='Logo' src="https://www.cdkglobal.com/sites/cdk4/themes/custom/cdk/logo.svg" height={'30px'}/>
      </header>
      <div className='main-div'>
        <div className="btnDiv">
        <button class="btn btn-primary addBtn">Add</button>
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
  {vehicleList.length>0 && vehicleList?.map((item,ind)=><tr>
    <th scope="row">{ind+1}</th>
      <td>{item.VIN}</td>
      <td>{item.Year}</td>
      <td>{item.Make}</td>
      <td>{item.Model}</td>
      <td>{item.Description}</td>
      <td>
        <button disabled class="btn btn-primary">Edit</button>
        <button class="btn btn-danger" style={{marginLeft:'5px'}} onClick={(event)=>{
          removeVehicle(item.Id);
        }}> Remove</button>
      </td>
  </tr>)}
  </tbody>
</table>
      </div>
    </div>
  );
}
 
export default App;
