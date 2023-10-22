import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "../components/navbar";
import { Container, Row } from "react-bootstrap";
import Validate from "../components/authentication/validate";
import GetLocalStorage from "../components/authentication/localstorage";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  // Validate();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (
      !localStorage ||
      GetLocalStorage("moganoapp") === null ||
      GetLocalStorage("moganoapp") === undefined
    ) {
      navigate("/signin", { replace: true });
    } else {
      let data = GetLocalStorage("moganoapp");
      setUsername(data.username.toUpperCase());
      setEmail(data.email);
    }
  }, []);

  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Container className="mainContainer4">
        <Row className="namewrap">
          <h1>Welcome, {username != undefined ? username : <div></div>}</h1>
          <h3>Your email is: {email != undefined ? email : <div></div>}</h3>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
