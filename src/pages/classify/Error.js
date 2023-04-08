import React from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../variables/colors";

function Error({ message, setError, color }) {
  return (
    <div
      onClick={() =>
        setError({
          error: false,
          message: "",
          color: "red",
        })
      }
      style={{
        ...styles.container,
        backgroundColor:
          color === "green" ? colors.primary_color : "rgba(255, 0, 0, 0.25)",
        color: color === "green" ? "white" : "black",
      }}
    >
      <p>{message}</p>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    padding: 20,
    display: "flex",
    position: "absolute",
    top: 10,
    margin: "auto",
    borderRadius: 10,
    zIndex: 100,
    cursor: "pointer",
  },
});

export default Error;
