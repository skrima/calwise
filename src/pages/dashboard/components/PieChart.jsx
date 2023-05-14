import "../styles/Home.css";
import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import colors from "../../../variables/colors";
import Stylesheet from "reactjs-stylesheet";

function PieChart({ data, futureData }) {
  const containerRef = useRef(null);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
    setHeight(containerRef.current.offsetHeight);
  }, [containerRef]);

  return (
    <div style={styles.container} ref={containerRef}>
      <Pie data={data} options={options} style={styles.normalChart} />
      <Pie data={futureData} options={options} style={styles.futureChart} />
      <svg style={styles.svg}>
        <circle style={{ ...styles.center, cx: width / 2, cy: height / 2 }} />
      </svg>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    position: "relative",
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 10,
  },
  center: {
    r: 35,
    fill: "white",
    filter: "drop-shadow(2px 2px 10px rgb(0 0 0 / 0.25))",
  },
  normalChart: {
    transform: "scale(0.95)",
    pointerEvents: "none",
  },
  futureChart: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
  },
});

export default PieChart;
