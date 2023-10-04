import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

export function Worker(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:7000/getAllWorker")
        .then(res=>res.json())
        .then(details => setData(details))
    },[])

    const [painting, setPainting] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:7000/getAllPainting")
        .then(res=>res.json())
        .then(details => setPainting(details))
    },[])

    const [wedding, setWedding] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:7000/getAllWedding")
        .then(res=>res.json())
        .then(details => setWedding(details))
    },[])

    function handleAccept(home_cleaning_id){
        var deletedata = {
            home_cleaning_id : home_cleaning_id
        }
        console.log(deletedata.home_cleaning_id);
        axios.post('http://localhost:7000/homeCleaningDelete',deletedata)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("can't confirm the order")
            }
            else if(res.data.status==="success"){
                alert("order confirmed")
                window.location.reload()
            }
        })
    }

    function handlePaintAccept(painting_id){
      var deletedata = {
          painting_id : painting_id
      }
      console.log(deletedata.painting_id);
      axios.post('http://localhost:7000/PaintDelete',deletedata)
      .then((res)=>{
          if(res.data.status==="error"){
              alert("can't confirm the order")
          }
          else if(res.data.status==="success"){
              alert("order confirmed")
              window.location.reload()
          }
      })
  }

  function handleWeddingAccept(wedding_id){
    var deletedata = {
        wedding_id : wedding_id
    }
    console.log(deletedata.wedding_id);
    axios.post('http://localhost:7000/WeddingDelete',deletedata)
    .then((res)=>{
        if(res.data.status==="error"){
            alert("can't confirm the order")
        }
        else if(res.data.status==="success"){
            alert("order confirmed")
            window.location.reload()
        }
    })
}

    return(
        <>
        <div>
        <header>
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><b>Pro Home Care</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-light" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><b>HOME</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#works"><b>WORKS</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#employee"><b>ORDERS</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#contact"><b>CONTACT USE</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/Login"><b>LOG OUT</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* home */}
      <section id="home">
        <div class="container min-vw-100">
          <div class="row">
            <div class="col-lg-6 mt-5 homeContent text-center">
              <h1 class="homsec" >
                WELCOME <span><b>PARTNER</b></span>
              </h1>
              <h3 class="mt-3">
              The future depends on what you do today.
              </h3>
              <p class="">
               - Mahatma Gandhi
             </p>
            </div>
            <div class="col-lg-6 mt-5 homec" >
              <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" class="img-fluid homsec1" alt="React Image" />
            </div>
          </div>
        </div>
      </section>

      {/* work */}

      <section id="works">
        <div class="container min-vw-100">
          <div class="text-center mb-5">
            <h1 class="mb-5 text-dark">TYPES OF WORKS</h1>
          </div>
          <div class="row d-flex flex-row justify-content-center align-items-center mt-5" >
            <div class="col-lg-3 cato text-center rounded mx-2 shadow">
              <div class="mt-3">
                <img src="https://www.dailydump.org/cdn/shop/products/Big-Watering-Can-watering-garden.jpg?v=1631783618" class="img1" alt="React Image" />
                {/* <i class="fa-solid fa-house-lock" style="color: #62ead3;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Home & Garden</h6>
            </div>
            <div class="col-lg-3 cato text-center rounded mx-2 shadow">
              <div class="mt-3">
                <img src="https://img.staticmb.com/mbcontent/images/uploads/2023/2/tips-to-save-construction-cost.jpg" class="img-fluid" alt="React Image" />
                {/* <i class="fa-solid fa-building-circle-check" style="color: #94ffea;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Construction</h6>
            </div>
            <div class="col-lg-3 cato text-center rounded mx-2 shadow">
              <div class="mt-3">
                <img src="https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg" class="img-fluid" alt="React Image" />
                {/* <i class="fa-solid fa-house-medical-circle-check fa-beat-fade" style="color: #9efff4;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Personal care</h6>
            </div>
          </div>
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <div class="col-lg-3 cato text-center rounded mx-2 shadow">
              <div class="mt-3">
                <img src="https://eminencebyprakashtholia.com/wp-content/uploads/2020/09/wedding.png" class="img-fluid" alt="React Image" />
                {/* <i class="fa-solid fa-camera fa-spin fa-spin-reverse" style="color: #85ffeb;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Wedding & Events</h6>
            </div>
            <div class="col-lg-3 cato text-center rounded mx-2 shadow">
              <div class="mt-3">
                <img src="https://www.qualityze.com/wp-content/uploads/2020/12/Electronic-and-Appliances.png" class="img-fluid" alt="React Image" />
                {/* <i class="fa-solid fa-laptop-medical fa-beat-fade" style="color: #99eeff;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Electronics</h6>
            </div>
            <div class="col-lg-3 cato text-center rounded mx-2 shadow" >
              <div class="mt-3">
                <img src="https://www.priyalaxmipromotions.com/assets/images/otherservices.jpg" class="img" alt="React Image" />
                {/* <i class="fa-solid fa-handshake " style="color: #85fdff;"></i> */}
              </div>
              <h6 class="mt-2 fw-bold">Other Services</h6>
            </div>
          </div>
        </div>
      </section>

      <section id="employee">
        <div class="container min-vw-100">
          <div class="homec">
            <h1 class="text-center empy">AVAILABLE ORDERS</h1>
          </div>
          <div class="homec">
            <h1 class="text-center empy">HOME CLEANING</h1>
          </div>
          <table className="table-responsive table table-dark table-striped m-5">
            <thead>
                <tr>
                    <th>Work Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((value, index)=>(
                    
                    <>
                    <tr>
                        <td>{value.work_name}</td>
                        <td>{value.date}</td>
                        <td>{value.time}</td>
                        <td>{value.phone}</td>
                        <td>{value.address}</td>
                        <td>
                        <button className="btn btn-success" onClick={()=>{handleAccept(value.home_cleaning_id)}}>ACCEPT</button>
                        </td>
                    </tr>
                    </>
                ))
            } 
            </tbody>
        </table>

        <div class="homec">
            <h1 class="text-center empy">PAINTING</h1>
          </div>
          <table className="table-responsive table table-success table-striped m-5">
            <thead>
                <tr>
                    <th>Work Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                painting.map((value, index)=>(
                    
                    <>
                    <tr>
                        <td>{value.work_name}</td>
                        <td>{value.date}</td>
                        <td>{value.time}</td>
                        <td>{value.phone}</td>
                        <td>{value.address}</td>
                        <td>
                        <button className="btn btn-success" onClick={()=>{handlePaintAccept(value.id)}}>ACCEPT</button>
                        </td>
                    </tr>
                    </>
                ))
            } 
            </tbody>
        </table>

        <div class="homec">
            <h1 class="text-center empy">WEDDING</h1>
          </div>
          <table className="table-responsive table table-dark table-striped m-5">
            <thead>
                <tr>
                    <th>Work Name</th>
                    <th>Place</th>
                    <th>Count</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
            {
                wedding.map((value, index)=>( 
                    <>
                    <tr>
                        <td>{value.workname}</td>
                        <td>{value.place}</td>
                        <td>{value.count}</td>
                        <td>{value.date}</td>
                        <td>{value.time}</td>
                        <td>{value.phone}</td>
                        <td>{value.address}</td>
                        <td>
                        <button className="btn btn-success" onClick={()=>{handleWeddingAccept(value.id)}}>ACCEPT</button>
                        </td>
                    </tr>
                    </>
                ))
            } 
            </tbody>
        </table>

          </div>
      </section>

      {/* footer */}

      <footer id="contact">
        <div class="container min-vw-100">
          <div class="row m-2 ">
            <div class="col-lg-4 col-12 mt-5 ">
              <div class="img">
                <img src="https://static.vecteezy.com/system/resources/previews/001/984/801/non_2x/housekeeping-team-with-cleaning-equipment-free-vector.jpg" class="img-fluid" alt="" />
              </div>
              <div class="iconDiv mt-4">
                {/* <i class="fa-brands fa-google  bg-dark text-center p-3 me-2"style="border-radius:50%;"></i>
                        <i class="fa-brands fa-twitter  bg-dark text-center p-3 me-2"style="border-radius:50%;"></i>
                        <i class="fa-brands fa-instagram bg-dark text-center p-3 me-2"style="border-radius:50%;"></i>
                        <i class="fa-brands fa-linkedin bg-dark text-center p-3 me-2"style="border-radius:50%;"></i> */}
              </div>
              <p class="mt-2">37, Ayur Vigyan Nagar, New Delhi, India</p>
            </div>
            <div class="col-lg-4 col-12 mt-5">
              <h1>Contact Us</h1>
              <p><i class="fa-solid fa-envelope "></i> housecare@gmail.com</p>
              <p><i class="fa-solid fa-phone"></i> 9876543216</p>
              <p><i class="fa-solid fa-star-of-life"></i> Amudhavan</p>
            </div>
            <div class="col-lg-4 col-12 mt-5">
              <h1>Let us help you</h1>
              <p>100% purchase protection</p>
              <p>Your account</p>
              <p>Return center</p>
              <p>Help</p>
            </div>
          </div>
          <hr />
          <p class="text-center"><i class="fa-regular fa-copyright"></i> Amudhavan. Created with Bootstrap</p>

        </div>
      </footer>
        </div>
        </>
    );
}