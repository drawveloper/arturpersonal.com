import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { WhatsAppButton } from "../whatsapp/whatsapp"
import { BannerWrapper, BannerContent } from "./banner-element"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query Banner {
      image: file(relativePath: { eq: "hero.jpg" }) {
        id
        childImageSharp {
          fixed(height: 400, quality: 85) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      content: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/banner/banner.md)/" } }
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
    <BannerWrapper>
      <Img className="banner" fixed={data.image.childImageSharp.fixed} />
      <BannerContent>
        <div className="card">
          {result.map(value => {
            return <div dangerouslySetInnerHTML={{ __html: value.html }} />
          })}
          <WhatsAppButton/>
        </div>
      </BannerContent>
    </BannerWrapper>
  )
}
