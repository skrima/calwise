import "../styles/Home.css";
import React, { useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Stylesheet from "reactjs-stylesheet";

function BarChart({ data }) {
  const containerRef = useRef(0);
  const [width, setWidth] = useState(containerRef.current?.offsetWidth || 0);
  const [height, setHeight] = useState(containerRef.current?.offsetHeight || 0);
  const [chart, setChart] = useState();

  window.addEventListener("resize", () => {
    setWidth(containerRef.current?.offsetWidth || 0);
    setHeight(containerRef.current?.offsetHeight || 0);
  });

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
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      maintainAspectRatio: false,
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
      <Bar
        style={styles.chart}
        height={height}
        width={width}
        data={data}
        options={options}
      />
    </div>
  );
}

const styles = Stylesheet.create({
  chart: {
    pointerEvents: "none",
  },
});

export default BarChart;
