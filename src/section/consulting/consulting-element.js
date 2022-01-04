import styled from "styled-components"

export const ConsultingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ConsultingContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
  }
`
