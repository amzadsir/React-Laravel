import React, { Fragment } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import cons from "../../assets/images/cons.jpg";
import './OurCourses.css'; 

function CourseList() {
  return (
    <Fragment>
      <Container>
        <br /><br /><br />
        <h1 className=" servicetitle1 text-center">OUR COURSES</h1>
        <br /><br />
        <Row>
          {Array.from({ length: 8 }).map((_, index) => (
            <React.Fragment key={index}>
              <Col lg={3} md={6} sm={12} className="Col-Align">
                <img src={cons} className="Course-Image" alt="cons" />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Card.Title>
                  <strong>Web Development</strong>
                </Card.Title>
                <p className="Text-Top">
                  I build native and cross-platform mobile apps for your business.
                  <br />
                  <strong style={{ color: "#0073E6" }}><a href="#">Details</a></strong>
                </p>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default CourseList;
