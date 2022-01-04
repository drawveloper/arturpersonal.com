import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ButtonWrapper,
} from "./whatsapp-element"

export const WhatsAppButton = ({text}) => {
  const data = useStaticQuery(graphql`
    query {
      whatsapp: file(relativePath: { eq: "whatsapp-icon.svg" }) {
        url: publicURL
      }
    }
  `)
  if (!text) {
    text = "Olá, Artur! Gostaria de marcar uma aula experimental de personal trainer."
  }
  
  const href = `https://api.whatsapp.com/send?phone=5521992654093&text=${text}`
  
  return (
      <ButtonWrapper>          
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.whatsapp.url} alt="whatsapp" />
          Bora agora!
        </a>
      </ButtonWrapper>
  )
}
