import styled from "styled-components"

export const ButtonWrapper = styled.button`
  background-color: #33bb47 !important;
  color: #FFF;
	border-radius:10px;
	box-shadow: 2px 2px 3px #333;
  z-index:100;
  border: none;
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacings.small};
  }
  
  padding: 3px 15px;
  
  img {
    height: 30px;
    margin-right: 15px;
  }
  
  a {
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    line-height: 50px;
    font-weight: 700;
    border: none;
    display: flex;
   align-items: center;
   justify-content: space-between;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    a {
      padding: 10px ${props => props.theme.spacings.medium};
      font-size: 14px;
      line-height: normal;
    }
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 3px 5px;
  }
`