import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Implement your form submission logic here (e.g., API call)
  };

  return (
      <Container className="py-5"> {/* Added padding for better spacing */}
        <Row className="justify-content-md-center">
          <Col xs={12} >
            <h3>QUICK CONTACT</h3>
          </Col>
          <Col lg={6} md={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                    onChange={handleChange}
                    value={formData.message}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">Submit</Button>
            </Form>
          </Col>
          <Col lg={6} md={12}>
            <h3>Discuss Now</h3>
            <address>
              #79/6 Padma Residential Area, <br />
              3rd Floor Front Side, Rajshahi.<br />
              Email: Engr.Rabbil@yahoo.com<br />
              Phone: +8801701063280
            </address>
          </Col>
        </Row>
      </Container>
  );
}

export default ContactMe;
