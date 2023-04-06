import "./Classify.css";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { FaDrumstickBite, FaEgg, FaEnvira } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import Instruction from "./components/Instruction";
import { Link } from "react-router-dom";

function Classify() {
  const [meal, setMeal] = useState("Eba and Egusi Soup");
  const [nonSelected, setNonSelected] = useState(true);
  const [vegeSelected, setVegeSelected] = useState(false);
  const [veganSelected, setVeganSelected] = useState(false);

  const skipFtn = () => {};

  const nextFtn = () => {};

  const vegeFtn = () => {
    setVegeSelected((prev) => {
      if (prev) setVeganSelected(false);
      return !prev;
    });
  };

  const veganFtn = () => {
    setVeganSelected((prev) => {
      if (!prev) setVegeSelected(true);
      return !prev;
    });
  };

  if (sessionStorage.getItem("authorized"))
    return (
      <div style={styles.container}>
        <Instruction />
        <div style={styles.textContainer}>
          <p>🤓 Meal:</p>
          <h3 style={styles.meal}>{meal}</h3>
        </div>
        <div style={styles.buttonsContainer}>
          <Button
            selected={nonSelected}
            name="Non-vegetarian"
            Icon={FaDrumstickBite}
            constant
          />
          <Button
            selected={vegeSelected}
            click={vegeFtn}
            name="Vegetarian"
            Icon={FaEgg}
          />
          <Button
            selected={veganSelected}
            click={veganFtn}
            name="Vegan"
            Icon={FaEnvira}
          />
        </div>
        <div style={styles.btnContainer}>
          <button className="classify-btn" onClick={skipFtn}>
            Skip
          </button>
          <button className="classify-btn" onClick={nextFtn}>
            Next
          </button>
        </div>
      </div>
    );
  else window.location = "/";
}

const styles = Stylesheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexFlow: "column",
    gap: 20,
    height: "100vh",
    justifyContent: "center",
    textAlign: "start",
    alignItems: "center",
  },
  buttonsContainer: {
    display: "flex",
    gap: 20,
    justifyContent: "space-between",
    height: "fit-content",
    flexFlow: "column",
  },
  textContainer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    maxWidth: 500,
  },
  meal: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },
  btnContainer: {
    display: "flex",
    gap: 20,
  },
});

export default Classify;
