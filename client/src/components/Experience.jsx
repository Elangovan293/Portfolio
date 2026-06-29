import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { experience } from "../data/data";

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-secondary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">My Experience</h2>
        
        <div className="timeline-vertical mt-5">
          {experience.map((exp, index) => (
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
                    <h3 className="h4 mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                      {exp.role}
                    </h3>
                    <h4 className="h6 mb-0 text-gradient" style={{ color: "var(--accent-color)", fontWeight: "600" }}>
                      {exp.company}
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
                    {exp.duration}
                  </span>
                </div>
                
                <p className="mb-4 text-muted" style={{ color: "var(--text-secondary)" }}>
                  {exp.description}
                </p>
                
                <ul className="list-unstyled mb-0">
                  {exp.points.map((point, ptIndex) => (
                    <li 
                      key={ptIndex} 
                      className="d-flex align-items-start gap-3 mb-2"
                      style={{ color: "var(--text-secondary)" }}
                      data-aos="fade-up"
                      data-aos-delay={ptIndex * 150}
                    >
                      <FaCheckCircle 
                        className="mt-1 flex-shrink-0" 
                        style={{ color: "var(--accent-color)", fontSize: "0.95rem" }} 
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
