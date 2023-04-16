import React, { useState } from "react";
import Stylesheet from "reactjs-stylesheet";
import signupBG from "../../assets/images/signup-bg.png";
import { FaHome, FaQuestion } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import "./styles/Signup.css";
import logo from "../../assets/logo/logo1.png";
import { Link, Outlet } from "react-router-dom";
import TopNumberIcon from "./components/TopNumberIcon";
import effects from "../../variables/effects";
import colors from "../../variables/colors";
import ErrorDisplay from "../../components/ErrorDisplay";

function Signup() {
  const [pages] = useState([
    { label: 1, title: "Basic Information", first: true },
    { label: 2, title: "Personal  Information" },
    { label: 3, title: "Lifestyle and Activity" },
    { label: 4, title: "Dietary Information" },
    { label: 5, title: "Medical Information" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    sex: "female",
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    activity: "sedentary",
    habits: [],
    dietry: "non-vegetarian",
    medicals: [],
    goal: "lose",
  });
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Handles the form buttons
  const formBtns = () => {
    return (
      <div style={styles.btnsContainer}>
        {currentPage === 1 && (
          <div
            style={{ pointerEvents: "none", backgroundColor: "transparent" }}
          />
        )}
        {currentPage !== 1 && (
          <Link
            className="signup-form-btn"
            to={currentPage - 1 === 1 ? "" : `page${currentPage - 1}`}
          >
            Back
          </Link>
        )}
        <Link
          className="signup-form-btn signup-form-next-btn"
          to={
            currentPage === pages.length
              ? "/dashboard"
              : `page${currentPage + 1}`
          }
          style={{
            pointerEvents: disabled ? "none" : "all",
            backgroundColor: disabled
              ? colors.gray_medium
              : colors.primary_color,
          }}
        >
          {currentPage === pages.length ? "Done!" : "Next"}
        </Link>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgContainer}>
        <div style={styles.leftContent}>
          <div style={styles.topIconsContainer}>
            <Link
              className="signup-icon-container signup-icon-container-home"
              to="/"
            >
              <FaHome className="signup-icon" />
            </Link>
            <Link
              className="signup-icon-container signup-icon-container-help"
              to="/help"
            >
              <FaQuestion className="signup-icon" />
            </Link>
          </div>
          <div style={styles.bottomIconContainer}>
            <h5>Already have an account?</h5>
            <Link
              className="signup-icon-container signup-icon-container-login"
              to="/login"
            >
              <CgLogIn className="signup-icon" />
            </Link>
          </div>
        </div>
        <img src={logo} alt="" style={styles.logo} />
        <img src={signupBG} style={styles.bgImage} alt="" />
      </div>
      <div style={styles.rightContent}>
        <div style={styles.rightContentTop}>
          {pages.map((page, index) => (
            <TopNumberIcon key={index} {...page} currentPage={currentPage} />
          ))}
        </div>
        <div style={styles.rightContentMain}>
          <p>{pages[currentPage - 1].title}</p>
          {errorMessage && <ErrorDisplay message={errorMessage} />}
          <form style={styles.rightContentForm}>
            <Outlet
              context={{
                formData,
                setFormData,
                styles,
                setCurrentPage,
                setErrorMessage,
                setDisabled,
              }}
            />
            {formBtns()}
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
  },
  bgContainer: {
    flex: "50%",
    minWidth: 400,
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  leftContent: {
    position: "absolute",
    padding: 20,
    width: "100%",
    height: "100%",
    color: "white",
  },
  topIconsContainer: {
    top: 0,
    left: 0,
    display: "flex",
    flexFlow: "column",
    gap: 20,
  },
  bottomIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-end",
    gap: 10,
  },
  logo: {
    transform: "scale(0.2)",
    position: "absolute",
  },
  rightContent: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexFlow: "column",
  },
  rightContentTop: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
  },
  rightContentMain: {
    height: "100%",
    display: "flex",
    flexFlow: "column",
    gap: 50,
    marginTop: 100,
    alignItems: "center",
    position: "relative",
  },
  rightContentForm: {
    width: "100%",
    padding: 50,
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
  },
  span2Label: {
    flex: "100%",
  },
  label: {
    display: "flex",
    flexFlow: "column",
    gap: 10,
    whiteSpace: "nowrap",
    flex: 0.5,
  },
  input: {
    border: "solid 1px black",
    borderRadius: 10,
    height: 40,
    boxShadow: effects.card_shadow,
    textIndent: 10,
  },
  btnsContainer: {
    flex: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  radio: {
    position: "absolute",
    width: 0,
    height: 0,
    overflow: "hidden",
  },
  radioContainer: {
    display: "flex",
    gap: 10,
    flex: 0.5,
  },
});

export default Signup;
