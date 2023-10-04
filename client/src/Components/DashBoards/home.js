import React from "react";
import '../DashBoards/user.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
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
                  <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#works"><b>Works</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#employee"><b>Book</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#contact"><b>Contact Us</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="/Login"><b>Log out</b></a>
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
            <div class="col-lg-6 mb-5 pt-5 homeContent text-center">
              <h1 class="homsec mb-5" >
                WELCOME TO <span className="text-primary"> PRO HOME CARE </span>
              </h1>
              <h5 class="mt-3">
              Pro Cleaning delivers a full range of scheduled cleaning services to commercial establishments and residences. 
              </h5>
            </div>
            <div class="col-lg-6 mt-5 homec" >
              <img src="https://www.iisc.org/filesimages/cleaning.jpg" class="img-fluid homsec1" alt="React Image" />
            </div>
          </div>
        </div>
      </section>

      {/* work */}

      <section id="works">
        <div class="container min-vw-100">
          <div class="text-center mb-5">
            <h1 class="mb-5 text-dark"><b>TYPES OF WORKS</b></h1>
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
            <h1 class="text-center empy"><b>AVAILABLE WORKS</b></h1>
          </div>
          <div class="row">
            <div class="col-lg-4 mt-5 d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://hips.hearstapps.com/womansday/assets/16/13/1459452050-gettyimages-122619539.jpg" class="clrimg" />
                <Card.Body>
                  <Card.Title>HOME CLEANING</Card.Title>
                  <Card.Text>
                   <li>Clean the whole house, not one room at time. </li>
                   <li>Dust and vacuum.</li>
                   <li>Gather all your cleaning tools in a caddy.</li>
                   <li>Wipe mirrors and glass.</li>
                   <li>Disinfect countertops and surface areas. </li>
                   <li>Focus on tubs, sinks and toilets.</li>
                  </Card.Text>
                  <Link to="/HomeClean"> <Button variant="primary">BOOK NOW</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-4 mt-5 d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-interior-paint.jpeg.jpg" class="clrimg" />
                <Card.Body>
                  <Card.Title>PAINTING</Card.Title>
                  <Card.Text>
                    <li>Proper Ventilation and Drying Time</li>
                    <li>Color Selection based on yours</li>
                    <li>We will help you to choose the right brand</li>
                    <li>Application Techniques</li>
                    <li>Surface Preparation</li>
                    <li>Primer Application</li>
                  </Card.Text>
                  <Link to="/Paiting"> <Button variant="primary">BOOK NOW</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-4 mt-5 d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="clrimg" />
                <Card.Body>
                  <Card.Title>WEEDING EVENT</Card.Title>
                  <Card.Text>
                    <li>Creativity and Design</li>
                    <li>Attention to Detail</li>
                    <li>Client Communication and Relationship Building</li>
                    <li>Logistics and Time Management</li>
                    <li>Vendor Coordination</li>
                    <li>Problem Solving and Adaptability</li>
                  </Card.Text>
                  <Link to="/Wedding"> <Button variant="primary">BOOK NOW</Button></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
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
    </>

  );
}