import React from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../variables/colors";

function ErrorDisplay({ styles, message }) {
  return (
    <div style={{ ...myStyles.container, ...styles }}>
      <p>{message}</p>
    </div>
  );
}

const myStyles = Stylesheet.create({
  container: {
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    top: 50,
    margin: "auto",
    borderRadius: 10,
    zIndex: 100,
    cursor: "pointer",
    backgroundColor: colors.primary_transparent,
    color: "white",
    position: "absolute",
    pointerEvents: "none",
  },
});

export default ErrorDisplay;
