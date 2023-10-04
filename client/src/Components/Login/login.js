import axios from "axios";
import React from "react";
import '../Login/login.css';
import { Link } from "react-router-dom";

export function Login(){
    function handleLogin(){
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        var loginDetails = {
            username : username,
            password : password
        }

        if(username ===''){
            alert("Enter your username")
        }
        else if(password ===''){
            alert("Enter your password")
        }
        else{
            axios.post("http://localhost:7000/Login", loginDetails)
            .then((res)=>{
                if(res.data.status === "success"){
                    var roll = res.data.roll
                    var id = res.data.id
                    if(roll === "user"){
                        console.log("user")
                        window.location.href=`/userdashboard/${id}`
                        alert("hi user")
                    }
                    else if(roll === "worker"){
                        console.log("user")
                        window.location.href=`/workerdashboard/${id}`
                        alert("hi worker")
                    }
                    else if(roll === "admin"){
                        console.log("user")
                        window.location.href=`/admindashboard/${id}`
                        alert("hi admin")
                    }
                }
                else if(res.data.status === "invalid"){
                    alert("Your password is invalid!")
                }
                else if(res.data.status === "empty_set"){
                    alert("Your password or username not valid!")
                }
                else if(res.data.status === "error"){
                    alert("Contact admin!")
                }
            })
        }
    }
    return(
        <>
        <div className="login-bg">
            <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="border bg-warning-subtle">
            <h1 className="text-center text-dark">LOGIN</h1>
            <form onSubmit={handleLogin}>
                <input type="text" id="username" className="mb-2" placeholder="Enter Username" required></input>
                <input type="password" id="password" className="mb-2" placeholder="Enter Password" required></input>
                <input type="submit" class="btn btn-success btn-block" value="Login"></input>
                <p className="pt-4">Don't have an account?<Link to="/Register">Register</Link></p>
            </form>
        </div>
    </div>
    </div>
        </>
    );
}