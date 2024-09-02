import React from 'react'
import "./Navbar.css"
import img1 from "./img/logo.png"
export default function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={img1} alt="" /></a>
    
    <div className="collapse navbar-collapse d-flex justify-content-evenly d-none d-lg-block" id="navbarSupportedContent">
      <center>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  " >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      </center>
      
    </div>
    <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-info" type="submit">Search</button>&nbsp;
        <button className="btn btn-outline-warning" type="submit">Cart</button>

      </form>
  </div>
</nav>
 
  )
}
