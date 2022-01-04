import styled from "styled-components"

export const CardInstaWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacings.medium};
  animation: ease-in-out 0.2s 0.2s;
  transition: 0.2s 0.2s ease-in-out;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: ${props => props.theme.spacings.small};
  }

  &:hover {
    transform: translateY(-5px);
  }
`
