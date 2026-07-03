import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { personalInfo } from "../data/data";
import profileImg from "../assets/profile-avatar.png";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-secondary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Profile image with float/glow animation */}
          <Col lg={5} className="mb-5 mb-lg-0 text-center" data-aos="fade-right" data-aos-duration="1000">
            <div className="profile-img-container">
              <div className="profile-img-glow"></div>
              <img 
                src={profileImg} 
                alt={personalInfo.name} 
                className="profile-img" 
              />
            </div>
          </Col>

          {/* About text and Languages */}
          <Col lg={7} data-aos="fade-left" data-aos-duration="1000">
            <h2 className="section-title">About Me</h2>
            <p className="lead mb-4 justify-text" style={{ color: "var(--text-primary)", fontWeight: "500" }}>
              I am an {personalInfo.title} currently pursuing my academic milestones.
            </p>
            <p className="mb-4 justify-text" style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              {personalInfo.summary}
            </p>

            <div className="mt-5">
              <h3 className="h5 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Languages Spoken</h3>
              <div className="d-flex flex-wrap gap-2">
                {personalInfo.languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="cert-badge"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span className="cert-icon">•</span> {lang}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
