import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding:0;
  }

  body {
      font-family: ${props => props.theme.fonts.code} ;
      height: 100%;
  }

  h1, h2, h3, h4{
    font-family: ${props => props.theme.fonts.main} ;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
    color: ${props => props.theme.colors.white} ;

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 28px;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: ${props => props.theme.spacings.large};
    padding-bottom: ${props => props.theme.spacings.medium};
    text-align:center;

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 30px;
    }
  }

  h3 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    padding: ${props => props.theme.spacings.small} 0;

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 28px;
    }
  }

  h4{
    margin-top: 55px;
    margin-bottom: 15px;
    text-transform: uppercase;

  }

  a, button{
    cursor:pointer;
    transition: 0.5s ease;
    text-decoration: none;
  }

  p{
    font-size:16px;
    font-weight:400;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
