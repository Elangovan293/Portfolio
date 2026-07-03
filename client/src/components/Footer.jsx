import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer 
      className="py-5" 
      style={{ 
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        transition: "var(--transition-smooth)",
        color: "var(--text-primary)"
      }}
    >
      <Container>
        <Row className="g-4 justify-content-between">
          {/* Column 1: Brand & Tagline */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h4 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {personalInfo.name}
            </h4>
            <p className="text-muted-custom mb-3" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {personalInfo.title}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                style={{ width: "38px", height: "38px", fontSize: "1rem" }}
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                style={{ width: "38px", height: "38px", fontSize: "1rem" }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://wa.me/916383665252" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                style={{ width: "38px", height: "38px", fontSize: "1rem" }}
                aria-label="WhatsApp Chat"
              >
                <FaWhatsapp />
              </a>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="fw-semibold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start gap-y-2 mb-0 mx-auto mx-md-0" style={{ maxWidth: "280px", paddingLeft: 0 }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="footer-link"
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "color 0.2s ease-in-out"
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Contact Info */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="fw-semibold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}>
              Contact Information
            </h5>
            <div className="d-flex flex-column gap-2 align-items-center align-items-md-start" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              <div className="d-flex align-items-center gap-2">
                <FaPhoneAlt style={{ color: "var(--accent-color)" }} />
                <a 
                  href="https://wa.me/916383665252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link" 
                  style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  +91 {personalInfo.phone}
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: "var(--accent-color)" }} />
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="footer-link" 
                  style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: "rgba(0, 0, 0, 0.08)" }} />

        {/* Copyright notice at bottom */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 small text-muted" style={{ color: "var(--text-secondary)", opacity: 0.8 }}>
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
