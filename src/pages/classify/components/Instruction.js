import React from "react";
import Stylesheet from "reactjs-stylesheet";

function Instruction() {
  const text = `
Pick the category that applies to the meal below.
Note that a meal can have more than one category.

- Non-vegetarian: Eat everything (constantly selected) 🥩
- Vegetarian: Eat animal produce like eggs and milk but not the animal. e.g. 🥚
- Vegan: Pure herbivores (Only eat plants). 🥬

* All vegan meals are vegetarian meals but not all vegetarian meals are vegan meals, e.g. eggs.

* If a soup does not expressly contain an animal product, it remains a vegan dish. e.g. Vegetable soup, Oha soup, e.t.c.
`;
  return (
    <div style={styles.container}>
      <h4>Instructions: 👇</h4>
      <pre style={styles.text}>{text}</pre>
      <h4 style={{ textAlign: "center", color: "red" }}>
        If you're not sure about the meal, please look it up, <br />
        or just press "Skip". 🙏
      </h4>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    maxWidth: 500,
    display: "flex",
    flexFlow: "column",
    gap: 10,
    marginBottom: 30,
  },
  text: {
    whiteSpace: "pre-wrap",
  },
});

export default Instruction;
