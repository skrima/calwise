import React, { useState } from 'react'
import Stylesheet from 'reactjs-stylesheet'
import "./styles/Home.css"
import { FaBell, FaCheckCircle, FaFire, FaExclamationTriangle, FaBalanceScale, FaUtensilSpoon } from "react-icons/fa"
import CalorieInfo from './components/CalorieInfo'
import workoutImage from "../../assets/images/wokout-image.png"
import workoutText from "../../assets/images/workout-text.png"

function Home() {

  const [search, setSearch] = useState("")
  const [notifications, setNotifications] = useState([])
  const [calorieMessage, setCalorieMessage] = useState(`You're on track! This food fits within your calorie goals. Enjoy guilt-free!`)
  const [calorieInfo, setCalorieInfo] = useState({
    calories: `This meal contains an estimated 200 calories.`,
    balance: "",
    safety: `This food contains milk which irritates certain people.`,
    portion: "",
  })
  const [confirmationMessage, setConfirmationMessage] = useState("Should I remove this from your daily calorie intake?")

  const searchFtn = (e) => {
    e.preventDefault();
  }

  return (
    <div style={styles.container}>
      <section style={styles.searchContainer}>
        <form style={styles.searchForm} onSubmit={searchFtn}>
          <input className='dashboard-search-input' placeholder={`What's on the menu?`}
          value={search} onChange={e => setSearch(e.target.value)} />
          <button type='submit' className='dashboard-search-btn'>Search</button>
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
        <div style={{...styles.calorieMessageContainer, color: "var(--primary-light)"}}>
          <p>{calorieMessage}</p>
          <FaCheckCircle style={{ width: 12, minWidth: 12 }} />
        </div>
        <div style={styles.calorieInfoContainer}>
          {calorieInfo.calories && <CalorieInfo Icon={FaFire} color={"var(--card-orange)"} title={"Calories"} desc={calorieInfo.calories} />}
          {calorieInfo.safety && <CalorieInfo Icon={FaExclamationTriangle} color={"var(--card-red)"} title={"Safety"} desc={calorieInfo.safety} />}
          {calorieInfo.balance && <CalorieInfo Icon={FaBalanceScale} color={"var(--card-green)"} title={"Balance"} desc={calorieInfo.balance} />}
          {calorieInfo.portion && <CalorieInfo Icon={FaUtensilSpoon} color={"var(--card-blue)"} title={"Portion"} desc={calorieInfo.portion} />}
          <div>
            <div>
              <p>{confirmationMessage}</p>
            </div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div>
          <div style={styles.pieChartContainer}>
            <h5>Daily Calorie Calculator</h5>
            <svg style={styles.pieChart}></svg>
            <div></div>
          </div>
          <div></div>
        </div>
      </section>
      <section style={styles.rightPanel}>
        <div style={styles.rightInfoPanel}>
          <div style={styles.rightInfoPanelBlock}>
            <p style={styles.rightInfoPanelBlockTitle}>Daily Calorie Limit</p>
            <h5>1200</h5>
          </div>
          <div style={styles.rightInfoPanelBlock}>
            <p style={styles.rightInfoPanelBlockTitle}>Estimated Weight Lost</p>
            <h5>2kg (4.4lbs)</h5>
          </div>
          <div style={styles.rightInfoPanelBlock}>
            <p style={styles.rightInfoPanelBlockTitle}>Calories Left for Today</p>
            <h5>300</h5>
          </div>
          <div style={styles.rightInfoPanelBlock}>
            <p style={styles.rightInfoPanelBlockTitle}>Days left</p>
            <h5>13</h5>
          </div>
        </div>
        <div style={styles.workoutContainer}>
          <img src={workoutImage} alt='' style={styles.workoutImage} />
          <div style={styles.workoutContent}>
            <img src={workoutText} alt='' style={styles.workoutText} />
            <button style={styles.workoutLearnMore}>
              Learn More
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
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
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
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
    gap: 10,
    flexFlow: "column",
  },
  calorieMessageContainer: {
    display: "flex",
    gap: 10,
    maxHeight: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "space-between"
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
  pieChartContainer: {

  },
  pieChart: {

  },
})

export default Home