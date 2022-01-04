import styled from "styled-components"

export const BannerWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  & > div:first-child {
    width: 100% !important;
  }

  img {
    object-position: 0px !important;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    height: 300px;

    img {
      object-position: -150px !important;
    }

    .gatsby-image-wrapper {
      height: 300px !important;
    }
  }
`

export const BannerContent = styled.div`
  width: 47%;
  position: absolute;
  
  div.card {
    max-width: 85%;
    max-height: 350px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2em 2em;
  }
  
  h1 {
    font-size: 1.9em;
  }

  p {
    color: ${props => props.theme.colors.white};
    padding: 10px 0 0 0;
  }
  
  button {
    margin-top: 20px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 0 ${props => props.theme.spacings.medium};
  }
`
