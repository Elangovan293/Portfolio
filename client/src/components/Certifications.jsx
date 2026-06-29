import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaAward } from "react-icons/fa";
import { certifications } from "../data/data";

const Certifications = () => {
  return (
    <section 
      id="certifications" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-primary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">Certifications</h2>

        <div 
          className="d-flex flex-wrap justify-content-center gap-3 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-badge"
              style={{ fontSize: "1.1rem", padding: "0.8rem 1.6rem" }}
            >
              <FaAward className="cert-icon" size={18} />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
