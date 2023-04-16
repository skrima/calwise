import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";

function Page2() {
  const {
    formData,
    setFormData,
    styles,
    setCurrentPage,
    setErrorMessage,
    setDisabled,
  } = useOutletContext();
  const sexChange = (e) => {
    setFormData((prev) => ({ ...prev, sex: e.target.value }));
  };
  const heightChange = (e) => {
    setFormData((prev) => ({ ...prev, heightUnit: e.target.value }));
  };
  const weightChange = (e) => {
    setFormData((prev) => ({ ...prev, weightUnit: e.target.value }));
  };
  useEffect(() => {
    setDisabled(true);
    if (!formData.age) {
      setErrorMessage("Enter your age.");
    } else if (!formData.height) {
      setErrorMessage("Enter your height.");
    } else if (!formData.weight) {
      setErrorMessage("Enter your weight.");
    } else {
      setErrorMessage("");
      setDisabled(false);
    }
  }, [formData, setDisabled, setErrorMessage]);

  useEffect(() => {
    setCurrentPage(2);
  }, [setCurrentPage]);
  return (
    <>
      <label style={styles.label}>
        Age
        <input
          value={formData.age}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, age: e.target.value }))
          }
          placeholder="e.g. 25"
          autoFocus
          style={styles.input}
          type="number"
        />
      </label>
      <div style={styles.label}>
        Sex
        <div style={styles.radioContainer}>
          <input
            id="signup-form-female"
            type="radio"
            className="signup-form-radio-btn"
            style={styles.radio}
            name="sex"
            value="female"
            checked={formData.sex === "female"}
            onChange={sexChange}
          />
          <label
            className="signup-form-radio-label"
            htmlFor="signup-form-female"
          >
            F
          </label>
          <input
            id="signup-form-male"
            type="radio"
            className="signup-form-radio-btn"
            style={styles.radio}
            name="sex"
            value="male"
            checked={formData.sex === "male"}
            onChange={sexChange}
          />
          <label className="signup-form-radio-label" htmlFor="signup-form-male">
            M
          </label>
        </div>
      </div>
      <div style={{ display: "flex", gap: 30 }}>
        {/* HEIGHT */}
        <label style={styles.label}>
          Height
          <div style={myStyles.dualField}>
            <input
              value={formData.height}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, height: e.target.value }))
              }
              placeholder={`e.g. ${formData.heightUnit === "cm" ? 170 : 5.7}`}
              style={{ ...styles.input, flex: 1, width: "100%" }}
              type="number"
            />
            <div
              style={{
                ...styles.radioContainer,
                flex: "unset",
              }}
            >
              <input
                id="signup-form-cm"
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="height"
                value="cm"
                checked={formData.heightUnit === "cm"}
                onChange={heightChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor="signup-form-cm"
              >
                cm
              </label>
              <input
                id="signup-form-in"
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="height"
                value="in"
                checked={formData.heightUnit === "in"}
                onChange={heightChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor="signup-form-in"
              >
                in
              </label>
            </div>
          </div>
        </label>
        {/* WEIGHT */}
        <label style={styles.label}>
          Weight
          <div style={myStyles.dualField}>
            <input
              value={formData.weight}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, weight: e.target.value }))
              }
              placeholder={`e.g. ${formData.weightUnit === "kg" ? 70 : 150}`}
              style={{ ...styles.input, flex: 1, width: "100%" }}
              type="number"
            />
            <div
              style={{
                ...styles.radioContainer,
                flex: "unset",
              }}
            >
              <input
                id="signup-form-kg"
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="weight"
                value="kg"
                checked={formData.weightUnit === "kg"}
                onChange={weightChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor="signup-form-kg"
                style={{ cursor: "pointer" }}
              >
                kg
              </label>
              <input
                id="signup-form-lbs"
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="weight"
                value="lbs"
                checked={formData.weightUnit === "lbs"}
                onChange={weightChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor="signup-form-lbs"
                style={{ cursor: "pointer" }}
              >
                lbs
              </label>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}

const myStyles = Stylesheet.create({
  dualField: {
    display: "flex",
    gap: 10,
  },
});

export default Page2;
