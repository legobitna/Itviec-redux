import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { authAction } from "../redux/actions/authAction";

const Login = () => {
  let error = useSelector((state) => state.auth.error);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let loading = useSelector((state) => state.auth.loading);
  let dispatch = useDispatch();
  let userAuth = useSelector((state) => state.auth.user);
  let history = useHistory();
  const login = (e) => {
    e.preventDefault();
    let user = { email: email, password: password };
    dispatch(authAction.login(user));

    if (userAuth) {
      history.push("/");
    }
  };
  return (
    <div>
      {" "}
      <div className="navigation">
        <Container>
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </Container>
      </div>
      {error ? <Alert variant="danger">{error}</Alert> : <></>}
      <Container className="middle">
        <Form className="white-container" onSubmit={(e) => login(e)}>
          <div className="login-title-box">
            <img src="https://itviec.com/favicon-96x96.png" width="40px" />
            <h1 className="login-title">Login</h1>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {loading ? (
            <div>loading...</div>
          ) : (
            <Button variant="danger" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default Login;
