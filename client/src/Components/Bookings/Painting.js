import axios from "axios";
import React from "react";
import '../Bookings/painting.css';

export function Painting(){
    function handlePainting(event){
        event.preventDefault()
        var work_name = document.getElementById("work_name").value
        var date = document.getElementById("date").value
        var time = document.getElementById("time").value
        var phone = document.getElementById("phone").value
        var address = document.getElementById("address").value

        var userDetail = {
            work_name : work_name,
            date : date,
            time : time,
            phone : phone,
            address : address 
        }

        if (date === ''){
            alert("Enter your event date")
        }
        else if (time === ''){
            alert("Enter your event timing")
        }
        else if (phone === ''){
            alert("Enter your calling number")
        }
        else if (address === ''){
            alert("Enter your address")
        }
        else{ 
            axios.post("http://localhost:7000/Painting", userDetail)
            .then((res)=>{
                if(res.data.status === "error"){
                    alert("Data's are not inserted")
                }
                else if(res.data.status === "success"){
                    alert("Ordered successfully")
                }
            })
        }
    }

    return(
        <>
                <div>
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><b>Pro Home Care</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-light" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-light" href="/userdashboard/:id"><b>BACK</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>

        <div className="painting-bg">
        <div>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-12 pt-5  mt-5">

                <form onSubmit={handlePainting}>
                    <h1 className="text-center">BOOKING DETAILS</h1>
                        <label for="workName">Work Name</label>
                        <input type="text" class="form-control" id="work_name" placeholder="Enter Work Name"  value="PAINTING" readonly></input>
 
                        <label for="date">Date</label>
                        <input type="date" class="form-control" id="date" required></input>
        
                        <label for="time">Time</label>
                        <input type="time" class="form-control" id="time" required></input>

                        <label for="call">CALL</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Enter you phone number" required></input>

                        <label for="address">Address</label>
                        <input type="text" class="form-control pb-5" id="address" placeholder="Enter Address" required></input>
                        <div className="mt-5 text-center ">
                    <button type="submit" class="btn btn-success px-5 ">ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
        </>
    );
}