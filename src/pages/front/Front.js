import React, { useRef } from "react";
import Nav from "./Nav";
import "./styles/Front.css";
import Stylesheet from "reactjs-stylesheet";
import Bottom from "./Bottom";
import Top from "./Top";

function Front() {
  const calwiseRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);
  return (
    <div>
      <Nav
        calwise={calwiseRef}
        services={servicesRef}
        products={productsRef}
        testimonials={testimonialsRef}
      />
      <Bottom />
      <Top
        calwise={calwiseRef}
        services={servicesRef}
        products={productsRef}
        testimonials={testimonialsRef}
      />
    </div>
  );
}

const styles = Stylesheet.create({});

export default Front;
