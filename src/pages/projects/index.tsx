import { Container, Main } from "./style";

import { Nav } from "../../components/nav/index";
import { Card } from "../../components/card/index";
import { Footer } from "../../components/footer/index";

export function Projects(){
  return(
    <Container>
      <Nav/>
      <Main>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Main>
      <Footer/>
    </Container>
  )
}