import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import images2 from "./assets/styles/header-bg.svg";
import "./assets/styles/index.css";

 const Header = () =>
 {
    return(
    <>
       <div className="header">
        <img src={images2} alt="" className="img-fluid"/>
          <Container>
            <Row>
              <Col lg={5} className="headtext">
                <h3>Industry Leading Managed Services and Staffing 
                <span> Solutions</span>
                </h3>
                <p>Proven methods to capture business priorities
                 and goals as well as current pain points that enables measurable business outcomes.</p>
                 <Button className="headbtn">Learn More</Button>  
              </Col>
              <Col lg={7}>

              </Col>
            </Row>
            </Container>
      </div>
    </>
  );
 }
 export default Header