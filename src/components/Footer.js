import {
  Image,
  Stack,
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Images } from "../utils/Images";
import "./../index.css";

const Footer = () => {
  return (
    <Container className="footerMain">
      <Row>
        <Col sm={8}>
          <Row>
            <Col sm={3}>
              <div>
                <Image src={Images.footerLogo} />
              </div>
              <div className="socialDiv">
                <span className="followtext">Follow Us</span>
                <Stack direction="horizontal" gap={4} className="stackSocial">
                  <Image className="socialMediaImg" src={Images.twitterImg} />
                  <Image className="socialMediaImg" src={Images.linkedinImg} />
                  <Image className="socialMediaImg" src={Images.instagramImg} />
                  <Image className="socialMediaImg" src={Images.facebookImg} />
                </Stack>
              </div>
            </Col>
            <Col sm={3}>
              <div className="menuDiv">
                <h5 className="menuHeading">Company</h5>
                <ul>
                  <li className="menuLink">About us</li>
                  <li className="menuLink">Jobs</li>
                  <li className="menuLink">Careers</li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="menuDiv">
                <h5 className="menuHeading">Product</h5>
                <ul>
                  <li className="menuLink">Candidates</li>
                  <li className="menuLink">Employer</li>
                  <li className="menuLink">Recruiter</li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="menuDiv">
                <h5 className="menuHeading">More</h5>
                <ul>
                  <li className="menuLink">Account</li>
                  <li className="menuLink">User Guides</li>
                  <li className="menuLink">Webinars</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <div>
            <h1 className="newsletterText">Subscribe Our Newsletter</h1>
            <p className="newsletterPara">
              Be the first one to know about discounts, offers and events
              Unsubscribe whenever you like.
            </p>
          </div>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="subsBtn" variant="outline-secondary" id="button-addon2">
              Subscribe now
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
