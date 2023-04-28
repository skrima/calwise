import React, { Fragment, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import { dietryData } from "../../data/signupCardData";
import { FaQuestion } from "react-icons/fa";
import effects from "../../variables/effects";
import colors from "../../variables/colors";

function Page4() {
  const {
    formData,
    setFormData,
    styles,
    setCurrentPage,
    setErrorMessage,
    setDisabled,
  } = useOutletContext();

  const dietryChange = (e) => {
    setFormData((prev) => ({ ...prev, dietry: e.target.value }));
  };

  useEffect(() => {
    setDisabled(false);
    setErrorMessage("");
  }, [setDisabled, setErrorMessage]);

  useEffect(() => {
    setCurrentPage(4);
  }, [setCurrentPage]);
  return (
    <>
      <div style={{ ...styles.label, flex: "100%" }}>
        Dietary preferences or restrictions
        <div style={myStyles.activityContainer}>
          {dietryData.map((data, index) => (
            <Fragment key={index}>
              <input
                id={"signup-form-dietry" + index}
                type="radio"
                className="signup-form-radio-btn"
                style={styles.radio}
                name="dietry"
                value={data.label.toLowerCase()}
                checked={formData.dietry === data.label.toLowerCase()}
                onChange={dietryChange}
              />
              <label
                className="signup-form-radio-label"
                htmlFor={"signup-form-dietry" + index}
                style={myStyles.activityLabel}
              >
                <div style={myStyles.cardContainer}>
                  <p>{data.label}</p>
                  <data.Icon
                    style={myStyles.cardIcon}
                    className={
                      formData.dietry !== data.label.toLowerCase() && data.class
                    }
                  />
                  <div
                    style={{
                      ...myStyles.questionContainer,
                      backgroundColor:
                        formData.dietry === data.label.toLowerCase()
                          ? colors.selected_variant_2
                          : colors.gray_medium,
                    }}
                  >
                    <FaQuestion style={{ transform: "scale(0.5)" }} />
                  </div>
                </div>
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
    width: 200,
    minWidth: 200,
    maxWidth: "fit-content",
    height: 250,
    boxShadow: effects.card_shadow,
  },
  cardContainer: {
    paddingTop: 20,
    padding: 10,
    display: "flex",
    flexFlow: "column",
    gap: 80,
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  cardIcon: {
    transform: "scale(2.3)",
  },
  questionContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 16,
    height: 16,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default Page4;
