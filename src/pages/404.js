import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Wrapper404 } from "../themes/404-element"

export default function NotFound() {
  const data = useStaticQuery(graphql`
    query NotFound {
      image: file(relativePath: { eq: "404.png" }) {
        id
        childImageSharp {
          fixed(height: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper404>
      <p>Página não encontrada</p>
      <Img fixed={data.image.childImageSharp.fixed} />
      <Link to="/">Voltar para o site</Link>
    </Wrapper404>
  )
}
