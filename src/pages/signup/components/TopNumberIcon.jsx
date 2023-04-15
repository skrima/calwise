import React from "react";
import { Link } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../../variables/colors";

function TopNumberIcon({ label, first, currentPage }) {
  const iconStyle = () => {
    const style = {
      ...styles.iconContainer,
      cursor: label < currentPage ? "pointer" : "default",
    };

    if (currentPage === label) {
      style.backgroundColor = "black";
      style.color = "white";
    } else if (label < currentPage) {
      style.backgroundColor = colors.black_variant;
      style.color = "white";
    }

    return style;
  };

  const toFtn = () => {
    if (label < currentPage) {
      if (label === 1) return "";
      else return `page${label}`;
    }
  };

  return (
    <div style={styles.container}>
      {!first && (
        <div
          style={{
            ...styles.line,
            backgroundColor:
              label <= currentPage ? colors.black_variant : colors.gray_light,
          }}
        />
      )}
      <Link style={iconStyle()} to={toFtn()}>
        <p>{label}</p>
      </Link>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    color: "black",
    backgroundColor: colors.gray_light,
  },
  line: {
    width: 50,
    height: 3,
    backgroundColor: colors.gray_light,
  },
});

export default TopNumberIcon;
