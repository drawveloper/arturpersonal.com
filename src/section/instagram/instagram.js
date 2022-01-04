import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Content, CardInsta } from "../../components"
import { InstagramWrapper, CardInstaWrapper } from "./instagram-element"

export const SectionInstagram = ({ title }) => {
  const data = useStaticQuery(graphql`
    query Instagram {
      image: allFile(
        filter: {
          absolutePath: { regex: "/(content/instagram/)/" }
          extension: { eq: "png" }
        }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fixed(height: 390) {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      post: allMdx(
        filter: { fileAbsolutePath: { regex: "/(content/instagram)/" } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            frontmatter {
              description
            }
          }
        }
      }
    }
  `)

  const arrData = []

  for (let index = 0; index < data.image.edges.length; index++) {
    let img = data.image.edges[index].node.childImageSharp.fluid
    let text = data.post.edges[index].node.frontmatter.description

    let value = {
      image: img,
      post: text,
    }
    arrData.push(value)
  }

  return (
    <InstagramWrapper>
      <h2 data-sal="fade" data-sal-delay="500">
        {title}
      </h2>
      <Content>
        <CardInstaWrapper>
          {arrData.map((i, index) => (
            <CardInsta data={i} key={index} />
          ))}
        </CardInstaWrapper>
      </Content>
    </InstagramWrapper>
  )
}
