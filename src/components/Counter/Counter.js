import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css"

const Counter = ()=>
{
    return (
        <div className="counter">
            <Container >            
                <Row>
                    <div className="d-flex justify-content-evenly">
                        <div className="flex-column countone">
                            <h1 >
                                96  
                            </h1>
                            <span>project<br /> complete</span>
                        </div>
                        <div className="flex-column">
                            <h1 >
                                190  
                            </h1>
                            <span>happy<br /> customer</span>
                            </div>
                        <div className="flex-column">
                            <h1 >
                                12  
                            </h1>
                            <span>experienced<br /> staff</span>
                            </div>
                        <div className="flex-column">
                            <h1 >
                                46 
                            </h1>
                            <span>ongoing<br /> project</span>
                        </div>
                    </div>
                </Row>           
            </Container>
        </div>
     
    );
}

export default Counter