import React, { useEffect, useState } from "react";
import './admin.css';
import { Link, useParams } from "react-router-dom";

export function Admin() {
    var { id } = useParams()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    useEffect(() => {
        fetch("http://localhost:7000/getone/"+id)
            .then(data => data.json())
            .then((res) => {
                setFname(res[0].first_name)
                setLname(res[0].last_name)
            })
    }, [])

    return (
        <>
            <div className="admin-bg-image">
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
                                            <Link class="nav-link active" aria-current="page" to='/Login'><button className="rounded bg-warning">LOG OUT</button></Link>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div class="card w-50">
                        <div className="">
                            <img src="https://images.unsplash.com/photo-1637250051543-9fca17abf411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="w-100" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 class="card-title text-center">Hello Admin, {fname} {lname}👋</h3>
                            <div className="d-flex justify-content-center">
                                <Link to='/view' className="btn btn-primary userButton">View User Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

