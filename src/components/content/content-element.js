import styled from "styled-components"

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 ${props => props.theme.spacings.medium};

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 900px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    max-width: 100%;
    padding: 0 ${props => props.theme.spacings.small};
  }
`
