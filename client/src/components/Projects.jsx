import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, personalInfo } from "../data/data";

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-primary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">My Projects</h2>
        
        {/* TODO: Replace with real project repos/demo links */}
        <Row className="g-4 mt-2">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id} data-aos="zoom-in" data-aos-delay={project.id * 100}>
              <div className="glass-card h-100 p-4 d-flex flex-direction-column justify-content-between" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      className="badge px-3 py-2"
                      style={{ 
                        backgroundColor: "rgba(var(--accent-rgb), 0.1)", 
                        color: "var(--accent-color)",
                        border: "1px solid rgba(var(--accent-rgb), 0.2)",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "600"
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="h5 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {project.title}
                  </h3>
                  
                  <p className="small mb-4 justify-text" style={{ color: "var(--text-secondary)", flexGrow: 1 }}>
                    {project.description}
                  </p>
                </div>
                
                <div>
                  {/* Tech stack tag row */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="badge px-2 py-1"
                        style={{ 
                          backgroundColor: "var(--bg-tertiary)", 
                          color: "var(--text-secondary)",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          border: "1px solid var(--border-color)"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-outline-accent btn-sm d-inline-flex align-items-center justify-content-center gap-2"
                    style={{ padding: "0.4rem 1.2rem", width: "fit-content" }}
                  >
                    Demo Link <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* View More on GitHub Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-accent px-4 py-3 d-inline-flex align-items-center gap-2"
          >
            <FaGithub size={20} /> View More on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
