import React from "react";
import {Link, Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
  return <div>
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div>
        <Link to={"/random"}>Random</Link>
      </div>
    </nav>
    <Outlet/>
    <ToastContainer />
  </div>
}

export default Navigation;