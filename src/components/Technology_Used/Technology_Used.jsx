import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './Technology_Used.css';

export default class Technology_Used extends Component {
  render() {
    const data = [
      { name: "Java", Language_Use: 90 },
      { name: "Kotlin", Language_Use: 70 },
      { name: "SQL", Language_Use: 85 },
      { name: "Jquery", Language_Use: 87 },
      { name: "React", Language_Use: 55 },
      { name: "PHP", Language_Use: 95 },
      { name: "Angular", Language_Use: 78 },
    ];

    return (
      <Fragment><br/><br/><br/><br/>
        <Container>
          <h1 className='text-center Component-Title'>Technology Used</h1>
          <br/><br/><br/>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <ResponsiveContainer width="100%" height={375}>
                <BarChart 
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Language_Use" fill="#4C9DED" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p className='paragraph'>
                To build native android apps I use Java as well as Kotlin mainly. React JS is used for cross-platform mobile application. I use MySQL database for relational database system. To build NoSQL application I use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.<br/><br/>

                I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter, and Laravel to build admin panel section.<br/><br/>

                Application security is a big deal for commercial applications. I always ensure the security portion of my application, moreover I build a security alert system to notify admin when his system is at risk.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
