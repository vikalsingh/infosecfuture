import { Image, Button, Container, Row, Col } from "react-bootstrap";
import { Images } from "../utils/Images";
import "./../index.css";

const BelowFooter = () => {
  return (
    <Container className="abovefooterMain">
      <Row className="rowAboveFooter">
        <Col sm={6} md={6}>
          <p className="fooText text-sm">© All Copyright received 2023</p>
        </Col>
        <Col sm={6} md={6}>
          <p className="termsText">Privacy | Term & Condition</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BelowFooter;
