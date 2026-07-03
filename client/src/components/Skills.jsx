import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { technicalSkills, coreSkills } from "../data/data";

// Helper to map string icon names from data.js to React components
const getIcon = (iconName) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent /> : <Icons.FaCode />;
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-primary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">My Skills</h2>

        {/* Technical Skills Sub-section */}
        <Row className="mb-5 align-items-center">
          <Col lg={12} className="mb-4">
            <h3 className="h4 mb-4 text-center text-lg-start" style={{ fontFamily: "var(--font-heading)" }}>
              Technical Expertise
            </h3>
          </Col>
          
          <Row className="g-4">
            {technicalSkills.map((skill, index) => (
              <Col md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="glass-card p-4">
                  <div className="skill-progress-container">
                    <div className="skill-progress-label">
                      <span className="d-flex align-items-center gap-2" style={{ fontWeight: "600" }}>
                        <span style={{ color: skill.color, fontSize: "1.2rem" }}>{getIcon(skill.icon)}</span>
                        {skill.name}
                      </span>
                      <span style={{ color: "var(--accent-color)" }}>{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        style={{
                          background: `linear-gradient(90deg, var(--accent-color), ${skill.color})`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Row>

        {/* Core Skills Sub-section */}
        <Row className="mt-5">
          <Col lg={12} className="mb-4">
            <h3 className="h4 mb-4 text-center text-lg-start" style={{ fontFamily: "var(--font-heading)" }}>
              Core Competencies
            </h3>
          </Col>
          
          <Row className="g-4 justify-content-center">
            {coreSkills.map((skill, index) => (
              <Col md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="glass-card core-skill-card">
                  <div className="core-skill-icon-wrapper">
                    {getIcon(skill.icon)}
                  </div>
                  <h4 className="h5 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {skill.name}
                  </h4>
                  <p className="small mb-0 justify-text" style={{ color: "var(--text-secondary)" }}>
                    {skill.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
