import { Container, Main } from "./style";

import { Nav } from "../../components/nav/index";
import { Card } from "../../components/card/index";
import { Footer } from "../../components/footer/index";

import spotify from "../../assets/spotify.png";
import table from "../../assets/preview-tabela.png";
import devLinks from "../../assets/devlinks.png";
import gitfav from "../../assets/gitFav.png";
import pomo from "../../assets/pomotimer.png";
import game from "../../assets/guessingame.png";


export function Projects(){
  return(
    <Container>
      <Nav/>
      <Main>
        <Card
          title="Spotify Recommended"
          description="Listen Better is a music discovery platform built with ReactJS to recommend songs and artists based on your unique taste. 
          Discover curated playlists, 
          explore personalized mixes, and connect with your favorite streaming services for a seamless music experience.
          Find the perfect soundtrack for any moment with Listen Better."
          imageURL= {spotify}
          redirect="https://github.com/htzxd/spotifyRecomendation"
        />

        <Card 
          title="Table interactivity"
          description="A Checkout Table built with HTML, JavaScript, and CSS to display items, quantities, and prices dynamically. 
          It updates totals in real-time, providing a seamless, responsive experience for users during the checkout process."
          imageURL= {table}
          redirect="https://github.com/htzxd/tabela-interativa-desenvolvida-em-html-js-e-cs.-curso-NLW-Unite"
        />

        <Card 
          title="Dev Links"
          description="Dev Links is a curated collection of essential links and resources for developers. 
          From documentation and tutorials to tools and libraries, Dev Links offers quick access to everything you need to enhance your development workflow."
          imageURL= {devLinks}
          redirect="https://github.com/htzxd/devLinks"
        />

        <Card 
          title="Github Favorites"
          description="Git Favs is a tool designed to organize and list your favorite GitHub profiles. 
          Easily keep track of notable developers, projects, and repositories by saving and categorizing them for quick access."
          imageURL= {gitfav}
          redirect="https://github.com/htzxd/gitHubFav"
        />

        <Card 
          title="Focus Timer"
          description="Pomodo Tool is a productivity app that uses the Pomodoro Technique to help you stay focused and manage time effectively. 
          It breaks work into intervals, 
          typically 25 minutes long, separated by short breaks, boosting your productivity and maintaining motivation throughout your tasks."
          imageURL= {pomo}
          redirect="https://github.com/htzxd/focusTimer"
        />

        <Card 
          title="Guessing Game"
          description="Guessing Game is a fun, interactive game where you try to guess a number between 0 and 10. 
          With each attempt, you'll receive feedback to help you hone in on the correct number, making for an engaging and simple challenge."
          imageURL= {game}
          redirect="https://github.com/htzxd/guessingGame"
        />
        
      </Main>
      <Footer/>
    </Container>
  )
}