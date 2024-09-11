import { Container, Main } from "./style";

import { Nav } from "../../components/nav/index";
import { Footer } from "../../components/footer/index";

import react from "../../assets/logo-react.svg";
import js from "../../assets/logo-javascript.svg";
import css from "../../assets/logo-css3.svg";
import html from "../../assets/logo-html5.svg";
import node from "../../assets/logo-nodejs.svg";
import typeScript from "../../assets/typescript.svg";

export function Tech(){
  return (
    <Container>
      <Nav/>

      <h1>Technologies</h1>
        <Main>
          <ul>
            <li>
              <img src={react} alt="tech logo" />
              <h2>React</h2>
              <a href="#">Click here for seen my projects in React</a>
            </li>

            <li>
              <img src={js} alt="tech logo" />
              <h2>javascript</h2>
              <a href="#">Click here for seen my projects in JavaScript</a>
            </li>

            <li>
              <img src={css} alt="tech logo" />
              <h2>css3</h2>
              <a href="#">Click here for seen my projects in CSS3</a>
            </li>

            <li>
              <img src={html} alt="tech logo" />
              <h2>html5</h2>
              <a href="#">Click here for seen my projects in HTML5</a>
            </li>

            <li>
              <img src={node} alt="tech logo" />
              <h2>nodejs</h2>
              <a href="#">Click here for seen my projects in NodeJS</a>
            </li>
            
            <li>
              <img src={typeScript} alt="tech logo" />
              <h2>TypeScript</h2>
              <a href="#">Click here for seen my projects in TypeScript</a>
            </li>
          </ul>
          
        </Main>
      <Footer/>
    </Container>
  )
}