import styled from "styled-components"

export const InstagramWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CardInstaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .gatsby-image-wrapper {
    height: 280px;
    width: 280px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    .gatsby-image-wrapper {
      height: 180px;
      width: 180px;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    .gatsby-image-wrapper {
      height: 280px;
      width: 280px;
    }
  }
`
