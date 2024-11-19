import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    
    height: 80vh;
    justify-content: space-evenly;
    align-items: center;
  }
  
  button {
    padding: 2.4rem;
    margin-top: 1rem;

    border: 1px solid ${({ theme })=> theme.colors.bg_main};
    border-radius: .8rem;
    background: transparent;
    cursor: pointer;
  }

  @media (max-width: 635px){
    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 435px){
    main {
      margin-inline: 2rem;
    }
  }
`

export const Profile = styled.div`
  display: flex;

  > img {
    border-radius: 8px;
    border: 1px solid ${({ theme })=> theme.colors.bg_main};
    padding: 2px;
    max-height: 15rem;
  }

`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`

export const Social = styled.div`
   grid-area: social;

  border-radius: .8rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: end;
  margin-right: 1rem;

  > ul {
    display: flex;
    gap: 2rem;
    font-size: 2.4rem;
    list-style: none;
  }
`