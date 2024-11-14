import React from 'react'
import star from "../assets/icons/star.svg"
function ReviewStart({ rating }) {

  return (
    Array(rating).fill(star).map((el, i) => <img key={i} className='' src={star} alt="" />)
  )
}

export default ReviewStart