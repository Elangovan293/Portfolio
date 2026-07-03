import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profileAvatar from "../assets/profile-avatar.png";

const NAV_ITEMS = ["Home", "About", "Skills", "Experience", "Education", "Certificates", "Contact"];

// ─── Inline style objects (guaranteed to override any Bootstrap/CSS class) ────

const drawerStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "280px",
  height: "100vh",
  backgroundColor: "#ffffff",   // solid white — no alpha, no blur
  background: "#ffffff",
  zIndex: 9999,                  // above everything
  boxShadow: "-6px 0 32px rgba(15, 23, 42, 0.20)",
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  overflowY: "auto",
  backdropFilter: "none",
  WebkitBackdropFilter: "none",
  filter: "none",
  opacity: 1,
  transform: "translateX(0)",
};

const drawerHiddenStyle = {
  ...drawerStyle,
  transform: "translateX(100%)",
  boxShadow: "none",
  pointerEvents: "none",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.55)",  // dark overlay — no blur
  zIndex: 9998,
  cursor: "pointer",
};

const closeBtnStyle = {
  background: "transparent",
  border: "none",
  fontSize: "1.6rem",
  fontWeight: 300,
  color: "#1a1a1a",
  cursor: "pointer",
  padding: "0.2rem",
  lineHeight: 1,
  marginLeft: "auto",
  display: "block",
  transition: "color 0.2s",
};

const drawerNavLinkBase = {
  display: "block",
  width: "100%",
  padding: "0.85rem 0",
  borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  fontSize: "1.1rem",
  fontWeight: 500,
  fontFamily: "'Inter', sans-serif",
  color: "#4a5568",             // fully opaque — no transparency
  textDecoration: "none",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  textAlign: "left",
  cursor: "pointer",
  opacity: 1,
  filter: "none",
  transition: "color 0.2s",
};

const drawerNavLinkActive = {
  ...drawerNavLinkBase,
  color: "#0d9488",             // accent teal
};

// ─── Component ────────────────────────────────────────────────────────────────

const NavigationBar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Track scroll position for navbar shadow + active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "experience", "education", "certificates", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveLink(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    closeDrawer();
    // Wait for drawer close transition (250ms) then scroll smoothly
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── Top Navbar bar ── */}
      <Navbar
        expand="lg"
        fixed="top"
        style={{
          backgroundColor: scrolled ? "rgba(248, 250, 252, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(15, 23, 42, 0.08)" : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: scrolled ? "0.6rem 0" : "1.2rem 0",
          zIndex: 1010,
        }}
        variant="light"
      >
        <Container>
          {/* Brand / Logo */}
          <Navbar.Brand
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}
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
                border: "2px solid #0d9488",
              }}
            />
          </Navbar.Brand>

          {/* Desktop links (lg+) */}
          <Nav className="ms-auto align-items-center d-none d-lg-flex">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              return (
                <Nav.Link
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
                  className={`nav-link-custom mx-2 px-1 ${activeLink === id ? "active" : ""}`}
                >
                  {item}
                </Nav.Link>
              );
            })}
          </Nav>

          {/* Hamburger button — mobile only */}
          <button
            className="d-lg-none"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: "#1a1a1a", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#1a1a1a", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#1a1a1a", borderRadius: "2px" }} />
          </button>
        </Container>
      </Navbar>

      {/* ── Dark overlay (closes drawer on tap) ── */}
      {drawerOpen && (
        <div
          style={overlayStyle}
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* ── Custom mobile drawer (solid white, all inline styles) ── */}
      <div
        style={drawerOpen ? drawerStyle : drawerHiddenStyle}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close (✕) button */}
        <button
          onClick={closeDrawer}
          aria-label="Close menu"
          style={closeBtnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
        >
          ✕
        </button>

        {/* Nav links */}
        <nav style={{ marginTop: "1.5rem", width: "100%" }}>
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeLink === id;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(id)}
                style={isActive ? drawerNavLinkActive : drawerNavLinkBase}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#0d9488" : "#4a5568")}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
