import { Image, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Images } from "../utils/Images";
import "./../index.css";

const AnotherSection = () => {
  return (
    <Container
      className="background-image-container"
      style={{ backgroundImage: `url(${Images.discoverImg})`}}
    >
      <Row>
        <Col>
          <div className="text-overlay">
            <h2 className="textOverlay">Discover the Power of Precision Hiring - Connect with the Perfect Talent Faster and Smarter.</h2>
            <Button className="overlBtn">Start Hiring Better Today</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnotherSection;
