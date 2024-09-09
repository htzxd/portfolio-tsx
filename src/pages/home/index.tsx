import { Container, Profile, Social, Text } from "./style";

import { Link } from "react-router-dom";

import { Nav } from "../../components/nav/index";
import { Footer } from "../../components/footer/index";

import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export function Home(){
  return (
    <Container>
      <Nav />
        <main>
          <Profile>
            <img src="https://github.com/htzxd.png"/>
            <Text>
              <h2>Hi, I'm Marco! </h2>
              <p>This is my Portfolio and browsing here <br />you will learn more about me!</p>
              <button><Link to="/about">Read More...</Link></button>
            </Text>
          </Profile>

          <Social>
            <h2>Social Media</h2>
            <ul>
              <li><a href="https://linkedin.com/in/dev-marcopereira" target="_blank"><LinkedinLogo /></a></li>
              <li><a href="https://intagram.com/marcorealz" target="_blank"><InstagramLogo /></a></li>
              <li><a href="https://github.com/htzxd" target="_blank"><GithubLogo /></a></li>
            </ul>
          </Social> 
        </main>

        <Footer/>
    </Container>
  )
}