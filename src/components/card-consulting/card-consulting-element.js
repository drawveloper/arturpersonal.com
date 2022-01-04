import styled from "styled-components"

export const CardService = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${props => props.theme.spacings.medium};

  div {
    position: relative;
    display: flex;
  }

  img {
    width: 100px;
  }

  span {
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: -1;
    border-radius: 100%;
    margin-top: 25px;
    margin-left: 35px;
    background: ${props => props.theme.colors.blue};
  }

  p {
    text-align: center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.spacings.small};
    width: 100%;
    text-align: center;
  }
`
