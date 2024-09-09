import { Container, Main } from "./style";

import { Nav } from "../../components/nav/index";
import { Footer } from "../../components/footer/index";

import avatar from "../../assets/avatar1.png";

export function About(){
  return(
    <Container>
      <Nav />
        
      <h1>About</h1>

      <Main>
        <p>
          My name is <strong>Marco Antonio Pereira</strong>, and I am a full-stack student with one year of programming experience. <br /> <br />
          I am currently <strong>studying Software Engineering</strong>, where I apply both theoretical and practical knowledge to develop technological solutions. <br /> <br /> 
          I have a strong focus on creating intuitive and appealing user interfaces, <strong>with advanced skills in Figma</strong>, allowing me to transform ideas 
          into consistent visual projects.
        </p>
        <img src={avatar} alt="profile photo" />
      </Main>
      <Footer/>
    </Container>
  )
}