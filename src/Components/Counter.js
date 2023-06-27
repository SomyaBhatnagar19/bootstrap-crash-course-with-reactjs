import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <p className="display-4">{counter}</p>
              <Button variant="primary" className="m-1" onClick={increment}>
                Increment
              </Button>
              <Button variant="warning" className="m-1" onClick={decrement}>
                Decrement
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
