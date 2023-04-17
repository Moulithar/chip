import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css";

// const welcomeOptions = [
//   {
//     title: "Cloud Solution",
//     desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna."
//   },
//   {
//     title: "Netwrok Services",
//     desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna."  
//   },
//   {
//     title: "Disaster Recovery",
//     desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna."  
//   },
//   {
//     title: "Webcast Services",
//     desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.asdfasdf"  
//   },
// ]

function Welcome(props) {
  return (
    <>
    <div className="welcome">
    <Container>
      <Row>
     
        {
          props.dataItems.map((data) => {
            return (
              <Col lg={3} md={6} xs={12}>
                  <Card className="text-center" >
                  {/* <img src={data.image} alt="" /> */}
                    <Button className="thirdbutton d-flex align-items-center justify-content-center">
                    {/* <i className="icon icon-test"></i> */}
                    {data.icon}
                    </Button>
                    <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      {data.desc}
                    </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            )
          })
        }
    {/* <Col lg={3}>
    <Card className="text-center">
    <Button className="thirdbutton"></Button>     
    <Card.Body>
      <Card.Title>{props.secondtitle}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col lg={3}>
        <Card className="text-center">
        <Button className="thirdbutton"></Button>
          <Card.Body>
          <Card.Title>{props.thirdtitle}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          </Card.Body>
        </Card>
    </Col>
    <Col lg={3}>
        <Card className="text-center">
        <Button className="thirdbutton"></Button>
          <Card.Body>
          <Card.Title>{props.fourthtitle}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          </Card.Body>
        </Card>
    </Col> */}
    
      </Row>
    </Container>
    </div>

    </>
  );
  
}
/*function Welcome(props) {
  return (
    <>
    <h1>Hello, {props.test}</h1>
    <p>{props.test2}</p>
    </>
  )
}*/

export default Welcome;
