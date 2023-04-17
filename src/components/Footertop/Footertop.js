import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css";

const Footertop = ()=>{
    return(
        <div className="footertop">
            <Container>
                <Row>
                    <Col lg={5} >
                        <h5>turing</h5>
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis 
                            consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi 
                            ultricies laoreet ullamcorper phasellus semper</p>
                    </Col>
                    <Col lg={2}>
                        <h5>helpful links</h5>
                        <ul className="support">
                            <li>about us</li>
                            <li>feauture</li>
                            <li>FAQ's</li>
                            <li>blog</li>
                        </ul>
                    </Col>
                    <Col lg={2} className="support">
                        <h5>support</h5>
                        <ul>
                            <li>privacy policy</li>
                            <li>support centre</li>
                            <li>terms of use</li>
                            <li>contact</li>
                        </ul>
                    </Col>
                    <Col lg={3} >
                        <h5>contact us</h5>
                        <p className="contact">
                         455 West Orchard Street
                         Kings Mountain, NC 28086</p>
                         Phone: (272) 211-7370
                        <p>E-Mail:support@yourbrand.com</p>               
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footertop