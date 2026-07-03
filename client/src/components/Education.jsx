import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { education } from "../data/data";

const Education = () => {
  return (
    <section 
      id="education" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-secondary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">Education</h2>

        <div className="timeline-vertical mt-5">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <div className="timeline-badge"></div>
              
              <div className="glass-card p-4">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="h5 mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                      {edu.degree}
                    </h3>
                    <h4 className="h6 mb-0 text-gradient" style={{ color: "var(--accent-color)", fontWeight: "600" }}>
                      {edu.institution}
                    </h4>
                  </div>
                  <span 
                    className="badge d-flex align-items-center gap-2 p-2 px-3"
                    style={{ 
                      backgroundColor: "var(--bg-tertiary)", 
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "20px"
                    }}
                  >
                    <FaCalendarAlt style={{ color: "var(--accent-color)" }} />
                    {edu.duration}
                  </span>
                </div>
                
                <p className="small mb-2 fw-semibold" style={{ color: "var(--text-primary)" }}>
                  Status: <span style={{ color: "var(--accent-color)" }}>{edu.status}</span>
                </p>
                
                <p className="mb-0 justify-text" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
