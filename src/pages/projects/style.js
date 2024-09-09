import styled from 'styled-components'

export const Container = styled.div`
  
`

export const Main = styled.div`
  margin: 2rem;
  place-content: center;
  gap: 1.2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 610px){
    display: flex;
    flex-direction: column;
  }
`