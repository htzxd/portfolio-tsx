import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 1.2rem;

    font-size: 3.8rem;
    letter-spacing: 3px;

    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 3px;
  }

  img {
    height: 8rem;
  }
`

export const Main = styled.div`
  margin-block: 1.2rem;

  border-top: 3px solid rgba(145, 99, 160, 0.8);
  border-bottom: 3px solid rgba(145, 99, 160, 0.8);

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
    
    list-style: none;
  }

  li {
    background: ${({ theme }) => theme.colors.bg_main};
    border-radius: 0 .8rem .0 .8rem;
    text-align: center;

    margin: 1rem;

    padding: 1.2rem;
  }

  img {
    max-height: 80px;
  }

  @media (max-width: 599px){
    ul {
      display: flex;
      flex-direction: column;
    }
  }
`