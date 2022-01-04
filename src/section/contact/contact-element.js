import styled from "styled-components"

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const ContactBackgroundWrapper = styled.div`
  background: #bebec0;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: 0;
  display: flex;
  justify-content: center;

  @media ${props => props.theme.breakpoints.tablet} {
    button {
      margin: 0 auto 20px auto;
      display: block;
    }
    background-image: none;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    button {
      margin: 0 auto 20px auto;
      display: block;
    }
  }
`

export const ContactBackground = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  align-items: center;
  justify-content: flex-end;
  padding: ${props => props.theme.spacings.medium};

  img {
    object-position: 0px !important;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    justify-content: center;
    padding: ${props => props.theme.spacings.small};
    .gatsby-image-wrapper {
      display: none !important;
    }
  }
`

export const ContactContent = styled.div`
  border-left: 15px solid ${props => props.theme.colors.blue};
  padding-left: ${props => props.theme.spacings.medium};
  padding-right: ${props => props.theme.spacings.large};
  background: #bebec0;

  p {
    font-size: 50px;
    text-transform: uppercase;
  }

  strong {
    font-weight: 700;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`
export const ContactContentMobile = styled.div`
  display: none;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    font-size: 40px;
    text-transform: uppercase;
  }

  strong {
    font-weight: 700;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
    padding-left: ${props => props.theme.spacings.medium};
    border-left: 10px solid ${props => props.theme.colors.blue};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding-left: ${props => props.theme.spacings.small};
    border-left: 5px solid ${props => props.theme.colors.blue};

    p {
      font-size: 25px;
    }
  }
`
