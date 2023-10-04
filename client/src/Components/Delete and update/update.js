import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Update() {
    var {id} = useParams()
    const [first_name,setfirst_name] = useState('')
    const [last_name,setlast_name] = useState('')
    const [email,setemail] = useState('')
    const [phone_number,setphone_number] = useState('')
    const [password,setpassword] = useState('')
    const [role,setrole] = useState('')
    const [address,setaddress] = useState('')
    const [landmark,setlandmark] = useState('')
    const [city,setcity] = useState('')
    const [state,setstate] = useState('')

    useEffect(()=>{
        fetch('http://localhost:7000/getone/'+id)
        .then(data => data.json())
        .then((res)=>{
            setfirst_name(res[0].first_name)
            setlast_name(res[0].last_name)
            setemail(res[0].email)
            setphone_number(res[0].phone_number)
            setpassword(res[0].password)
            setrole(res[0].role)
            setaddress(res[0].address)
            setlandmark(res[0].landmark)
            setcity(res[0].city)
            setstate(res[0].state)
        })
    }, [])

        function handleupdate(event){
            event.preventDefault()
            var first_name = document.getElementById("first_name").value
            var last_name = document.getElementById("last_name").value
            var email = document.getElementById("email").value
            var phone_number = document.getElementById("phone_number").value
            var password = document.getElementById("password").value
            var roll = document.getElementById("roll").value
            var address = document.getElementById("address").value
            var landmark = document.getElementById("landmark").value
            var city = document.getElementById("city").value
            var state = document.getElementById("state").value
    
            var updatedetails = {
                first_name : first_name,
                last_name : last_name,
                email : email ,
                phone_number : phone_number ,
                password : password ,
                roll : roll,
                address : address ,
                landmark : landmark ,
                city : city ,
                state : state
            }

            if(email === ''){
                alert("Enter the mail")
            }
            else{
                axios.put('http://localhost:3020/update/'+id, updatedetails)
                .then((res)=>{
                    if(res.data.status === "error"){
                        alert("Data is not updated")
                    }
                    else if(res.data.status === "success"){
                        alert("Data updated!")
                    }
                })
            }
    }

    return (<>
    <nav></nav>
        <div className="RegMainPage h-100 d-flex justify-content-center align-items-center row">
            <div className=" regcard container d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className="text-center">ALTERING USER DETAILS</h1>
                <form onSubmit={handleupdate}>

                    <input type="text" id="first_name" value={first_name} onChange={(updatedata)=>{setfirst_name(updatedata.target.value)}} className="mb-2 rounded  w-100 p-1 border-0" placeholder="First Name" required></input>

                    <input type="text" id="last_name" value={last_name} onChange={(updatedata)=>{setlast_name(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Last name" required></input>

                    <input type="text" id="email" value={email} onChange={(updatedata)=>{setemail(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Email" required></input>

                    <input type="tel" id="phone_number" value={phone_number} onChange={(updatedata)=>{setphone_number(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Phone" required></input>

                    <input type="password" id="password" value={password} onChange={(updatedata)=>{setpassword(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Password" required></input>

                    <select id="roll" value={role} onChange={(updatedata)=>{setrole(updatedata.target.value)}} className="mb-2  rounded  w-100 p-1 border-0">
                        <option >SELECT THE ROLE</option>
                        <option value="worker">WORKER</option>
                        <option value="user">USER</option>
                        <option value="admin">ADMIN</option>
                    </select>

                    <h4>ADDRESS</h4>

                    <input type="text" id="address" value={address} onChange={(updatedata)=>{setaddress(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Address" required></input>

                    <input type="text" id="landmark" value={landmark} onChange={(updatedata)=>{setlandmark(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Landmark" required></input>

                    <input type="text" id="city" value={city} onChange={(updatedata)=>{setcity(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="City" required></input>

                    <input type="text" id="state" value={state} onChange={(updatedata)=>{setstate (updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="State" required></input>
                    <input type="submit" class="btn btn-success btn-block rounded w-100 p-1 border-0" value="UPDATE"></input>
                </form>
            </div>
        </div>
    </>);
}