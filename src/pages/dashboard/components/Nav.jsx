import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import logo from "../../../assets/images/dashboard-logo.png"
import profileImage from "../../../assets/images/sample-profile-pic.png"
import { AiOutlineMenu } from "react-icons/ai"

function Nav() {
  return (
    <div style={{...styles.container}}>
      <div style={styles.logoContainer}>
        <img src={logo} style={styles.logo} alt='' />
      </div>
      <div style={styles.profileContainer}>
        <div style={styles.profileWhite} />
        <img src={profileImage} style={styles.profilePic} alt='' />
      </div>
      <AiOutlineMenu style={{ cursor: "pointer" }} />
    </div>
  )
}

const styles = Stylesheet.create({
  container: {
    height: "inherit",
    width: 80,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: 20,
    gap: 20,
  },
  logoContainer: {
    width: "100%",
    height: 30,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  logo: {
    transform: "scale(0.6)",
    position: "absolute",
  },
  profileContainer: {
    cursor: "pointer",
    width: 30,
    height: 30,
    borderRadius: 50,
    border: "solid 3px var(--primary-color)",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileWhite: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: "inherit",
    border: "inherit",
    borderColor: "white"
  },
  profilePic: {
    width: "inherit",
    height: "inherit",
  },
})

export default Nav