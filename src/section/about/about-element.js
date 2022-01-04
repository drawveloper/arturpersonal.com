import styled from "styled-components"

export const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const AboutBackground = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: ${props => props.theme.spacings.medium};
  display: flex;
  justify-content: center;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`
export const AboutContent = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 50%;
    padding: ${props => props.theme.spacings.large};

    p {
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      margin-bottom:10px;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;

    div {
      width: 100%;
      padding: ${props => props.theme.spacings.small};
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    .gatsby-image-wrapper {
      max-width: 90%;
      max-height: 350px;
    }
  }
`
