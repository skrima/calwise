import "../../index.css";
import { PRODUCTION } from "../../variables/variables";
import React, { useEffect, useState } from "react";
import Stylesheet from "reactjs-stylesheet";
import "./styles/Home.css";
import {
  FaBell,
  FaCheckCircle,
  FaFire,
  FaExclamationTriangle,
  FaBalanceScale,
  FaUtensilSpoon,
} from "react-icons/fa";
import CalorieInfo from "./components/CalorieInfo";
import workoutImage from "../../assets/images/wokout-image.png";
import workoutText from "../../assets/images/workout-text.png";
import BarChart from "./components/BarChart";
import {
  labels as barLabels,
  monthBarEmpty,
  monthBarFilled,
} from "./data/bar-data";
import {
  labels as pieLabels,
  consumedEmpty,
  consumedFilled,
} from "./data/pie-data";
import PieChart from "./components/PieChart";
import colors from "../../variables/colors";

function Home() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [calorieMessage, setCalorieMessage] = useState(
    `You're on track! This food fits within your calorie goals. Enjoy guilt-free!`
  );
  const [calorieInfo, setCalorieInfo] = useState({
    calories: `This meal contains an estimated 200 calories.`,
    balance: "",
    safety: `This food contains milk which irritates certain people.`,
    portion: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState(
    "Should I remove this from your daily calorie intake?"
  );
  const [barChartData, setBarChartData] = useState({
    labels: barLabels,
    datasets: [
      {
        label: "Calories Consumed",
        data: !PRODUCTION ? monthBarFilled.data : [],
        backgroundColor: !PRODUCTION
          ? monthBarFilled.data?.map((cal) => {
              if (cal > monthBarFilled.limit) return colors.chart_red;
              return colors.chart_green;
            })
          : [],
        width: 20,
      },
    ],
  });
  const [barChartRange, setBarChartRange] = useState("week");

  const p = {
        limit: consumedFilled.limit,
        consumed: [
          consumedFilled.consumed,
          consumedFilled.consumed > consumedFilled.limit
            ? consumedFilled.limit
            : consumedFilled.limit - consumedFilled.consumed,
        ],
        change: [
          consumedFilled.consumed -
            (consumedFilled.limit -
              (consumedFilled.consumed + consumedFilled.change) >=
            0
              ? 0
              : Math.abs(
                  consumedFilled.limit -
                    (consumedFilled.consumed + consumedFilled.change)
                )) >=
          0
            ? consumedFilled.consumed -
              (consumedFilled.limit -
                (consumedFilled.consumed + consumedFilled.change) >=
              0
                ? 0
                : Math.abs(
                    consumedFilled.limit -
                      (consumedFilled.consumed + consumedFilled.change)
                  ))
            : 0,
          consumedFilled.change + consumedFilled.consumed,
          consumedFilled.limit -
            (consumedFilled.consumed + consumedFilled.change) >=
          0
            ? consumedFilled.limit -
              (consumedFilled.consumed + consumedFilled.change)
            : 0,
        ],
        exceeded:
          consumedFilled.consumed + consumedFilled.change >
          consumedFilled.limit,
        consumedValue: consumedFilled.consumed,
        changeValue: consumedFilled.change,
        exceededValue:
          consumedFilled.consumed +
          consumedFilled.change -
          consumedFilled.limit,
      };

  const [pieChartData, setPieChartData] = useState({
    labels: pieLabels,
    datasets: [
      {
        label: "Calories Consumed",
        data: p.consumed,
        backgroundColor: p.consumed?.map((_, i) => {
          if (i === 0) return colors.chart_green;
          return "transparent";
        }),
      },
    ],
  });

  const [pieChartFutureData, setPieChartFutureData] = useState({
    labels: pieLabels,
    datasets: [
      {
        label: "Calories Consumed",
        data: p.change,
        backgroundColor: !PRODUCTION
          ? monthBarFilled.data?.map((_, i) => {
              if (p.exceeded && i === 1) return colors.chart_red;
              else if (i === 1) return colors.chart_yellow;
              return "transparent";
            })
          : [],
      },
    ],
  });

  const searchFtn = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container}>
      <section style={styles.searchContainer}>
        <form style={styles.searchForm} onSubmit={searchFtn}>
          <input
            className="dashboard-search-input"
            placeholder={`What's on the menu?`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="dashboard-search-btn">
            Search
          </button>
        </form>
        <div style={styles.notificationContainer}>
          <FaBell style={{ width: 12 }} />
          <div style={styles.notificationLabel}>
            <p>{`22`}</p>
          </div>
        </div>
      </section>
      <div style={styles.main}>
        <section style={styles.infoContainer}>
          <div
            style={{
              ...styles.calorieMessageContainer,
              color: "var(--primary-light)",
            }}
          >
            <p>{calorieMessage}</p>
            <FaCheckCircle style={{ width: 12, minWidth: 12 }} />
          </div>
          <div style={styles.calorieInfoContainer}>
            {calorieInfo.calories && (
              <CalorieInfo
                Icon={FaFire}
                color={"var(--card-orange)"}
                title={"Calories"}
                desc={calorieInfo.calories}
              />
            )}
            {calorieInfo.safety && (
              <CalorieInfo
                Icon={FaExclamationTriangle}
                color={"var(--card-red)"}
                title={"Safety"}
                desc={calorieInfo.safety}
              />
            )}
            {calorieInfo.balance && (
              <CalorieInfo
                Icon={FaBalanceScale}
                color={"var(--card-green)"}
                title={"Balance"}
                desc={calorieInfo.balance}
              />
            )}
            {calorieInfo.portion && (
              <CalorieInfo
                Icon={FaUtensilSpoon}
                color={"var(--card-blue)"}
                title={"Portion"}
                desc={calorieInfo.portion}
              />
            )}
            <div style={styles.confirmationContainer}>
              <div>
                <h5>{confirmationMessage}</h5>
              </div>
              <button style={{...styles.confirmationBtn, backgroundColor: colors.primary_light}}>Yes</button>
              <button style={{...styles.confirmationBtn, backgroundColor: colors.light_red}}>No</button>
            </div>
          </div>
          <div style={styles.chartsContainer}>
            <div className="graph-container">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <h5 style={{ alignSelf: "flex-start" }}>
                  Daily Calorie Calculator
                </h5>
                <div style={styles.limitContainer}>
                  <p style={{ fontSize: 12 }}>{p.limit}</p>
                </div>
              </div>
              <PieChart data={pieChartData} futureData={pieChartFutureData} />
              <ul style={styles.pieListContainer}>
                <li style={styles.pieList}>
                  <div
                    style={{ ...styles.pieCircle, ...styles.pieCircleGreen }}
                  />
                  <p>Total Consumed - {p.consumedValue} Cal</p>
                </li>
                <li style={styles.pieList}>
                  <div
                    style={{ ...styles.pieCircle, ...styles.pieCircleYellow }}
                  />
                  <p>Expected Change - {p.changeValue} Cal</p>
                </li>
                {p.exceeded && (
                  <li style={styles.pieList}>
                    <div
                      style={{ ...styles.pieCircle, ...styles.pieCircleRed }}
                    />
                    <p>Exceeded - {p.exceededValue} Cal</p>
                  </li>
                )}
              </ul>
            </div>
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
                  value={barChartRange}
                  onChange={(e) => setBarChartRange(e.target.value)}
                >
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
              <BarChart data={barChartData} />
            </div>
          </div>
        </section>
        <section style={styles.rightPanel}>
          <div style={styles.rightInfoPanel}>
            <div style={styles.rightInfoPanelBlock}>
              <p style={styles.rightInfoPanelBlockTitle}>Daily Calorie Limit</p>
              <h5>1200</h5>
            </div>
            <div style={styles.rightInfoPanelBlock}>
              <p style={styles.rightInfoPanelBlockTitle}>
                Estimated Weight Lost
              </p>
              <h5>2kg (4.4lbs)</h5>
            </div>
            <div style={styles.rightInfoPanelBlock}>
              <p style={styles.rightInfoPanelBlockTitle}>
                Calories Left for Today
              </p>
              <h5>300</h5>
            </div>
            <div style={styles.rightInfoPanelBlock}>
              <p style={styles.rightInfoPanelBlockTitle}>Days left</p>
              <h5>13</h5>
            </div>
          </div>
          <div style={styles.workoutContainer}>
            <img src={workoutImage} alt="" style={styles.workoutImage} />
            <div style={styles.workoutContent}>
              <img src={workoutText} alt="" style={styles.workoutText} />
              <button style={styles.workoutLearnMore}>Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    height: "inherit",
    display: "flex",
    flexFlow: "column",
    gap: 20,
  },
  searchContainer: {
    flex: "inherit",
    position: "relative",
    maxHeight: 30,
  },
  searchForm: {
    width: "inherit",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationContainer: {
    position: "relative",
    width: 30,
    height: 30,
    borderRadius: 20,
    position: "absolute",
    right: 20,
    top: 0,
    backgroundColor: "white",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  notificationLabel: {
    backgroundColor: "var(--secondary-color)",
    color: "white",
    position: "absolute",
    width: 15,
    height: 15,
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 8,
    fontWeight: "bold",
    top: -3,
    right: -3,
  },
  main: {
    display: "flex",
    gap: 20,
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    display: "flex",
    gap: 20,
    flexFlow: "column",
  },
  confirmationContainer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  confirmationBtn: {
    width: 56,
    height: 26,
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 4,
    border: "none",
    color: "white",
  },
  calorieMessageContainer: {
    display: "flex",
    gap: 10,
    maxHeight: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "medium",
  },
  calorieInfoContainer: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  rightPanel: {
    display: "flex",
    flexFlow: "column",
    flex: 0.4,
    gap: 20,
    minWidth: 300,
    maxWidth: 360,
    marginTop: 30,
  },
  rightInfoPanel: {
    cursor: "pointer",
    display: "flex",
    gap: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "var(--secondary-color)",
    color: "white",
    flexWrap: "wrap",
    alignItems: "center",
    height: 180,
  },
  rightInfoPanelBlock: {
    display: "flex",
    flexFlow: "column",
    gap: 10,
    flexBasis: "calc(50% - 10px)",
  },
  rightInfoPanelBlockTitle: {
    fontSize: 13,
  },
  workoutContainer: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "green",
    position: "relative",
    cursor: "pointer",
  },
  workoutImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  workoutContent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 20,
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
  },
  workoutText: {
    alignSelf: "flex-start",
    width: 160,
  },
  workoutLearnMore: {
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    paddingInline: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  chartsContainer: {
    width: "100%",
    display: "flex",
    gap: 20,
  },
  pieChart: {},
  rangeSelect: {
    background: "#F7F7F7",
    border: "0.5px solid #C1C1C1",
    borderRadius: 4,
    color: colors.chart_green,
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
  },
});

export default Home;
