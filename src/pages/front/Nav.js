import "./styles/Nav.css";
import React from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../variables/colors";
import { Link } from "react-router-dom";

function Nav({ calwise, services, products, testimonials }) {
  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={styles.container}>
      <Link
        onClick={() => {
          scrollTo(calwise);
        }}
        className="nav-title"
        style={styles.title}
      >
        <h4>CALWISE</h4>
      </Link>
      <Link
        className="nav-link"
        onClick={() => {
          scrollTo(services);
        }}
      >
        SERVICES
      </Link>
      <Link
        className="nav-link"
        onClick={() => {
          scrollTo(products);
        }}
      >
        PRODUCTS
      </Link>
      <Link
        className="nav-link"
        onClick={() => {
          scrollTo(testimonials);
        }}
      >
        TESTIMONIALS
      </Link>
      <Link className="nav-btn" to="login">
        LOGIN / SIGN UP
      </Link>
      <Link className="nav-btn green-btn">CONNECT WITH US</Link>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 100,
    backgroundColor: colors.primary_transparent,
    display: "flex",
    flexFlow: "row",
    gap: 20,
    justifyContent: "start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginRight: "auto",
  },
});

export default Nav;
