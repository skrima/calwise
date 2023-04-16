import React, { useEffect, Fragment } from "react";
import { useOutletContext } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import { activitiesData, habitsData } from "../../data/signupCardData";

function Page3() {
  const {
    formData,
    setFormData,
    styles,
    setCurrentPage,
    setErrorMessage,
    setDisabled,
  } = useOutletContext();

  const activityChange = (e) => {
    setFormData((prev) => ({ ...prev, activity: e.target.value }));
  };

  const habitChange = (e) => {
    const habit = e.target.value;
    setFormData((prev) => {
      const modPrev = JSON.parse(JSON.stringify(prev));
      if (modPrev.habits.includes(habit)) {
        modPrev.habits.splice(modPrev.habits.indexOf(habit), 1);
      } else {
        modPrev.habits.push(habit);
      }
      return modPrev;
    });
  };

  useEffect(() => {
    setDisabled(false);
    setErrorMessage("");
  }, [setDisabled, setErrorMessage]);

  useEffect(() => {
    setCurrentPage(3);
  }, [setCurrentPage]);
  return (
    <>
      <div style={{ ...styles.label, flex: "100%" }}>
        Activity level (Choose one)
        <div style={myStyles.activityContainer}>
          {activitiesData.map((data, index) => (
            <Fragment key={index}>
              <input
                id={"signup-form-activity" + index}
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="activity"
                value={data.label}
                checked={formData.activity === data.label}
                onChange={activityChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor={"signup-form-activity" + index}
                style={myStyles.activityLabel}
              >
                {data.desc}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ ...styles.label, flex: "100%" }}>
        Lifestyle habits
        <div style={myStyles.activityContainer}>
          {habitsData.map((data, index) => (
            <Fragment key={index}>
              <input
                id={"signup-form-habit" + index}
                type="checkbox"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="habit"
                value={data.label}
                checked={formData.habits.includes(data.label)}
                onChange={habitChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor={"signup-form-habit" + index}
                style={myStyles.activityLabel}
              >
                {data.desc}
              </label>
            </Fragment>
          ))}
        </div>
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
    cursor: "pointer",
  },
});

export default Page3;
