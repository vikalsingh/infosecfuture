import Header from "./Header";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import "./../index.css";
import { Images } from "../utils/Images";
import ThreeSection from "./ThreeSection";
import Footer from "./Footer";
import AboveFooter from "./AboveFooter";
import BelowFooter from "./BelowFooter";
import AnotherSection from "./AnotherSection";

const LandingPage = () => {
  return (
    <div>
      <Header />

      <header className="header">
        <Image className="imageBg" src={Images.bgHeader} />
        <div className="hero-content">
          <Container>
            <Row>
              <Col xs={6}>
                <div className="discoverText">
                  <h1 className="heroTitle">DISCOVER TOP TALENT</h1>
                  <h2 className="heroTitleAi">AI Powered Talent Solution</h2>
                  <p className="heroP">
                    Unlock top-tier candidates matched to you specific needs
                    effortlessly with our AI driven platform. Streamlined
                    hiring, expectational result.
                  </p>
                  <Button id="heroBtn" type="submit">
                    Hire with AI Precision
                  </Button>
                </div>
              </Col>
              <Col xs={6} className="d-none d-md-block">
                <Image className="heroImg" src={Images.heroImg} />
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <ThreeSection />
      <AnotherSection />

      <div className="aboveFooterDiv">
        <AboveFooter />
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
      <div className="aboveFooterDiv">
        <BelowFooter />
      </div>
    </div>
  );
};

export default LandingPage;
