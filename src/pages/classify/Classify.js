import "./Classify.css";
import React, { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import { FaDrumstickBite, FaEgg, FaEnvira } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import Instruction from "./components/Instruction";
import { initializeApp } from "firebase/app";
import {
  doc,
  updateDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import Error from "./Error";

const firebaseConfig = {
  apiKey: "AIzaSyAEROsT4HrgyWe8jONkYY6rok2RyUJxxPw",
  authDomain: "calwise-1440f.firebaseapp.com",
  projectId: "calwise-1440f",
  storageBucket: "calwise-1440f.appspot.com",
  messagingSenderId: "849221320897",
  appId: "1:849221320897:web:e0b57fccca6d8f48705440",
  measurementId: "G-5CNJ1KLYDM",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "meals");

function Classify() {
  const [meals, setMeals] = useState([]);
  const [meal_index, set_meal_index] = useState(0);
  const [nonSelected, setNonSelected] = useState(true);
  const [vegeSelected, setVegeSelected] = useState(false);
  const [veganSelected, setVeganSelected] = useState(false);
  const [error, setError] = useState({
    error: false,
    color: "red",
  });

  useEffect(() => {
    if (error.error) {
      setTimeout(() => {
        setError({
          error: false,
        });
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (meals.length === 0 || meal_index % 10 === 0) {
      console.log(
        `meals:${JSON.stringify(meals.map((m) => m.meal))}\nindex:${meal_index}`
      );
      const q = query(colRef, where("reviewed", "==", false), limit(10));
      getDocs(q)
        .then((snapshot) => {
          if (!navigator.onLine) {
            setError({
              error: true,
              message:
                "An error occurred. Please check your inernet connection.",
            });
            return;
          }
          if (!snapshot.empty) {
            const data = snapshot.docs;
            setMeals((prev) => [
              ...prev,
              ...data.map((meal) => ({ id: meal.id, ...meal.data() })),
            ]);
            return;
          }
          setError({
            error: true,
            message: "That's all! Welldone 🙂",
            color: "green",
          });
        })
        .catch((err) => {
          console.error(`Report error to site admin!\nError: ${err.message}`);
        });
    }
  }, [meal_index]);

  const nextIndex = () => {
    if (!navigator.onLine) {
      setError({
        error: true,
        message: "An error occurred. Please check your inernet connection.",
      });
      return;
    }
    set_meal_index((prev) => prev + 1);
  };

  const skipFtn = () => {
    nextIndex();
    setVeganSelected(false);
    setVegeSelected(false);
  };

  const nextFtn = () => {
    const user = sessionStorage.getItem("user").toLowerCase();
    const index = meals[meal_index]?.id;
    if (user && meals[meal_index]) {
      const reviewRef = doc(db, "meals", index);
      updateDoc(reviewRef, {
        class: veganSelected
          ? "vegan"
          : vegeSelected
          ? "vegetarian"
          : "non-vegetarian",
        reviewed: true,
        reviewed_by: user,
        reviewed_at: new Date().toUTCString(),
      }).catch((err) => {
        console.error(`Report error to site admin!\nError: ${err.message}`);
      });
      nextIndex();
    }
  };

  const nonFtn = () => {
    setVeganSelected(false);
    setVegeSelected(false);
  };

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

  if (sessionStorage.getItem("authorized") && sessionStorage.getItem("user"))
    return (
      <div style={styles.container}>
        {error.error && (
          <Error
            message={error.message}
            setError={setError}
            color={error.color}
          />
        )}
        <Instruction />
        <div style={styles.textContainer}>
          <p style={{ whiteSpace: "nowrap" }}>🤓 Meal:</p>
          <h3 style={styles.meal}>{meals[meal_index]?.meal}</h3>
        </div>
        <div style={styles.buttonsContainer}>
          <Button
            selected={nonSelected}
            name="Non-vegetarian"
            Icon={FaDrumstickBite}
            click={nonFtn}
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
  else window.location = "/classify/login";
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
    wordBreak: "break-word",
  },
  btnContainer: {
    display: "flex",
    gap: 20,
  },
});

export default Classify;
