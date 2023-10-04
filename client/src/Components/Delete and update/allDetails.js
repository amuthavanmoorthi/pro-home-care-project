import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Getfromnode(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:7000/getAll")
        .then(res=>res.json())
        .then(details => setData(details))
    },[])
    
    function handledelete(id){
        alert(id)
        var deletedata = {
            id : id
        }
        alert(deletedata.id)
        axios.post('http://localhost:7000/delete',deletedata)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data is not deleted")
            }
            else if(res.data.status==="success"){
                alert("datas are deleted successfully")
            }
        })
    }

    return(
        <>
        <div>
        <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">PRO HOME CLEAN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link" href="#">Link</a> */}
                </li>
                <li class="nav-item dropdown">
                    {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</a> */}
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
                </li>
            </ul>
            <form class="d-flex" role="search">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
<button class="btn btn-outline-success" type="submit">Search</button> */}
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><button className="rounded bg-warning">DOWNLOAD</button></a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/Login'><button className="rounded bg-warning">LOG OUT</button></Link>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</nav>
</div>
        </div>

        <table className="table-responsive table table-success table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                    <th>Roll</th>
                    <th>Address</th>
                    <th>LandMark</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((value, index)=>(
                    
                    <>
                    <tr>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                        <td>{value.phone_number}</td>
                        <td>{value.password}</td>
                        <td>{value.roll}</td>
                        <td>{value.address}</td>
                        <td>{value.landmark}</td>
                        <td>{value.city}</td>
                        <td>{value.state}</td>
                        <td>
                            <Link to={`/update/${value.id}`} className="btn btn-success">update</Link>

                        <button className="btn btn-danger" onClick={()=>{handledelete(value.id)}}>Delete</button>
                        </td>
                    </tr>
                    </>
                ))
            } 
            </tbody>
        </table>
        </>
    );
        }