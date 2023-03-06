import axios from 'axios';
import {useState} from 'react';
import './CreateVehicle.css';
import {useNavigate} from "react-router-dom";

function CreateVehicle(props){
    const [vin,setVin] = useState('')
    const [make,setMake] = useState('')
    const [model,setModel] = useState('')
    const [year,setYear] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate();
    return(
        <div className="form-container">
            <form>
  <div class="row">
    <div class="form-group col">
      <label for="inputEmail4">VIN</label>
      <input type="text" class="form-control" id="input1" placeholder="VIN" onChange={(e)=>setVin(e.target.value)}/>
    </div>
    <div class="form-group col">
      <label for="inputPassword4">Make</label>
      <input type="text" class="form-control" id="input2" placeholder="Make" onChange={(e)=>setMake(e.target.value)}/>
    </div>
  </div>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="input3">Model</label>
      <input type="text" class="form-control" id="input3" placeholder="Model" onChange={(e)=>setModel(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Year</label>
      <input type="text" class="form-control" id="input4" placeholder="Year" onChange={(e)=>setYear(e.target.value)}/>
    </div>
  </div>
  <div class="form-group">
    <label for="input5">Description</label>
    <textarea class="form-control" id="input5" rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
  </div>
  </form>
  <button class="btn btn-primary" style={{marginTop:'10px'}}
  onClick={()=>{
    axios.post('https://localhost:7288/vehicle',{
        VIN:vin,
        Make:make,
        Model:model,
        Year:year,
        Description:description,
        IsActive:true
    }).then((response)=>{
        console.log(response);
        navigate('/');
    }).catch((err)=>console.log(err));
  }}>ADD</button>
        </div>
    );
}
export default CreateVehicle;