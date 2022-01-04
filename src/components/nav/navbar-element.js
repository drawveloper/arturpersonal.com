import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacings.small} 0;

  & img {
    height: 70px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    & img {
      height: 50px;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: space-around;
    & img {
      display: none;
    }
  }
`

export const NavigationWrapper = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    justify-content: space-around;
  }
`

export const NavigationLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  border-bottom: 10px solid transparent;
  margin-left: ${props => props.theme.spacings.medium};

  &:hover {
    border-bottom: 10px solid ${props => props.theme.colors.blue};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 14px;
    margin-left: ${props => props.theme.spacings.small};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 12px;
    border-width: 5px;

    &:hover {
      border-width: 5px;
    }
  }
`
