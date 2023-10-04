import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Land } from "./Components/Landing Page/land";
import { Register } from "./Components/Register/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/login";
import { Admin } from "./Components/DashBoards/admin";
import { Worker } from "./Components/DashBoards/worker";
import { Getfromnode } from "./Components/Delete and update/allDetails";
import { Update } from "./Components/Delete and update/update";
import { Home } from "./Components/DashBoards/home";
import { Booking } from "./Components/Bookings/homeCleaning";
import { Painting } from "./Components/Bookings/Painting";
import { Wedding } from "./Components/Bookings/Wedding";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Land/>]}></Route>
        <Route path="/Register" element={[<Register/>]}></Route>
        <Route path="/Login" element={[<Login/>]}></Route>
        <Route path="/admindashboard/:id" element={[<Admin/>]}></Route>
        <Route path="/userdashboard/:id" element={[<Home/>]}></Route>
        <Route path="/workerdashboard/:id" element={[<Worker/>]}></Route>
        <Route path="/view" element={[<Getfromnode/>]}></Route>
        <Route path="/update/:id" element={[<Update/>]}></Route>
        <Route path="/Paiting" element={[<Painting/>]}></Route>
        <Route path="/HomeClean" element={[<Booking/>]}></Route>
        <Route path="/Wedding" element={[<Wedding/>]}></Route>
      </Routes> 
      </BrowserRouter>
    </> 
  );
}
export default App;
