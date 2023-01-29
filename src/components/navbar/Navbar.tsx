import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import React from "react";

const Navbar = () => {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Exam Answers</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
