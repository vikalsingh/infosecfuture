import { Image, Button, Container, Row, Col } from "react-bootstrap";
import { Images } from "../utils/Images";
import "./../index.css";

const AboveFooter = () => {
  return (
    <Container className="abovefooterMain">
      <Row className="rowAboveFooter">
        <Col sm={6} md={6}>
          <p className="fooText text-sm">
            Lorem ipsum dolor sit amet consectetur. Porttitor pharetra at
            pharetra id i
          </p>
        </Col>
        <Col sm={6} md={6}>
          <Button className="getinTouch" type="submit">
            Get In Touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboveFooter;
