import React, { Fragment, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import { goalsData, medicalData } from "../../data/signupCardData";

function Page5() {
  const {
    formData,
    setFormData,
    styles,
    setCurrentPage,
    setErrorMessage,
    setDisabled,
  } = useOutletContext();

  useEffect(() => {
    setCurrentPage(5);
  }, [setCurrentPage]);

  useEffect(() => {
    setDisabled(false);
    setErrorMessage("");
  }, [setDisabled, setErrorMessage]);

  const medicalChange = (e) => {
    const medical = e.target.value;
    setFormData((prev) => {
      const modPrev = JSON.parse(JSON.stringify(prev));
      if (modPrev.medicals.includes(medical)) {
        modPrev.medicals.splice(modPrev.medicals.indexOf(medical), 1);
      } else {
        modPrev.medicals.push(medical);
      }
      return modPrev;
    });
  };

  const goalChange = (e) => {
    setFormData((prev) => ({ ...prev, goal: e.target.value }));
  };

  return (
    <>
      <div style={{ ...styles.label, flex: "100%" }}>
        Medical conditions
        <div style={myStyles.activityContainer}>
          {medicalData.map((data, index) => (
            <Fragment key={index}>
              <input
                id={"signup-form-medical" + index}
                type="checkbox"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="medical"
                value={data.label}
                checked={formData.medicals.includes(data.label)}
                onChange={medicalChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor={"signup-form-medical" + index}
                style={myStyles.activityLabel}
              >
                {data.desc}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ ...styles.label, flex: "100%" }}>
        Weight loss or gain goals
        <div style={myStyles.activityContainer}>
          {goalsData.map((data, index) => (
            <Fragment key={index}>
              <input
                id={"signup-form-goal" + index}
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="goal"
                value={data.label}
                checked={formData.goal === data.label}
                onChange={goalChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor={"signup-form-goal" + index}
                style={myStyles.activityLabel}
              >
                {data.desc}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <p>
          By clicking on the "Finish" button, you acknowledge and agree to abide
          by our <Link to="/terms-and-conditions">Terms and Conditions</Link> as
          well as our <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
    </>
  );
}

const myStyles = Stylesheet.create({
  activityContainer: { display: "flex", gap: 10, flexWrap: "wrap" },
  activityLabel: {
    cursor: "pointer",
    width: "fit-content",
    minWidth: "fit-content",
    maxWidth: "fit-content",
  },
});

export default Page5;
