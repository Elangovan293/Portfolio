import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import { personalInfo } from "../data/data";
import profileAvatar from "../assets/profile-avatar.png";

const NavigationBar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Keep track of theme shifts
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Add shadow styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link detection based on section position
      const sections = ["home", "about", "skills", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleNavLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        transition: "var(--transition-smooth)",
        padding: scrolled ? "0.6rem 0" : "1.2rem 0"
      }}
      variant={theme === "dark" ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavLinkClick("home"); }}
          className="d-flex align-items-center"
        >
          <img
            src={profileAvatar}
            alt="Profile Avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--accent-color)"
            }}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: "none" }} />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {["Home", "About", "Skills", "Experience", "Education", "Contact"].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <Nav.Link
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(sectionId);
                  }}
                  className={`nav-link-custom mx-2 px-1 ${
                    activeLink === sectionId ? "active" : ""
                  }`}
                >
                  {item}
                </Nav.Link>
              );
            })}
            
            {/* Theme Toggle Button */}
            <div className="ms-3 my-2 my-lg-0">
              <button 
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle dark/light theme"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
