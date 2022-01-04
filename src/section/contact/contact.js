import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ContactWrapper,
  ContactBackgroundWrapper,
  ContactBackground,
  ContactContent,
  ContactContentMobile,
} from "./contact-element"
import { Content, Form } from "../../components"

export const SectionContact = ({ title }) => {
  const data = useStaticQuery(graphql`
    query ContactForm {
      image: file(relativePath: { eq: "form.png" }) {
        id
        childImageSharp {
          fixed(width: 1094, height: 500) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      content: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(content/contact/contact.md)/" }
        }
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
    <ContactWrapper id="contact">
      <h2>{title}</h2>
      <ContactBackgroundWrapper url={data.image.childImageSharp.fluid.src}>
        <Content>
          <ContactBackground>
            <ContactContent>
              {result.map(value => {
                return <div dangerouslySetInnerHTML={{ __html: value.html }} />
              })}
            </ContactContent>
            <ContactContentMobile>
              <p>
                Diga <strong>não</strong> ao <br /> sedentarismo.
              </p>
            </ContactContentMobile>
            <Form />
          </ContactBackground>
        </Content>
      </ContactBackgroundWrapper>
    </ContactWrapper>
  )
}
