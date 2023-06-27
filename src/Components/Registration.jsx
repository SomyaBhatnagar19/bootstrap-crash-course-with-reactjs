import React from "react";

import { Button, Container, Card, Col, Row, Form } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
            <Col xs={3}>
                <Card>
                    <Card.Header style={{backgroundColor: '#11223c'}}>
                       <h4 style={{color: "whitesmoke"}}>Register</h4> 
                    </Card.Header>
                    <Card.Body style={{backgroundColor: '#82a4db'}}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder='UserName'>
                               </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder='UserName'>
                               </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder='Email'>
                               </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Button type="Submit" style={{backgroundColor: "#11223c"}}>Register
                               </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};
export default Register;
