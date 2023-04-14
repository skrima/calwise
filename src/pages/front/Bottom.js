import React from "react";
import { Link } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import logo from "../../assets/logo/logo1.png";
import homeBG from "../../assets/images/home-bg.png";
import "./styles/Bottom.css";
import colors from "../../variables/colors";

function Bottom() {
  return (
    <div style={styles.container}>
      <img src={homeBG} style={styles.bg} />
      <div style={styles.bgCover} />
      <img src={logo} style={styles.logo} />
      <Link className="get-started-btn" to="signup">
        Get Started with Calwise!
      </Link>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    gap: 20,
  },
  logo: {
    transform: "scale(0.25)",
    position: "absolute",
    zIndex: 10,
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  bgCover: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary_color,
    opacity: 0.5,
    zIndex: 1,
  },
});

export default Bottom;
