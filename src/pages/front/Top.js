import React from "react";
import Stylesheet from "reactjs-stylesheet";
import Footer from "./Footer";
import Products from "./Products";
import Services from "./Services";
import Testimonials from "./Testimonials";

function Top({ calwise, services, products, testimonials }) {
  return (
    <>
      <div ref={calwise} style={styles.top}></div>
      <div style={styles.container}>
        <Services services={services} />
        <Products products={products} />
        <Testimonials testimonials={testimonials} />
        <Footer />
      </div>
    </>
  );
}

const styles = Stylesheet.create({
  container: {
    left: 0,
    right: 0,
    height: "auto",
    display: "flex",
    flexFlow: "column",
    gap: 0,
    top: "100vh",
    position: "absolute",
    zIndex: 10,
  },
  top: {
    position: "absolute",
    top: 0,
    opacity: 0,
    pointerEvents: "none",
  },
});

export default Top;
