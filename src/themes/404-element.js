import styled from "styled-components"

export const Wrapper404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.grey};

  p {
    font-size: 20px;
    margin-bottom: 50px;
    color: #2f80ed;
    font-weight: 700;
  }

  a {
    background: ${props => props.theme.colors.blue};
    padding: ${props => props.theme.spacings.small};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    border: unset;
    border-radius: 5px;

    &:hover {
      filter: brightness(80%);
    }
  }
`
