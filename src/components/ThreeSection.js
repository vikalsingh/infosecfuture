import {
  Image,
  Card,
  Container,
  Row,
  Col,
  Button,
  FormLabel,
} from "react-bootstrap";
import "./../index.css";
import { Images } from "../utils/Images";

const ThreeSection = () => {
  return (
    <div>
      <Container>
        <div className="pathText">
          <h1>Explore your path</h1>
          <h2>Find your path</h2>
        </div>

        <Row>
          <Col md={4} className="mainCardDiv">
            <Card className="pathCard">
              <Card.Img className="pathSectionImg" src={Images.firstImg} />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Empower Growth</Card.Title>
                <FormLabel className="cardLabel">Boost your team</FormLabel>
                <Card.Text className="cardText">
                  Discover top talent for your organization & accelerate your
                  business growth. find the perfect match for your job opening
                  with our AI driven candidate screening.
                </Card.Text>
                <Button className="cardBtn">For Employer</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mainCardDiv">
            <Card className="pathCard">
              <Card.Img className="pathSectionImg" src={Images.secondImg} />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">
                  Unlock Opportunities
                </Card.Title>
                <FormLabel className="cardLabel">Maximize earnings</FormLabel>
                <Card.Text className="cardText">
                  Take your recruitment career to new heights. Gain access to a
                  pool of verified job openings and multiply your earnings with
                  our attractive commission structure.
                </Card.Text>
                <Button className="cardBtn">For Recruiters</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mainCardDiv">
            <Card className="pathCard">
              <Card.Img className="pathSectionImg" src={Images.thiredImg} />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Your Dream Job</Card.Title>
                <FormLabel className="cardLabel">Within Reach</FormLabel>
                <Card.Text className="cardText">
                  Find your dream job with ease. Access validated job
                  opportunities and receive personalized job alerts that match
                  your skills and preferences.
                </Card.Text>
                <Button className="cardBtn">For Jobseeker</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThreeSection;
