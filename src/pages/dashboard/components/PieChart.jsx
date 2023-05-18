import "../styles/Home.css";
import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import colors from "../../../variables/colors";
import Stylesheet from "reactjs-stylesheet";

function PieChart({ data, futureData, transform }) {
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
    <div className="graph-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ alignSelf: "flex-start" }}>Daily Calorie Calculator</h5>
        <div style={styles.limitContainer}>
          <p style={{ fontSize: 12 }}>{transform.limit}</p>
        </div>
      </div>
      <div style={styles.container} ref={containerRef}>
        <Pie data={data} options={options} style={styles.normalChart} />
        <Pie data={futureData} options={options} style={styles.futureChart} />
        <svg style={styles.svg}>
          <circle style={{ ...styles.center, cx: width / 2, cy: height / 2 }} />
        </svg>
      </div>
      <ul style={styles.pieListContainer}>
        <li style={styles.pieList}>
          <div style={{ ...styles.pieCircle, ...styles.pieCircleGreen }} />
          <p>Total Consumed: {transform.consumed} Cal</p>
        </li>
        <li style={styles.pieList}>
          <div
            style={{
              ...styles.pieCircle,
              ...(() => {
                return transform.exceeded
                  ? styles.pieCircleRed
                  : styles.pieCircleYellow;
              })(),
            }}
          />
          {!transform.exceeded ? (
            <p>Expected Change: {transform.change} Cal</p>
          ) : (
            <p>
              Expected Change:{" "}
              {transform.consumed > transform.limit
                ? 0
                : transform.limit - transform.consumed}{" "}
              <span style={{ color: colors.chart_red }}>
                + {transform.change + transform.consumed - transform.limit}
              </span>{" "}
              Cal
            </p>
          )}
        </li>
      </ul>
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
  pieListContainer: {
    display: "flex",
    flexFlow: "column",
    gap: 12,
    listStyle: "none",
    alignSelf: "flex-start",
  },
  pieList: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontSize: 12,
    pointerEvents: "none",
  },
  pieCircle: {
    borderRadius: 20,
    width: 12,
    height: 12,
  },
  pieCircleRed: {
    backgroundColor: colors.chart_red,
  },
  pieCircleYellow: {
    backgroundColor: colors.chart_yellow,
  },
  pieCircleGreen: {
    backgroundColor: colors.chart_green,
  },
  limitContainer: {
    padding: 5,
    background: "#F7F7F7",
    border: "0.5px solid #C1C1C1",
    color: colors.chart_green,
    borderRadius: 4,
    width: "auto",
    minWidth: 50,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "default",
  },
});

export default PieChart;
