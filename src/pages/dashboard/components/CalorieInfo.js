import React from 'react'
import Stylesheet from 'reactjs-stylesheet'

function CalorieInfo({ Icon, color, title, desc }) {
  return (
    <div style={styles.container}>
        <div style={{...styles.iconContainer, backgroundColor: color}}>
            <Icon style={{ height: 20, width: 20 }} />
        </div>
        <div style={styles.content}>
            <h5>{title}</h5>
            <p style={styles.desc}>{desc}</p>
        </div>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        borderRadius: 10,
        flex: "calc(50% - 10px)",
        height: 80,
        color: "black",
        padding: 10,
        display: "flex",
        gap: 10,
        alignItems: "center",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        overflow: "hidden",
    },
    iconContainer: {
        width: 60,
        minWidth: 60,
        height: "100%",
        borderRadius: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
    content: {
        display: "flex",
        flexFlow: "column",
        gap: 10,
        textAlign: "start",
        justifyContent: "space-around",
    },
    desc: {
        fontSize: "small",
    },
})

export default CalorieInfo