import React from "react";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import images1 from "./assets/styles/images1.jpg"
import "./assets/styles/index.css";

const Service = ()=>{
    return(

        <div className="service">
        <Container>
            <Row>
                <Col lg={6}>
                    <img src={images1} className="image" alt="" />
                </Col>
                <Col lg={6}>
                    <div className="serhead">
                    <h4>design & development</h4>
                    </div>
                    <p>
                    Phasellus vitae velit sit 
                    amet diam semper commodo quis quis libero. Morbi consequat arcu augue,
                    molestie faucibus metus ullamcorper vel.
                    </p>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3a">
                        Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                        <Button className="button3">Learn More</Button>  
                        </Col>
                      
                    </Row>

                </Col>
                
            </Row>
        </Container>
        </div>
    );

}
export default Service