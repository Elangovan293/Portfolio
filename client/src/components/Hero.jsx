import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/data";

const roles = ["AI Full Stack Developer", "Python Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        
        if (currentText === fullText) {
          // Pause at the end of full word
          setTypingSpeed(1800); // Hold for 1.8 seconds
          setIsDeleting(true);
        } else {
          setTypingSpeed(80 + Math.random() * 50); // Speed range
        }
      } else {
        // Deleting letters
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150); // Brief pause before typing next
        } else {
          setTypingSpeed(40); // Deleting is faster
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative background gradients */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.12) 0%, transparent 70%)",
          filter: "blur(45px)",
          pointerEvents: "none"
        }}
      />

      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h5 
                className="mb-3 text-uppercase fw-semibold tracking-wider" 
                style={{ 
                  color: "var(--accent-color)",
                  letterSpacing: "3px",
                  fontSize: "1.1rem"
                }}
              >
                Welcome to my portfolio
              </h5>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 
                className="display-2 fw-extrabold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Hi, I'm <span style={{ color: "var(--accent-color)" }}>{personalInfo.name}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-4"
              style={{ minHeight: "60px" }}
            >
              <h2 className="h1 fw-bold text-secondary-color" style={{ color: "var(--text-secondary)" }}>
                I am a{" "}
                <span 
                  style={{ 
                    borderRight: "3px solid var(--accent-color)", 
                    paddingRight: "5px",
                    color: "var(--text-primary)",
                    textShadow: "0 0 10px var(--accent-glow)"
                  }}
                >
                  {currentText}
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="col-lg-8 ps-0 mx-auto mx-lg-0"
            >
              <p className="lead mb-5 text-muted-custom" style={{ color: "var(--text-secondary)" }}>
                {personalInfo.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-4"
            >
              <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="btn btn-accent px-5 py-3 fs-5"
              >
                Hire Me
              </a>
              
              {/* TODO: Verify resume.pdf is uploaded in /public/resume.pdf */}
              <a 
                href={personalInfo.resumeUrl} 
                download="Elangovan_K_Resume.pdf"
                className="btn btn-outline-accent px-5 py-3 fs-5"
              >
                Download Resume
              </a>

              {/* Social links row */}
              <div className="d-flex gap-3 mt-3 mt-sm-0">
                <motion.a 
                  whileHover={{ scale: 1.1, translateY: -3 }}
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, translateY: -3 }}
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
