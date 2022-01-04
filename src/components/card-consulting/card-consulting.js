import React from "react"
import { CardService } from "./card-consulting-element"

export const CardConsulting = ({ data, index }) => {
  const value = data.frontmatter
  return (
    <CardService data-sal="fade" data-sal-delay={`${index}000`}>
      <div>
        <img src={value.featureImage.publicURL} alt="" />
        <span />
      </div>
      <h4>{value.title}</h4>
      <p>{value.description}</p>
    </CardService>
  )
}
