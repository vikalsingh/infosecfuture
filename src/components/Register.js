import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Header from "./Header";
import "./../index.css";
import { useState } from "react";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col sm={8}>
            <h1>Register today.</h1>
            <Row>
              <Col sm={6}>
                <Form.Group className="inputWrap" controlId="name">
                  <Form.Label className="inputLabel">Full Name</Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group className="inputWrap" controlId="password">
                  <Form.Label className="inputLabel">Password</Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="inputWrap" controlId="email">
                  <Form.Label className="inputLabel">Email</Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group className="inputWrap" controlId="confirmpassword">
                  <Form.Label className="inputLabel">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <label className="regiserText">Register as:</label>
              <form className="radio-container">
                <input type="radio" value="Jobseeker" />
                <label className="radioLabel">Jobseeker</label>

                <input type="radio" value="Recruiter" />
                <label className="radioLabel">Recruiter</label>

                <input type="radio" value="Employer" />
                <label className="radioLabel">Employer</label>
              </form>
            </Row>
            <Row className="btnClass">
              <Col sm={2}>
                <Button className="registerBtn">Register</Button>
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="registerCol">

          <h1 className="alreadyReg">Already registered ?</h1>
          <h1 className="alreadyReg">Log in to your Account</h1>
            <Row>
              <Col>
              <Form.Group className="inputWrap" controlId="email">
                  <Form.Label className="inputLabel">Email Address:</Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group className="inputWrap" controlId="password">
                  <Form.Label className="inputLabel">Password</Form.Label>
                  <Form.Control
                    className="inputBox"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="btnClass">
              <Col sm={2}>
                <Button className="loginBtn">Login</Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
