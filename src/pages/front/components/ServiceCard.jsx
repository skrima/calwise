import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import "./ServiceCard.css"

function ServiceCard({ title, Icon, desc, color }) {
  return (
    <div style={styles.container}>
        <div className={`front-services-card`} style={{ backgroundColor: color }} >
          <p>{title}</p>
          <Icon style={styles.icon} />
        </div>
        <p style={styles.desc}>{desc}</p>
    </div>
  )
}

const styles = Stylesheet.create({
  icon: {
    transform: "scale(2.3)"
  },
  desc: {
    color: "black",
    padding: 10,
    textAlign: "justify",
    width: 220
  }
})

export default ServiceCard