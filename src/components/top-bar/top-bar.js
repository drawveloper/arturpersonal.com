import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Content } from "../content/content"
import { TopBarWrapper, CallsWrapper, CallLink, CallsList } from "./top-bar-element"

export const TopBar = () => {
  const data = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram-blue.svg" }) {
        url: publicURL
      }
      whatsapp: file(relativePath: { eq: "whatsapp-blue.svg" }) {
        url: publicURL
      }
      logo: file(relativePath: { eq: "logo.svg" }) {
        url: publicURL
      }
    }
  `)

  return (
    <TopBarWrapper id="top">
      <Content>
        <CallsWrapper>
          <img src={data.logo?.url} alt="logo" id="logo" />
          <CallsList>
            <CallLink>
              <a
                href="https://www.instagram.com/arturfdrpersonal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={data.instagram.url} alt="instagram" />
                <span>@arturfdrpersonal</span>
              </a>
            </CallLink>
            <CallLink>
              <a
                href="https://api.whatsapp.com/send?phone=5521992654093&text=Olá, Artur! Gostaria de marcar uma aula experimental de personal trainer."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={data.whatsapp.url} alt="whatsapp" />
                <span>(21) 99265-4093</span>
              </a>
            </CallLink>
          </CallsList>
        </CallsWrapper>
      </Content>
    </TopBarWrapper>
  )
}
