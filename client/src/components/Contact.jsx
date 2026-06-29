import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "../data/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    show: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Run Bootstrap validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);
    setStatus({ show: false, success: false, message: "" });

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          show: true,
          success: true,
          message: data.message || "Your message was sent successfully!"
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setValidated(false);
      } else {
        setStatus({
          show: true,
          success: false,
          message: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        show: true,
        success: false,
        message: "Unable to connect to the mail server. Please check your network or try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5" 
      style={{ 
        backgroundColor: "var(--bg-secondary)",
        transition: "var(--transition-smooth)"
      }}
    >
      <Container className="py-5">
        <h2 className="section-title section-title-center">Get in Touch</h2>

        <Row className="g-5 mt-3 justify-content-between">
          {/* Contact Details Panel */}
          <Col lg={5} data-aos="fade-right" data-aos-duration="1000">
            <h3 className="h4 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Contact Information</h3>
            <p className="mb-5" style={{ color: "var(--text-secondary)" }}>
              If you have any questions or would like to discuss working together, feel free to contact me via email, phone, or LinkedIn!
            </p>

            <div className="d-flex flex-column gap-4">
              {/* Phone contact */}
              <div className="d-flex align-items-center gap-3">
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="social-icon-link flex-shrink-0"
                  aria-label="Call Elangovan"
                >
                  <FaPhoneAlt />
                </a>
                <div>
                  <h4 className="h6 mb-1 text-muted" style={{ fontSize: "0.85rem" }}>Call Me</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="fw-semibold" 
                    style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem" }}
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email contact */}
              <div className="d-flex align-items-center gap-3">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="social-icon-link flex-shrink-0"
                  aria-label="Email Elangovan"
                >
                  <FaEnvelope />
                </a>
                <div>
                  <h4 className="h6 mb-1 text-muted" style={{ fontSize: "0.85rem" }}>Email Me</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="fw-semibold" 
                    style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem" }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-5">
              <h3 className="h6 text-muted mb-3" style={{ textTransform: "uppercase", letterSpacing: "1.5px" }}>Connect Socially</h3>
              <div className="d-flex gap-3">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="Github Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          {/* Interactive Form Panel */}
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <div className="glass-card p-4 p-md-5">
              <h3 className="h4 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Send Message</h3>

              {status.show && (
                <Alert 
                  variant={status.success ? "success" : "danger"} 
                  className="mb-4"
                  style={{
                    backgroundColor: status.success ? "rgba(40, 167, 69, 0.1)" : "rgba(220, 53, 69, 0.1)",
                    color: status.success ? "#28a745" : "#dc3545",
                    border: `1px solid ${status.success ? "rgba(40, 167, 69, 0.2)" : "rgba(220, 53, 69, 0.2)"}`,
                    borderRadius: "8px"
                  }}
                >
                  {status.message}
                </Alert>
              )}

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="small text-muted">Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-control-custom"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="small text-muted">Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-control-custom"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="small text-muted">Your Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="form-control-custom"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please type a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  type="submit" 
                  className="btn-accent w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
