import "../styles/Home.css";
import React, { useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Stylesheet from "reactjs-stylesheet";
import colors from "../../../variables/colors";

function BarChart({ data, range }) {
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
    <div className="graph-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ alignSelf: "flex-start" }}>Total Calories</h5>
        <select
          style={styles.rangeSelect}
          value={range.barChartRange}
          onChange={(e) => range.setBarChartRange(e.target.value)}
        >
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
        <Bar
          style={styles.chart}
          height={height}
          width={width}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  chart: {
    pointerEvents: "none",
  },
  rangeSelect: {
    background: "#F7F7F7",
    border: "0.5px solid #C1C1C1",
    borderRadius: 4,
    color: colors.chart_green,
    cursor: "pointer",
  },
});

export default BarChart;
