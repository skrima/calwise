import React from "react";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../../variables/colors";

function Button({ Icon, name, selected, click, constant }) {
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: !selected ? colors.primary_color : colors.selected,
      }}
      onClick={click}
    >
      <p>{name}</p>
      <Icon />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: "white",
    gap: 20,
    width: 200,
    height: 70,
    cursor: "pointer",
  },
});

export default Button;
