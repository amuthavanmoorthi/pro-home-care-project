import React from "react";
import { Link } from "react-router-dom";

export function Land() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ml-auto">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-3 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"  href="#">Pro Home Care</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Why Us</a>
              </li>
              <li class="nav-item">
                <Link  class="nav-link active text-primary text-decoration-underline" aria-current="page" to="/Login"><b>LOGIN</b></Link>
              </li>
              <li class="nav-item">
               <Link  class="nav-link active text-success text-decoration-underline" aria-current="page" to="/Register"><b>REGISTER</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Nav End  */}

      <div className="container-fluid ms-0 me-0 row py-3">
        <div className="col-lg-6 p-0 m-0 align-self-center">
          <div className="d-flex justify-content-center">
            <div className="">
              <h1><b className="text-dark">Connect With Experts</b></h1>
              <h1><b className="text-dark">To Make Life Easier</b></h1>
              <div className="d-flex justify-content-center">
                <p><b className="text-dark">Connect With Experts</b></p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
         
        <div className="col-lg-6 py-5">
          <div id="carouselExampleCaptions" class="carousel slide p-0 m-0">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1520229534044-62d7cd4e9b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Electronics</h5>
                  <p>The technology used to produce computers, radios, etc.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Home Cleaning</h5>
                  <p>To clean a house and its furniture.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1495627076173-9ae37faaee46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mechanic</h5>
                  <p>A person whose job is to repair and work with machines.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
