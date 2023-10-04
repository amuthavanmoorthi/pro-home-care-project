import axios, { Axios } from "axios";
import '../Register/register.css';
import React from "react";
import { Link } from "react-router-dom";

export function Register(){
    function handleRegister(event){
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

        var userDetail = {
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

        if(first_name ===''){
            alert("Enter your First Name")
        }
        else if (last_name === ''){
            alert("Enter your Last Name")
        }
        else if (email === ''){
            alert("Enter your email")
        }
        else if (phone_number === ''){
            alert("Enter your phone number")
        }
        else if (password === ''){
            alert("Enter your password")
        }
        else if (roll === 'SELECT THE ROLE'){
            alert("Enter your role")
        }
        else if (address === ''){
            alert("Enter your address")
        }
        else if (landmark === ''){
            alert("Enter your landmark")
        }
        else if (city === ''){
            alert("Enter you city")
        }
        else if (state === ''){
            alert("Enter your State")
        }
        else{ 
            axios.post("http://localhost:7000/Register", userDetail)
            .then((res)=>{
                if(res.data.status === "error"){
                    alert("Data's are not inserted")
                }
                else if(res.data.status === "success"){
                    alert("Registered successfully")
                    window.location.href='/Login'
                }
            })
        }
    }

    return(
        <>
        <div className="reg-bg">
        <div className="RegMainPage  h-100 d-flex justify-content-center align-items-center row">
        <div className=" regcard container d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className="text-center">WELCOME TO PRO HOME CLEAN</h1>
            <form onSubmit={handleRegister}>
                <input type="text" id="first_name" className="mb-2  rounded  w-100 p-1 border-0" placeholder="First Name" required></input>
                <input type="text" id="last_name" className="mb-2 rounded w-100 p-1 border-0" placeholder="Last name" required></input>
                <input type="text" id="email" className="mb-2 rounded w-100 p-1 border-0" placeholder="Email" required></input>
                <input type="tel" id="phone_number" className="mb-2 rounded w-100 p-1 border-0" placeholder="Phone" required></input>
                <input type="password" id="password" className="mb-2 rounded w-100 p-1 border-0" placeholder="Password" required></input>
                <select id="roll" className="mb-2  rounded  w-100 p-1 border-0">
                <option >SELECT THE ROLE</option>
                <option value="worker">WORKER</option>
                <option value="user">USER</option>
                <option value="admin">ADMIN</option>
                </select>
                <h4>ADDRESS</h4>
                <input type="text" id="address" className="mb-2 rounded w-100 p-1 border-0" placeholder="Address" required></input>
                <input type="text" id="landmark" className="mb-2 rounded w-100 p-1 border-0" placeholder="Landmark" required></input>
                <input type="text" id="city" className="mb-2 rounded w-100 p-1 border-0" placeholder="City" required></input>
                <input type="text" id="state" className="mb-2 rounded w-100 p-1 border-0" placeholder="State" required></input>
                <input type="submit" class="btn btn-success btn-block rounded w-100 p-1 border-0" value="REGISTER"></input>
                <p className="pt-4 text-center">Already have an account?<Link to="/Login">Login</Link></p>
            </form>
        </div>
    </div>
    </div>
        </>
    );
}