import styled from "styled-components"

export const TopBarWrapper = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.grey};

  #logo {
    display: none;
    height: 45px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    height: 70px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 10px 100px #ccc;

    #logo {
      display: inline;
    }
  }
`
export const CallsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: space-around;
  }
`

export const CallsList = styled.div`
  display: flex;
`

export const CallLink = styled.div`
  padding-left: ${props => props.theme.spacings.medium};

  img {
    height: 15px;
    width: 15px;
    margin-right: 5px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    display: flex;
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding-left: ${props => props.theme.spacings.small};

    span {
      display: none;
    }

    img {
      height: 25px;
      width: 25px;
      margin-right: 5px;
    }
  }
`
