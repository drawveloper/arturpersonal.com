import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { NavWrapper, NavigationWrapper, NavigationLink } from "./navbar-element"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        url: publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <img src={data.logo?.url} alt="logo" />
      <NavigationWrapper data-sal="slide-left" data-sal-delay="500">
        <NavigationLink onClick={() => scrollTo("#about")}>
          SOBRE
        </NavigationLink>
        <NavigationLink onClick={() => scrollTo("#consulting")}>
          CONSULTORIA
        </NavigationLink>
        <NavigationLink onClick={() => scrollTo("#contact")}>
          CONTATO
        </NavigationLink>
      </NavigationWrapper>
    </NavWrapper>
  )
}
