import { Container } from "./style";

import spotify from "../../assets/spotify.png";

interface CardProps{
  title: string;
  description: string;
  imageURL: string;
  redirect: string
}

export function Card({ title, description, imageURL, redirect }: CardProps){
  const cardsProps: CardProps[] = [
    {
      title: 'Card 1',
      description: 'Descrição do Card 1',
      imageURL: spotify,
      redirect: 'git'
    },
  ]

  title = "spotify Recomendation"
  description = "Project developed in ReactJS for some people than not know what listen"
  imageURL = spotify
  redirect = "https://github.com/htzxd/spotifyRecomendation"


  return(
    <Container>
      
        <img src={imageURL} alt="project photo" />
        <a href={redirect} target="_blank">
          <h2>{title}</h2>
        </a>
        <p>
          {description}
        </p>
      
    </Container>
  )
}