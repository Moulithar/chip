import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css";

function Team(props) {
    return (
      <>
      
      <div className="team">
       
     
      <Container >
      <Row className="text-center teamhead">
        <h3>Our Team</h3>
      <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
        </Row>
        <Row>
          {
            props.dataItems.map((data) => {
              return (
                <Col lg={3} md={6} xs={12}>
                    <Card className="text-center " >
                    <img src={data.image} classname="teamimg"/>
                      <Card.Body>
                      <Card.Title className="cardtitle">{data.title}</Card.Title>
                      <div classname="">
                      <i className=" icon-team icon-fb"></i>
                      <i className="icon-team icon-twit"></i>
                      <i className="icon-team icon-ln"></i>
                      <i className="icon-team icon-git"></i>
                      </div>
                      <Card.Text>
                        {data.desc}
                      </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      </div>
  
      </>
    );
    
  }
  /*function Team(props) {
    return (
      <>
      <h1>Hello, {props.test}</h1>
      <p>{props.test2}</p>
      </>
    )
  }*/
  
  export default Team;
  