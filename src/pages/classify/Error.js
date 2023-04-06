import React from "react";
import Stylesheet from "reactjs-stylesheet";

function Error({ message, setError }) {
  return (
    <div
      onClick={() =>
        setError({
          error: false,
          message: "",
        })
      }
      style={styles.container}
    >
      <p>{message}</p>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(255, 0, 0, 0.25)",
    display: "flex",
    position: "absolute",
    top: 10,
    margin: "auto",
    borderRadius: 10,
  },
});

export default Error;
