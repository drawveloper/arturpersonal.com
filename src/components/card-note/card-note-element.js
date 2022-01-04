import styled from "styled-components"

export const CardNoteWrapper = styled.div`
  width: 48%;
  padding: ${props => props.theme.spacings.medium};

  p {
    margin-top: 20px;
    text-align: center;
  }

  img {
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.spacings.small};

    p {
      font-size: 14px;
      text-align: initial;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;

    img {
      clip-path: none;
    }
  }
`
