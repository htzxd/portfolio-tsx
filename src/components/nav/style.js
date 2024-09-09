import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme })=> theme.colors.bg_main};
  padding: 2.4rem;

  > div {
    display: flex;
    justify-content: space-between;

    > a img {
      height: 2.4rem;
    }

    > ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 2rem;
      
      > li a {
        letter-spacing: 2px;
        text-decoration: none;
        font-weight: 900;
        font-size: 2.4rem;
        color: ${({ theme })=> theme.colors.nav_color};

        @media (max-width: 440px){
          font-size: 2rem;
          letter-spacing: normal;
        }
      }
    }
  }
`