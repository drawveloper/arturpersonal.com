import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Content, CardNote } from "../../components"
import { NotesWrapper, CardNoteWrapper } from "./notes-element"

export const SectionNotes = ({ title }) => {
  const data = useStaticQuery(graphql`
    query Notes {
      image: allFile(
        filter: {
          absolutePath: { regex: "/(content/notes/)/" }
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
        filter: { fileAbsolutePath: { regex: "/(content/notes)/" } }
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
    <NotesWrapper>
      <h2 data-sal="fade" data-sal-delay="500">
        {title}
      </h2>
      <Content>
        <CardNoteWrapper>
          {arrData.map((i, index) => (
            <CardNote data={i} key={index} />
          ))}
        </CardNoteWrapper>
      </Content>
    </NotesWrapper>
  )
}
