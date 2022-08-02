import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { Link } from 'react-router-dom'

function FashionScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div class="-df -pvs -phxs">
          
            
            <div class="ar _32-7 -hov-e-3 brand p-5"  style={{height: "220px"}}>
            <Link to="/brand" className="nam ">
              <div className="d-flex justify-content-center  p-5" >
              <button className="btn btn-dark " >Shop Now</button>
              </div>
              </Link>
              </div>
           
         
      </div>
    </div>
  );
}

export default FashionScreen;
