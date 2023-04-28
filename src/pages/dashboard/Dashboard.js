import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";

function Dashboard() {
  return <div style={styles.container}>
    <Nav />
    <Outlet />
  </div>;
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
  }
})

export default Dashboard;
