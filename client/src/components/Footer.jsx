import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-4" 
      style={{ 
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="text-center">
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            style={{ width: "40px", height: "40px", fontSize: "1.1rem" }}
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link"
            style={{ width: "40px", height: "40px", fontSize: "1.1rem" }}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
        
        <p className="mb-0 small text-muted">
          &copy; {currentYear} {personalInfo.name}. All Rights Reserved. Built with React & Bootstrap.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
