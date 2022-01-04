import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  width: 100%;
  min-height: 11.25rem;
  padding: ${props => props.theme.spacings.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #logo-footer {
    height: 55px;

    @media ${props => props.theme.breakpoints.mobile} {
      margin-bottom: 20px;
    }
  }

  & p {
    color: ${props => props.theme.colors.white};
    text-align: center;
    flex: 0 0 100%;
    font-size: 12px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacings.small};
  }
`

export const FooterSocialWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid #404040;
  margin-bottom: ${props => props.theme.spacings.medium};
  padding: ${props => props.theme.spacings.small};

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
    flex-direction: column;
  }
`

export const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  a {
    width: 250px;
    align-items: center;
    display: flex;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.white};

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 12px;
    }
  }

  & img {
    padding: 0 1rem;
    transition: filter 0.5s ease;

    @media ${props => props.theme.breakpoints.mobile} {
      padding: 0 0.5rem;
      height: 25px;
    }
  }

  & img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
