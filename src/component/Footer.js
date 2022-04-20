import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import faceicon from "../img/facebook.png";
import instaicon from "../img/instagram.png";
import twiticon from "../img/twitter.png";
import "./Css/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
      <Row>
          <Col className="col-4">
            <div>
              <p className="title-1"><strong>GLO DOC</strong></p>
              <p>
                This free App provides a solution to your health needs by
                offering you a one-stop access to complete information about
                various medical checkups. This App carries simple tips and
                advice to help you maintain a healthy lifestyle.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <p className="title-2"><strong>Services</strong></p>
              <p>Check Your Health</p>
              <p>Get Your Solutions</p>
            </div>
          </Col>
          <Col>
            <div>
              <p className="title-3"><strong>About Us</strong></p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </Col>
          <Col>
            <div>
              <p className="title-4"><strong>Social Media</strong></p>
              <Row>
                <Col>
                <p>
                  <img class="img-responsive" src={faceicon} alt="facebook" width="50" />
                </p>
                </Col>

                <Col>
                <p>
                  <img class="img-responsive" src={instaicon} alt="instagram" width="50"/>
                </p>
                </Col>

                <Col>
                <p>
                  <img class="img-responsive" src={twiticon} alt="twitter" width="50"/>
                </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <center><p>Copyright &copy; 2022 Kel.2</p></center>               
        </Row>  
      </Container>

    </div>
  );
}
