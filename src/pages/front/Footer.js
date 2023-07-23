import React from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../variables/colors";
import footerBG from "../../assets/images/footer-bg.png";
import footerLOGO from "../../assets/logo/logo2.png";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div style={styles.container}>
      <img src={footerBG} style={styles.bg} />
      <div className="front-footer-section-container">
        <h4>About Us</h4>
        <p>
          We are a health and fitness company dedicated to helping individuals
          achieve their weight loss goals through our innovative app, Calwise.
          Our team of nutrition experts and fitness enthusiasts are passionate
          about providing the tools and resources you need to lead a healthy
          lifestyle.
        </p>
      </div>
      <div className="front-footer-section-container">
        <h4>Contact Us</h4>
        <p>
          Have questions or need support? Contact our friendly customer service
          team at{" "}
          <Link target="_blank" to={`mailto:healthwithcalwise@gmail.com`}>
            our e-mail
          </Link>{" "}
          or give use a <Link to={"tel:+2349038043846"}>call</Link>. We're here
          to assist you!
        </p>
      </div>
      <div className="front-footer-section-container">
        <h4>Terms and Privacy Policy</h4>
        <p>
          Read our Terms and Conditions and Privacy Policy to understand the
          agreement between you and Calwise regarding the use of our app and how
          we collect, use, and protect your personal information.
        </p>
      </div>
      <footer style={styles.footer}>
        <img src={footerLOGO} style={styles.logo} alt="" />
        <div style={styles.footerMiddle}>
          {Array(80)
            .fill(false)
            .map((_, index) => (
              <div key={index} style={styles.middleDiv} />
            ))}
        </div>
        <div style={styles.footerRight} />
        <div className="front-tandc-content">
          <p className="front-tandc-title">Terms and Privacy Policy</p>
          <p className="front-tandc-text">
            Stay up-to-date with the latest news, promotions, and special offers
            by subscribing to our newsletter. Click the button below to sign up.
          </p>
          <Link className="get-started-btn front-footer-btn" to="signup">
            Sign Up Today!
          </Link>
          <small className="front-copyright-text">
            Copyright © 2023 Calwise. All rights reserved.
          </small>
        </div>
        <div className="front-bottom-social-container">
          <FaFacebookSquare className="front-footer-icon" />
          <FaInstagramSquare className="front-footer-icon" />
          <FaTwitterSquare className="front-footer-icon" />
        </div>
      </footer>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: "auto",
    minHeight: "100vh",
    backgroundColor: colors.gray_light,
    position: "relative",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    gap: 64,
  },
  bg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    zIndex: 0,
  },
  footer: {
    display: "flex",
    position: "relative",
    marginTop: "auto",
    height: 220,
    width: "100%",
    zIndex: 1,
    justifyContent: "center",
  },
  logo: {
    height: 220,
  },
  footerRight: {
    flex: 1,
    height: 220,
    backgroundColor: "black",
  },
  footerMiddle: {
    width: 20,
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
  },
  middleDiv: {
    height: 1,
    width: "100%",
    backgroundImage: "radial-gradient(white 5%, blue 15%, #006A17 60%)",
  },
});

export default Footer;
