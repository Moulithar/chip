import React from "react"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css"

const Countersec = ()=>
{
    return (
        <div className="countersec">
            <Container >
                <Row>
                    <h4>We design and develop web apps that delight your users and grow your business.</h4> 
                    <Button className="secbtn">CONTACT US</Button>
                </Row>
            </Container>
        </div>
    );
}

export default Countersec