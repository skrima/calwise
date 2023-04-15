import React from "react";
import Stylesheet from "reactjs-stylesheet";
import "./styles/Products.css";
import productsBG from "../../assets/images/products-bg.png";
import ProductCard from "./components/ProductCard";
import productsCardData from "../../data/productsCardData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import colors from "../../variables/colors";

function Products({ products }) {
  return (
    <div ref={products} style={styles.container}>
      <img src={productsBG} style={styles.bg} />
      <div style={styles.cropRect} />
      <div style={styles.content}>
        <h4 style={styles.title}>OUR PRODUCTS</h4>
        <div style={styles.cardsContainer}>
          {productsCardData.map((data, index) => (
            <ProductCard key={index} {...data} />
          ))}
        </div>
        <Link className="front-explore-btn" to="#">
          <p>Click to explore our products</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: "100vh",
    backgroundColor: "white",
    position: "relative",
    position: "relative",
  },
  bg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
  },
  cardsContainer: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    overflowX: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    justifyContent: "center",
  },
  cropRect: {
    position: "absolute",
    height: "50%",
    width: "100%",
    backgroundColor: colors.gray_light,
    bottom: 0,
    zIndex: 0,
  },
});

export default Products;
