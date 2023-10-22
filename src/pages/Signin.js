import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Signin.css";

import Nav from "react-bootstrap/Nav";
import {
  Container,
  NavDropdown,
  Navbar,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom"; // used to navigate to other pages programmically

import GetLocalStorage, {
  SetLocalStorage,
  DeleteLocalStorage,
} from "../components/authentication/localstorage";

const Signin = (props) => {
  const { register, handleSubmit } = useForm();

  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    SetLocalStorage("moganoapp", data);
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <Container>
        <h2 className="abril_fatface">Sign In</h2>
      </Container>
      <Container className="wrapper2">
        <Row className="wrapperRow">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <label>
                Username:
                <input
                  className="form-control"
                  defaultValue="mogano"
                  {...register("username")}
                  name="username"
                />
              </label>
            </Row>

            <Row>
              <label>
                Email:
                <input
                  className="form-control"
                  defaultValue="mogano@gmail.com"
                  {...register("email")}
                  name="email"
                />
              </label>
            </Row>

            <Row>
              <label>
                Password:
                <input
                  className="form-control"
                  defaultValue="password"
                  {...register("password")}
                  name="password"
                />
              </label>
            </Row>
            <label>
              <input className="btn-success btn" type="submit" name="signIn" />
            </label>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
