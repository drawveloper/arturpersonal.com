import styled from "styled-components"

export const GoToTopWrapper = styled.div`
  position: fixed;
  display: none;
  bottom: 5%;
  right: 10%;
  height: 40px;

  @media ${props => props.theme.breakpoints.mobile} {
    bottom: 2%;
    right: 15%;
  }
`
export const GoToTopButton = styled.button`
  position: absolute;
  background: ${props => props.theme.colors.blue};
  border: none;
  width: 35px;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  padding: 10px;
`
