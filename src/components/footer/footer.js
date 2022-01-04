import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Content } from "../../components"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "./footer-element"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        url: publicURL
      }
      whatsapp: file(relativePath: { eq: "whatsapp.svg" }) {
        url: publicURL
      }
      logo: file(relativePath: { eq: "logo-white.svg" }) {
        url: publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <Content>
        <FooterSocialWrapper>
          <img src={data.logo.url} id="logo-footer" alt="logo-footer" />
          <FooterSocialIcons>
            <a
              href="https://www.instagram.com/arturfdrpersonal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.instagram.url} alt="instagram" />
              arturfdrpersonal
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521992654093&text=Olá, Artur! Gostaria de marcar uma aula experimental de personal trainer."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.whatsapp.url} alt="whatsapp" />
              +55 (21) 99265-4093
            </a>
          </FooterSocialIcons>
        </FooterSocialWrapper>
        <p>
          © 2022 ARTUR PERSONAL TRAINER, RIO DE JANEIRO - RJ - TODOS DIREITOS
          RESERVADOS
        </p>
      </Content>
    </FooterWrapper>
  )
}
