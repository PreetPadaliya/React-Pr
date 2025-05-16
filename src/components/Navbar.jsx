import React from 'react';
import Button from './Button';

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ok">
    <a className="navbar-brand" href="#"><b>ADMINO</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>  
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
  <Button title="Login" />
  <Button title="Signup" />
</div>
</div>
</nav>
</div>
    );
}
export default Navbar;