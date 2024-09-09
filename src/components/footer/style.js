import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem;
  
  p {
    padding: 1.2rem;
    background: ${({ theme}) => theme.colors.bg_main};
    border-radius: .8rem;
  }
`