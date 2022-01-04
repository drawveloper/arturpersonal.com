import React from "react"
import Img from "gatsby-image"
import { CardNoteWrapper } from "./card-note-element"

export const CardNote = data => {
  return (
    <>
      <CardNoteWrapper data-sal="slide-up" data-sal-delay="500">
        <Img fluid={data.data.image} />
        <p>{data.data.post}</p>
      </CardNoteWrapper>
    </>
  )
}
