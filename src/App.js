import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Company">
        <MDBBtn className="ms-3 mt-3">Company</MDBBtn>
      </Link>
      <Link to="/CompanyLogo">
        <MDBBtn className="ms-3 mt-3">Company Logo</MDBBtn>
      </Link>
      <Link to="/ProductImage">
        <MDBBtn className="ms-3 mt-3">Product Image</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
