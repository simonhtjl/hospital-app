import { Button, Card } from "react-bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../img/pretty-doctor.jpg";
import "./Css/Homepage.css";

export const Homepage = () => {
  return (
    <div>
      <Container className="index-container">
        <Row className="index-row">
          <Col className="index-col1">
            <div>
              <p className="index-text1">
                Serving Your Health Needs Is Our Priority.
              </p>
              <p className="index-text2">
                Good health is not something we can buy. Because, good health is
                one of life’s greatest blessings.
              </p>
            </div>
          </Col>
          <Col className="index-col2">
            <div>
              <img className="img" src={pic} alt="img" />
              <div className="index-wrap">
                <div className="index-identity">
                  <div>Dr. Fara</div>
                  <div>General Practitioners</div>
                </div>
                <div className="index-exp">
                  <span>10 Years</span>
                  <span>Experience</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="features">
        <Card className="feat-kartu" style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className="feat-title">Health Services For You</Card.Title>
            <Card.Text className="feat-text">
            This services serves to find out your health need by give us your
            symptoms, so we can analize it and give you the right treatment
            including receipt of medicine you need.
            </Card.Text>
            <Button variant="primary" href="/login" className="but1">Learn More</Button>
          </Card.Body>
        </Card>
        <Card className="feat-kartu" style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className="feat-title">Get Your Solutions</Card.Title>
            <Card.Text className="feat-text">
            Doctor will explain the disease, and get your treatment as soon
                as possible
            </Card.Text>
            <Button variant="primary" href="/login" className="but2">Learn More</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
