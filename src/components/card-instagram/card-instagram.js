import React from "react"
import Img from "gatsby-image"
import { CardInstaWrapper } from "./card-instagram-element"

export const CardInsta = data => {
  return (
    <>
      <CardInstaWrapper data-sal="slide-up" data-sal-delay="500">
        <a href={data.data.post} target="_blank" rel="noreferrer">
          <Img fluid={data.data.image} />
        </a>
      </CardInstaWrapper>
    </>
  )
}
