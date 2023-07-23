import React from "react";
import Stylesheet from "reactjs-stylesheet";
import "./styles/Testimonials.css";
import testimonialsBG from "../../assets/images/testimonials-bg.png";
import { Link } from "react-router-dom";
import TestimonialCard from "./components/TestimonialCard";
import testimonialscardData from "../../data/testimonialscardData";

function Testimonials({ testimonials }) {
  return (
    <div ref={testimonials} style={styles.container}>
      <img src={testimonialsBG} style={styles.bg} />
      <div style={styles.content}>
        <h4 style={styles.title}>TESTIMONIALS</h4>
        <div style={styles.cardsContainer}>
          {testimonialscardData.map((data, index) => (
            <TestimonialCard key={index} {...data} />
          ))}
        </div>
        <Link className="get-started-btn front-testimonials-btn" to="signup">
          Get Started with Calwise!
        </Link>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    minHeight: "100vh",
    backgroundColor: "white",
    position: "relative",
  },
  bg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
  title: {
    alignSelf: "center",
    marginTop: 150,
  },
  cardsContainer: {
    marginTop: 50,
    width: "100%",
    overflowX: "auto",
    display: "flex",
    flexFlow: "column",
    gap: 50,
  },
});

export default Testimonials;
