import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import effects from '../../../variables/effects'
import "./TestimonialCard.css"

function TestimonialCard({ name, comment, image, bg, color, left, width }) {
  return (
    <div style={{ 
      ...styles.container, 
      backgroundColor: bg, color, 
      alignSelf: left ? "flex-start" : "unset", 
      alignSelf: !left ? "flex-end" : "unset", width,
      borderRadius: left ? "0px 10px 10px 0px" : "10px 0px 0px 10px",
      flexFlow: left ? "row" : "row-reverse"
    }}>
      <div style={{ ...styles.imageContainer, border: "3px solid " + color }}>
        <img src={image} alt="" style={styles.image} />
      </div>
        <p style={{ ...styles.comment, textAlign: left ? "left" : "right" }}>{comment}
          <span style={{ alignSelf: left ? "flex-end" : "flex-start" }}>{name}</span>
        </p>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
      display: "flex",
      padding: 20,
      border: "solid 3px black",
      boxShadow: effects.card_shadow
    },
    comment: {
        display: "flex",
        flexFlow: "column",
        gap: 5,
    },
    imageContainer: {
      width: 50,
      minWidth: 50,
      height: 50,
      margin: 20,
      borderRadius: 50,
      overflow: "hidden",
      position: "relative"
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }
})

export default TestimonialCard