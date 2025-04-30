import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-container">
        <div className="logo">
          <h1>Yog & Ayurveda</h1>
        </div>

        <div className="about-me">
          <h5>About Us</h5>
          <p>
          Embrace a holistic lifestyle with our guidance in yoga, meditation, and Ayurveda, rooted in the wisdom of ancient Rishi traditions. Our mission is to nurture your physical, mental, and spiritual growth, empowering you to unlock life's true purpose.
          </p>

          <div className="icons">
            <ul>
              <li className="list-group">
                <a href="https://www.facebook.com/share/1AH7TW9sEN/?mibextid=wwXIfr">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.instagram.com/yogacharya_ravinder?igsh=MXd6YmE1MHB6emZycQ%3D%3D&utm_source=qr">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="https://youtube.com/@yogacharyaravinderofficial?si=3x_BtW45hSQYkXCT">
                  <FaYoutube />
                </a>
              </li>
              <li className="list-group">
                <a href="https://x.com/Kachoria09">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <ul>
            <h5>Links</h5>
            <li className="list-group">
              {/* Use ScrollLink to scroll to a specific section */}
              <ScrollLink
                className="footer-link"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li className="list-group">
              <ScrollLink
                className="footer-link"
                to="aboutme-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li className="list-group">
              <ScrollLink
                className="footer-link"
                to="demo-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Demo
              </ScrollLink>
            </li>
            <li className="list-group">
              <ScrollLink
                className="footer-link"
                to="services-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </ScrollLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <div className="copyright p-3">© 2025 Copyright Reserved</div>
    </footer>
  );
}

export default Footer;
