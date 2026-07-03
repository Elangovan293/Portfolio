import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/data";

const Certifications = () => {
  return (
    <section 
      id="certificates" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-primary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">Certificates</h2>

        <Row className="g-4 mt-4 justify-content-center">
          {certifications.map((cert, index) => (
            <Col 
              key={index} 
              xs={12} 
              md={6} 
              lg={5}
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-decoration-none d-block h-100"
              >
                <div 
                  className="glass-card p-4 h-100 d-flex align-items-center justify-content-between gap-3"
                  style={{
                    cursor: "pointer",
                    border: "1px solid var(--border-color)",
                    transition: "var(--transition-smooth)"
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(var(--accent-rgb), 0.1)",
                        color: "var(--accent-color)"
                      }}
                    >
                      <FaCertificate size={26} />
                    </div>
                    <div>
                      <h3 
                        className="h5 mb-0" 
                        style={{ 
                          color: "var(--text-primary)", 
                          fontFamily: "var(--font-heading)",
                          fontWeight: "600"
                        }}
                      >
                        {cert.title}
                      </h3>
                      <span 
                        className="small text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Google Drive Credential
                      </span>
                    </div>
                  </div>
                  
                  <div 
                    style={{ 
                      color: "var(--accent-color)", 
                      opacity: 0.8,
                      transition: "var(--transition-smooth)"
                    }}
                    className="cert-link-icon"
                  >
                    <FaExternalLinkAlt size={16} />
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
