import styled from "styled-components";

export const Container = styled.div`
 font-family: 'Oppen Sans', sans-serif;

 h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1.2rem;
  font-size: 4.8rem;
  font-style: italic;
  letter-spacing: 5px;
 }
  
`

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  strong {
    font-style: italic;
  }

  p {
    cursor: default;

    width: 50rem;
    background-color: ${({ theme }) => theme.colors.bg_main};
    padding: 1.8rem;
    border-radius: .8rem 0 .8rem 0;
    line-height: 150%;
    margin-block: 1.2rem;
  }

  img {
    margin-block: 1rem;
    border-radius: 0 .8rem 0 .8rem;
    max-width: 50rem;
  }

  border-top: 3px solid rgba(145, 99, 160, 0.8);
  border-bottom: 3px solid rgba(145, 99, 160, 0.8);

  @media (max-width: 1065px){
    img {
      max-width: 30rem;
    }

    p {
      max-height: 25rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 840px){
    img {
      max-width: 30rem;
    }

    p {
      max-width: 40rem;
    }
  }

  @media (max-width: 735px){
    display: flex;
    flex-direction: column-reverse;

    img {
      max-width: 40rem;
      max-height: 35rem;
    }

    p {
      max-width: 35rem;
      font-size: 1.2rem;
    }
  }
`