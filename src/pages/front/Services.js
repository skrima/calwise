import React from "react";
import "./styles/Services.css";
import Stylesheet from "reactjs-stylesheet";
import servicesBG from "../../assets/images/services-bg.png";
import serviceCardData from "../../data/serviceCardData";
import ServiceCard from "./components/ServiceCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import colors from "../../variables/colors";

function Services({ services }) {
  return (
    <div ref={services} style={styles.container}>
      <img src={servicesBG} style={styles.bg} />
      <div style={styles.cropRect} />
      <div style={styles.content}>
        <h4 style={styles.title}>OUR SERVICES</h4>
        <div style={styles.cardsContainer}>
          {serviceCardData.map((data, index) => (
            <ServiceCard key={index} {...data} />
          ))}
        </div>
        <Link className="front-explore-btn explore-services-btn" to="#">
          <p>Click to explore our services</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: "100vh",
    backgroundColor: "white",
    position: "relative",
  },
  bg: {
    height: "100%",
    width: "100%",
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
    paddingLeft: 20,
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
  },
  cardsContainer: {
    marginTop: 100,
    width: "100%",
    overflowX: "auto",
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    flexFlow: "row",
    gap: 20,
    justifyContent: "center",
  },
  cropRect: {
    position: "absolute",
    height: "54%",
    width: "100%",
    backgroundColor: colors.gray_light,
    bottom: 0,
    zIndex: 0,
  },
});

export default Services;
