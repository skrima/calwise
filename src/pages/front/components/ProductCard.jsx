import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import "./ProductCard.css"

function ProductCard({ title, desc, image, color }) {
  return (
    <div style={{ backgroundColor: color }} className={`front-products-card`}>
        <h4 style={styles.title}>{title}</h4>
        <p>{desc}</p>
        <img src={image} className='front-products-card-image' />
        <p className='front-products-card-hidden-cta'>Click to see more</p>
    </div>
  )
}

const styles = Stylesheet.create({
  title: {
    whiteSpace: "nowrap",
  }
})

export default ProductCard