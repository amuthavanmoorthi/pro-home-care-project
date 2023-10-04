import axios from "axios";
import React from "react";
import '../Bookings/wedding.css';

export function Wedding(){

    function handleWedding(event){
        event.preventDefault()
        var workname = document.getElementById("workname").value
        var place = document.getElementById("place").value
        var count = document.getElementById("count").value
        var date = document.getElementById("date").value
        var time = document.getElementById("time").value
        var phone = document.getElementById("phone").value
        var address = document.getElementById("address").value

        var userDetail = {
            workname : workname,
            place : place,
            count : count,
            date : date,
            time : time,
            phone : phone,
            address : address 
        }

        if(place ===''){
            alert("Enter your weeding event place")
        }
        else if (count === ''){
            alert("Enter the people's count")
        }
        else if (date === ''){
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
            axios.post("http://localhost:7000/Wedding", userDetail)
            .then((res)=>{
                if(res.data.status === "error"){
                    alert(res)
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

        <div className="wedding-bg">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-12 pt-5 mt-5">

                <form onSubmit={handleWedding}>
                    <h1 className="text-center ">BOOKING DETAILS</h1>
                        <label for="workname">Work Name</label>
                        <input type="text" class="form-control" id="workname" placeholder="Enter Work Name"  value="WEDDING EVENT" readonly></input>
                         
                        <label for="place">PLACE</label>
                        <input type="text" class="form-control" id="place" required></input>
                        
                        <label for="count">How many people's will come?</label>
                        <input type="phone" class="form-control" id="count" required></input>

                        <label for="date">Date</label>
                        <input type="date" class="form-control" id="date" required></input>
        
                        <label for="time">Time</label>
                        <input type="time" class="form-control" id="time" required></input>

                        <label for="call">CALL</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Enter you phone number" required></input>

                        <label for="address">Address</label>
                        <input type="text" class="form-control pb-5" id="address" placeholder="Enter your Address" required></input>
                        <div className="mt-5 text-center ">
                    <button type="submit" class="btn btn-success px-5 ">ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
        </>
    );
}