import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Content } from "../../components"
import { AboutWrapper, AboutBackground, AboutContent } from "./about-element"

export const SectionAbout = ({ title }) => {
  const data = useStaticQuery(graphql`
    query About {
      image: file(relativePath: { eq: "artur-perfil.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      content: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/about/about.md)/" } }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            html
          }
        }
      }
    }
  `)

  const result = data.content.edges.map(({ node }) => node)

  return (
    <AboutWrapper id="about">
      <h2 data-sal="fade" data-sal-delay="300">
        {title}
      </h2>
      <AboutBackground>
        <Content>
          <AboutContent data-sal="fade" data-sal-delay="500">
            <Img fixed={data.image.childImageSharp.fixed} />
            {result.map(value => {
              return <div dangerouslySetInnerHTML={{ __html: value.html }} />
            })}
          </AboutContent>
        </Content>
      </AboutBackground>
    </AboutWrapper>
  )
}
