import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Content, CardConsulting } from "../../components"
import { ConsultingWrapper, ConsultingContent } from "./consulting-element"

export const SectionConsulting = ({ title }) => {
  const data = useStaticQuery(graphql`
    query Consulting {
      files: allMdx(
        filter: { fileAbsolutePath: { regex: "/(content/consulting)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              description
              featureImage {
                publicURL
              }
              title
            }
          }
        }
      }
    }
  `)

  return (
    <ConsultingWrapper id="consulting">
      <h2 data-sal="fade" data-sal-delay="500">
        {title}
      </h2>
      <Content>
        <ConsultingContent>
          {data.files.edges.map((i, index) => {
            return <CardConsulting data={i.node} key={index} index={index} />
          })}
        </ConsultingContent>
      </Content>
    </ConsultingWrapper>
  )
}
