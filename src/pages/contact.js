import React from "react";
import "./contact.css";
import NavbarComponent from "../components/navbar";
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// import { Container } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

const contact = () => {
  return (
    <div className="main">
      <NavbarComponent></NavbarComponent>
      <Container className="mainContainer">
        <Row>
          <div className="Contact">
            <h1 className="abril_fatface">Contact Us</h1>
            <p>
              Our team is dedicated to crafting engaging website portfolios. We
              blend creativity with functionality to create stunning digital
              experiences . Contact us for further information.
            </p>
          </div>
        </Row>

        <Row>
          <div className="contacts">
            <div className="grid">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>58 Beach Rd, Gordons Bay Central, Cape Town, 7151</h3>
            </div>

            <div className="grid">
              <FontAwesomeIcon icon={faPhone} />
              <h3> 021 865 1283</h3>
            </div>

            <div className="grid">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3>Mogano@gmail.com</h3>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default contact;
