import React, { useEffect, useRef, useState } from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../variables/colors";
import "./Login.css";
import logo1 from "../../assets/logo/logo1.png";
import Error from "./Error";
import { Link } from "react-router-dom";

function Login() {
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    error: false,
    color: "red",
  });
  const linkRef = useRef(null);

  useEffect(() => {
    setError({
      error: false,
      message: "",
    });
  }, [formDetails]);

  const formSubmit = (e) => {
    const p = "Metro$!7Y";
    e.preventDefault();
    if (!formDetails.username.trim()) {
      setError({
        error: true,
        message: "Username cannot be empty.",
      });
      return;
    }
    if (!formDetails.password.trim()) {
      setError({
        error: true,
        message: "Password cannot be empty.",
      });
      return;
    }
    if (formDetails.password === p) {
      sessionStorage.setItem("authorized", true);
      sessionStorage.setItem("user", formDetails.username);
      linkRef.current.click();
    } else {
      setError({
        error: true,
        message: "Username or password is incorrect.",
      });
    }
  };

  return (
    <div className="classify-login-container">
      {error.error && (
        <Error
          message={error.message}
          setError={setError}
          color={error.color}
        />
      )}
      <div className="classify-login-form-container">
        <form onSubmit={formSubmit} style={styles.form}>
          <h3 style={{ textAlign: "center" }}>LOGIN</h3>
          <input
            value={formDetails.username}
            onChange={(e) =>
              setFormDetails((prev) => ({ ...prev, username: e.target.value }))
            }
            placeholder="Username"
            style={styles.input}
          />
          <input
            value={formDetails.password}
            onChange={(e) =>
              setFormDetails((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            placeholder="Password"
            style={styles.input}
          />
          <Link
            to={"/contribute"}
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              overflow: "none",
            }}
            ref={linkRef}
          />
          <button type="submit" className="classify-login-btn">
            Submit
          </button>
          <p>
            Don't have an account?{" "}
            <a
              className="classify-contact"
              href="https://wa.me/+2349038043846"
              target="_blank"
            >
              Contact Administrator
            </a>
          </p>
        </form>
        <div className="classify-logo-container">
          <img src={logo1} style={styles.logo} />
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  logo: {
    width: 150,
  },
  form: {
    display: "flex",
    flexFlow: "column",
    gap: 20,
    padding: 20,
  },
  input: {
    height: 40,
    textIndent: 10,
    borderRadius: 10,
    border: "solid 1px black",
  },
});

export default Login;
